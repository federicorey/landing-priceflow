"use client";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
        {label}
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-[2.125rem] font-bold text-secondary-dark leading-snug mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
