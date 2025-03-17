import software from "../../assets/software.png";

const FounderImageLeft = ({ image }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute bottom-0 left-0 w-[85%] h-[75%] bg-[var(--color-secondary)] rounded-lg">
        <div className=" w-full absolute flex flex-col bottom-0 h-1/3 items-center justify-center">
          <p className="text-lg md:text-[clamp(2px,2vw,22px)] font-bold">Skye Chao</p>
          <p className="text-sm md:text-[clamp(2px,2vw,22px) font-light]">AI & Business</p>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[85%] h-[75%] bg-amber-900 rounded-lg shadow-lg">
        <img src={image} className="object-cover w-full h-full rounded-lg" />
      </div>
    </div>
  );
};
const FounderImageRight = ({ image }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute bottom-0 right-0 w-[85%] h-[75%] bg-[var(--color-secondary)] rounded-lg">
        <div className=" w-full absolute flex flex-col bottom-0 h-1/3 items-center justify-center">
          <p className="text-lg md:text-[clamp(2px,2vw,22px)] font-bold">Joshua Jenkins</p>
          <p className="text-sm md:text-[clamp(2px,2vw,22px) font-light]">
            Software & Consulting
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-[85%] h-[75%] bg-amber-900 rounded-lg shadow-lg">
        <img src={image} className="object-cover w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

const Founder = () => {
  return (
    <div className="flex flex-col items-center text-[var(--color-primary)] mt-16 md:mt-32">
      <h2 className="text-3xl font-bold px-8 mb-20">Meet the Founders</h2>
      <div className="md:h-[40vw] md:max-h-[400px] w-full flex flex-col md:flex-row justify-center max-w-[225px] md:max-w-none gap-[100px] md:gap-[5vw] text-[var(--color-background)] mb-20">
        <div className="h-full aspect-[4/5]">
          <FounderImageLeft image={software} />
        </div>
        <div className="h-full aspect-[4/5]">
          <FounderImageRight image={software} />
        </div>
      </div>
      <p className="px-5 md:px-20 text-xl mb-20">
        At Chao & Jenkins Tech we're committed to providing the best solutions
        for every client—whether you're a small startup or a large enterprise.
        Our passion for innovation and personalized service means we work
        tirelessly to meet your unique needs and drive your success.
      </p>
    </div>
  );
};
export default Founder;
