interface SectionBannerProps {
  title: string;
  subtitle?: string;
  theme: 'theme-investigacion' | 'theme-divulgacion' | 'theme-consultoria' | 'theme-cursos-ado' | 'theme-cursos-acad' | 'theme-blog';
  children?: React.ReactNode;
}

export function SectionBanner({ title, subtitle, theme, children }: SectionBannerProps) {
  return (
    <div className={`section-banner py-16 ${theme}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
