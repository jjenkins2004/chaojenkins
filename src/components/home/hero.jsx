const Hero = () => {
  return (
    <div className="w-full">
      <section className="flex flex-col items-center justify-center h-[125vh] md:h-screen text-center bg-[radial-gradient(circle_at_top,_#83a6f7_0%,_var(--color-background)_90%)]">
        <h1 className="text-5xl font-bold text-gray-900">
          <span className="text-[var(--color-secondary)] font-extrabold">
            DATA
          </span>{" "}
          and
          <span className="text-[var(--color-secondary)] font-extrabold">
            {" "}
            SOFTWARE
          </span>{" "}
          solutions for modern businesses
        </h1>

        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          Innovative tech solutions for a smarter future.
        </p>

        <a
          href="/about"
          className="mt-6 px-6 py-3 bg-[var(--color-secondary)] text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          See Our Work
        </a>
      </section>
    </div>
  );
};
export default Hero;
