import { Link } from "react-router-dom";

const Support = () => {
  return (
    <section className="max-w-3xl mx-auto mt-12 text-center px-3 md:px-5">
      <h2 className="text-3xl font-bold mb-4">Need Support?</h2>
      <p className="text-lg text-gray-700 mb-2">
        If you have any questions or need assistance, please email us at{" "}
        <a
          href="mailto:support@chaojenkins.com"
          className="text-blue-600 hover:underline"
        >
          support@chaojenkins.com
        </a>
      </p>
      <p className="text-sm text-gray-600">
        Read our{" "}
        <Link
          to="/clipirl/privacy-policy"
          className="text-blue-600 hover:underline"
        >
          Privacy Policy
        </Link>{" "}
        for more information.
      </p>
    </section>
  );
};

export default Support;
