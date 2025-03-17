import Faq from "../../components/clipirl/faq";
import Intro from "../../components/clipirl/intro";
import Support from "../../components/clipirl/support";
import Animation from "../../components/clipirl/animation"

const Clipirl = () => {
  return (
    <div className="bg-[var(--color-clipirl-background)] font-courierprime pb-10">
      <Animation />
      <Intro />
      <Faq />
      <Support />
    </div>
  );
};

export default Clipirl;
