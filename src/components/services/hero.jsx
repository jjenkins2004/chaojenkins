import backdrop_top from "../../assets/backdrop_top.png";
import services_hero from "../../assets/services_hero.jpg";

const Hero = () => {
  return (
    <section className=" relative bg-[var(--color-secondary)] pt-28 px-6 w-full h-fit text-[var(--color-background)] text-center">
      <img
        src={backdrop_top}
        alt="Backdrop"
        className="absolute top-full left-0 transform rotate-180"
      />
      <img
        src={services_hero}
        alt="blue lasers"
        className="w-full h-52 object-cover rounded-xl mb-12 drop-shadow-lg"
      />
      <h2 className="text-4xl font-bold mb-6">Services</h2>
      <h3 className="text-xl font-semibold mb-3">We’re dedicated to providing tailored solutions with care, expertise, and a commitment for your success.</h3>
    </section>
  );
};
export default Hero;
