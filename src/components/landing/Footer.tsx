export default function Footer() {
  return (
    <footer className="bg-secondary-dark border-t border-white/10 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-white/40">
          © {new Date().getFullYear()} PriceFlow
        </p>
        <a
          href="mailto:contacto@priceflow.app"
          className="text-white/40 hover:text-white/80 transition-colors duration-200"
        >
          Contacto: contacto@priceflow.app
        </a>
      </div>
    </footer>
  );
}
