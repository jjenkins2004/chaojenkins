const TextSection = ({ title, content }) => {
  return (
    <div className="flex flex-col px-2">
      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>
      <p className="text-lg font-medium">
        {content}
      </p>
    </div>
  );
};

const ImageSection = ({ image }) => {
  return (
    <img src={image} alt="row image" className="w-full h-full rounded-md object-cover" />
  );
};

const Row = ({ title, content, image, imageFirst }) => {
  return (
    <div className="shadow-lg py-5">
      {imageFirst ? (
        <div className="w-full px-2.5 flex ">
          <div className="hidden md:block w-2/5">
            <ImageSection image={image} />
          </div>
          <div className="md:w-3/5 text-center md:text-right md:pl-6">
            <TextSection title={title} content={content} />
          </div>
        </div>
      ) : (
        <div className="w-full px-2.5 flex flex-col md:flex-row">
          <div className="text-center md:text-left md:w-3/5 md:pr-6">
            <TextSection title={title} content={content} />
          </div>
          <div className="hidden md:block md:w-2/5">
            <ImageSection image={image} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Row;
