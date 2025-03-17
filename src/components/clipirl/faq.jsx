import { React, useState } from "react";

const Faq = () => {

  const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="border-b border-gray-600 py-4">
        <button
          onClick={() => {console.log("opening"); setOpen(!open)}}
          className="w-full text-left focus:outline-none flex justify-between items-center"
        >
          <h3 className="text-xl font-semibold">{question}</h3>
          <span className="text-2xl">{open ? "-" : "+"}</span>
        </button>
        {open && <p className="mt-2 text-gray-700">{answer}</p>}
      </div>
    );
  };

  return (
    <section className="max-w-3xl mx-auto px-3 md:px-5">
      <h2 className="text-3xl font-bold mb-6">
        ClipIRL – Frequently Asked Questions (FAQ)
      </h2>
      <FAQItem
        question="How does ClipIRL work?"
        answer="ClipIRL runs a continuous audio buffer in the background, but it doesn’t save any audio unless you choose to. When you tap the “Clip” button, the app retroactively saves a segment of audio from the past few seconds or minutes (5 seconds to 5 minutes) and stores it locally on your device."
      />
      <FAQItem
        question="Is ClipIRL always recording me?"
        answer="Technically, ClipIRL uses a temporary buffer to listen so it can save clips if you choose to—but nothing is permanently stored unless you press the “Clip” button. The buffer is constantly overwritten and never saved by default."
      />
      <FAQItem
        question="Where are my audio clips stored?"
        answer="All clips are saved locally on your device and never leave your phone. You can access and manage them in the built-in “Gallery” section of the app."
      />
      <FAQItem
        question="Does ClipIRL upload my clips to the cloud or any server?"
        answer="No. ClipIRL does not upload, transmit, or sync any data. All clips and activity stay on your device. We do not use a backend or any cloud storage."
      />
      <FAQItem
        question="Do I need an account to use ClipIRL?"
        answer="No accounts, no logins, no user tracking. Just download and start clipping."
      />
      <FAQItem
        question="What permissions does ClipIRL require?"
        answer="The app needs access to your device’s microphone to capture audio, and local storage to save clips. That’s it. We don’t access your contacts, location, photos, or any other personal data."
      />
      <FAQItem
        question="Can I choose how much audio gets saved when I clip something?"
        answer="Yes! You can configure the clip length in the app’s home page—choose anywhere from 5 seconds up to 5 minutes to capture the moment that just happened."
      />
      <FAQItem
        question="What if I delete a clip?"
        answer="Once you delete a clip from your gallery, it is permanently removed from your device. There’s no cloud backup or recovery—your data is truly in your hands."
      />
      <FAQItem
        question="Is ClipIRL free to use?"
        answer="Yes, ClipIRL is free to use. We may explore additional features or premium options in the future, but the core experience will always prioritize privacy and simplicity."
      />
      <FAQItem
        question="Who created ClipIRL?"
        answer="ClipIRL was developed by Chao & Jenkins Tech, a privacy-focused software company committed to building tools that respect user data and offer innovative offline-first solutions."
      />
    </section>
  );
};
export default Faq;
