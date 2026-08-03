const logos = ["Nordwind", "Halcyon", "Ferro Labs", "Kindle & Co", "Atlas Studio"];

export default function LogoCloud() {
  return (
    <section className="border-y border-border py-10">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          موثوق به من قبل فرق متخصصة في
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-display text-lg font-medium text-muted-foreground/60"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
