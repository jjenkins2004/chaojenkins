import App from '../../App';
import AppstoreIcon from '../../assets/app_store.svg'

const Intro = () => {
  return (
    <section className="max-w-3xl mx-auto mb-12 px-3 md:px-5">
    <div className="flex justify-between items-center mb-6">
    <h1 className="text-4xl font-bold">ClipIRL</h1>
    <img src={AppstoreIcon} className="w-30"/>
    </div>
      <div className="flex flex-col gap-5 px-3 text-lg text-gray-700">
        <p>
          You didn’t hit record? Doesn’t matter. ClipIRL travels to the past and
          gets these moments for you.
        </p>
        <p>
          Life moves fast. ClipIRL lets you rewind it. With ClipIRL, you DON'T
          need to be constantly recording. You DON'T need to have the app open.
          You DON'T even need your phone TURNED ON! Just one click for the
          magic.
        </p>
        <p>
          Something funny happened? Clip it. Your friend said something he/she
          shouldn't have? Clip it. Your baby said his/her first words? Clip it.
        </p>
        <p>
          All saved clips go to your Gallery — trim, export, or save them to
          your phone. Use the settings page to fine tune the app to your
          preferred accessibility.
        </p>
      </div>
    </section>
  );
};
export default Intro;
