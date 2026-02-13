import dwdmFiberDetail from "@/assets/dwdm-fiber-detail.jpg";

const DwdmWhat = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <img
            src={dwdmFiberDetail}
            alt="DWDM fiber optic detail"
            className="rounded-2xl shadow-card w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Apa Itu <span className="text-primary">DWDM?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            DWDM (Dense Wavelength Division Multiplexing) adalah teknologi transmisi fiber optik
            yang memungkinkan multiple wavelength berjalan dalam satu core fiber, sehingga menghasilkan
            kapasitas transmisi data sangat besar dalam satu jalur fiber.
          </p>
          <div className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary">
            <p className="text-foreground font-medium">
              "Satu fiber, multi-channel, multi-terabit capacity."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DwdmWhat;
