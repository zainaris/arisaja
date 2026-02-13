const partners = Array.from({ length: 6 }, (_, i) => `Partner ${i + 1}`);

const PartnersStrip = () => (
  <section className="py-16 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-foreground text-center mb-12">
        Trusted by <span className="text-primary">Businesses</span>
      </h2>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {partners.map((name) => (
          <div
            key={name}
            className="h-16 bg-muted rounded-xl flex items-center justify-center text-muted-foreground font-medium text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersStrip;
