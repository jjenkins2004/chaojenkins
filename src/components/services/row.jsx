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
          <div className="w-2/5">
            <ImageSection image={image} />
          </div>
          <div className="w-3/5 text-right pl-6">
            <TextSection title={title} content={content} />
          </div>
        </div>
      ) : (
        <div className="w-full px-2.5 flex">
          <div className="w-3/5 pr-6">
            <TextSection title={title} content={content} />
          </div>
          <div className="w-2/5">
            <ImageSection image={image} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Row;
