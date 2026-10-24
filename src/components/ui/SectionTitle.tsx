import Pill from './Pill';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
};

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'left',
  tone = 'dark',
}: SectionTitleProps) {
  const centered = align === 'center';
  return (
    <div className={`flex flex-col gap-3 ${centered ? 'items-center text-center' : 'items-start'}`}>
      <Pill tone={tone}>{eyebrow}</Pill>
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${tone === 'light' ? 'text-wine-deep' : ''}`}>
        {title} <span className="text-rose">{highlight}</span>
      </h2>
      {subtitle && (
        <p className={`max-w-md text-sm ${tone === 'light' ? 'text-mocha' : 'text-cream/60'}`}>{subtitle}</p>
      )}
    </div>
  );
}
