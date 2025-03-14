import Header from "../components/header";
import Footer from "../components/footer";
import Aboutus from "../components/about/aboutus";
import Founder from "../components/about/founder";

const About = () => {
  return (
    <div className="max-w-[1500px]">
      <Header />
      <Aboutus />
      <Founder />
      <Footer />
    </div>
  );
};
export default About;
