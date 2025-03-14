import Row from "./row";
import data from "../../assets/data.jpg"
import software from "../../assets/software.png"
import ai from "../../assets/ai.jpg"
import cloud from "../../assets/cloud.jpg"
import business from "../../assets/business.png"

const List = () => {
  return (
    <div className="flex flex-col gap-[10vh] mt-[10vw] mb-10 text-[var(--color-primary)] max-w-[1500px] px-8">
      <Row
        title="Data Strategy & Consulting"
        content="Our Data Strategy & Consulting services help businesses unlock the full potential of their data. We provide expert guidance on data collection, organization, and analysis to drive smarter decision-making, improve efficiency, and uncover new growth opportunities. Whether you're building a data-driven culture or optimizing existing processes, we tailor strategies to fit your unique business needs."
        image={data}
        imageFirst={false}
      />
      <Row
        title="Custom Software Development"
        content="Our Custom Software Development services are designed to create tailored solutions that fit your business perfectly. From web and mobile applications to enterprise systems, we build scalable, high-performance software that streamlines operations, enhances user experiences, and drives innovation. Whether you need a brand-new application or improvements to existing systems, we ensure seamless integration and long-term reliability."
        image={software}
        imageFirst={true}
      />
      <Row
        title="AI & Machine Learning Solutions"
        content="Our AI & Machine Learning Solutions help businesses harness the power of artificial intelligence to automate processes, gain deeper insights, and enhance decision-making. We develop custom AI models, predictive analytics, and intelligent automation solutions tailored to your unique needs. Whether it's optimizing operations, personalizing customer experiences, or detecting patterns in large datasets, we leverage cutting-edge AI to drive innovation and efficiency."
        image={ai}
        imageFirst={false}
      />
      <Row
        title="Cloud & Ifastructure Optimization"
        content="Our Cloud & Infrastructure Optimization services ensure your business operates with maximum efficiency, scalability, and security. We help you migrate to the cloud, optimize existing infrastructure, and implement cost-effective solutions that enhance performance and reliability. Whether you're looking to reduce downtime, improve resource management, or scale seamlessly, we design cloud strategies tailored to your business needs."
        image={cloud}
        imageFirst={true}
      />
      <Row
        title="Business Intelligence"
        content="Our Business Intelligence services transform raw data into actionable insights, empowering your business to make informed, strategic decisions. We design and implement intuitive dashboards, reporting systems, and data visualization tools that provide real-time analytics. Whether you need to track key performance indicators, identify trends, or uncover hidden opportunities, our solutions help you turn data into a competitive advantage."
        image={business}
        imageFirst={false}
      />
    </div>
  );
};
export default List;
