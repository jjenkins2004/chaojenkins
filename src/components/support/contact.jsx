const Contact = () => {
  return (
    <div className="flex flex-col mt-28 px-10 text-[var(--color-primary)]">
      <h1 className="text-4xl font-bold mb-10">Support</h1>
      <div className="flex justify-center w-full h-fit gap-[10%]">
        <div className="flex flex-col w-2/5 max-w-[300px]">
          <p className="text-lg ">Contact Information:</p>
          <div className="w-full flex-1 bg-[var(--color-secondary)] text-[var(--color-background)] px-5 py-7 rounded-xl shadow-lg break-all flex flex-col gap-4">
            <p>support@chaojenkins.com</p>
            <p>+1 (909) 413-2223</p>
          </div>
        </div>
        <div className="flex flex-col w-2/5 max-w-[300px]">
          <p className="text-lg ">Working Hours:</p>
          <div className="w-full flex-1 bg-[var(--color-secondary)] text-[var(--color-background)] px-5 py-7 rounded-xl shadow-lg break-all flex flex-col gap-4">
            <p>
              Monday - Saturday
              <br />
              9am - 5pm
            </p>

            <p>
              Sunday
              <br />
              CLOSED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
