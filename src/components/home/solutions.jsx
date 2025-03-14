import backdrop_top from "../../assets/backdrop_top.png";

const Card = ({ text }) => {
  return (
    <div className="px-5 py-3 rounded-4xl bg-[var(--color-background)] text-[var(--color-primary)] text-center text-xl font-bold w-fit">
      {text}
    </div>
  );
};

const Solutions = () => {
  return (
    <section className="relative w-full bg-[var(--color-secondary)] z-20">
      <img
        src={backdrop_top}
        alt="Backdrop"
        className="absolute bottom-full left-0 transform translate-y-0.5"
      />
      <div className="flex justify-center text-[var(--color-background)]">
        <div className="flex flex-col items-center px-4 max-w-[1250px]">
          <h2 className="text-4xl font-bold">Tailored Tech Solutions</h2>
          <h3 className="text-xl font-semibold mt-6">
            From data analytics to software development, we will help you stay
            ahead of the curve
          </h3>
          <div className="flex flex-col mt-28 w-full px-16 mb-60">
            <p className="text-2xl font-bold mb-8">Things we offer:</p>
            <div className="grid grid-cols-2 gap-8">
              <Card text="Data Strategy & Consulting" />
              <Card text="AI & Machine Learning Solutions" />
              <Card text="Custom Software Development" />
              <Card text="Cloud & Infastructure Optimization" />
              <Card text="Business Intelligence" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solutions;
