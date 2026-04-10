"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { getSupabase } from "@/lib/supabase";

type FormStatus = "idle" | "loading" | "success" | "error";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  // Focus email input on open
  useEffect(() => {
    if (isOpen && emailRef.current) {
      setTimeout(() => emailRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const resetForm = () => {
    setEmail("");
    setEmpresa("");
    setMensaje("");
    setStatus("idle");
    setErrorMessage("");
  };

  const handleClose = () => {
    if (status !== "loading") {
      onClose();
      // Reset form after close animation
      setTimeout(resetForm, 300);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const { error } = await getSupabase().from("leads").insert([
        {
          email: email.trim(),
          empresa: empresa.trim(),
          mensaje: mensaje.trim() || null,
        },
      ]);

      if (error) {
        throw error;
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message || "Hubo un error al enviar. Intentá de nuevo.");
      } else {
        setErrorMessage("Hubo un error al enviar. Intentá de nuevo.");
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-1">
              <h3 className="text-xl font-bold text-secondary-dark">
                Solicitar acceso
              </h3>
              <button
                id="modal-close"
                onClick={handleClose}
                disabled={status === "loading"}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-alt transition-colors text-muted hover:text-foreground disabled:opacity-50 cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 pb-7 pt-1">
              {/* Idle / Loading state => show form */}
              {(status === "idle" || status === "loading" || status === "error") && (
                <form onSubmit={handleSubmit} className="space-y-5 mt-2">
                  <p className="text-sm text-muted leading-relaxed">
                    Dejanos tus datos y te contactamos para darte acceso a la
                    plataforma.
                  </p>

                  <div>
                    <label
                      htmlFor="lead-email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      ref={emailRef}
                      id="lead-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      placeholder="tu@empresa.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lead-empresa"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Empresa <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="lead-empresa"
                      type="text"
                      required
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      disabled={status === "loading"}
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lead-mensaje"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mensaje{" "}
                      <span className="text-muted font-normal">(opcional)</span>
                    </label>
                    <textarea
                      id="lead-mensaje"
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      disabled={status === "loading"}
                      rows={3}
                      placeholder="Contanos brevemente qué necesitás..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none disabled:opacity-60"
                    />
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-lg p-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    id="lead-submit"
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/60 text-white font-semibold py-3.5 rounded-xl shadow-md shadow-primary/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed mt-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar solicitud"
                    )}
                  </button>
                </form>
              )}

              {/* Success state */}
              {status === "success" && (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-secondary-dark mb-2">
                    ¡Solicitud enviada!
                  </h4>
                  <p className="text-muted text-sm mb-6">
                    Te vamos a contactar pronto para darte acceso a PriceFlow.
                  </p>
                  <button
                    id="modal-close-success"
                    onClick={handleClose}
                    className="text-primary hover:text-primary-dark font-semibold transition-colors cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
