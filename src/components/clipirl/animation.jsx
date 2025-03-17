import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import top from "../../assets/clipirl_phone_top.png";
import bottom from "../../assets/clipirl_phone_bottom.png";

const Animation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="w-screen h-[200vh] pointer-events-none"
    >
      <div className="fixed w-screen h-screen bg-gradient-to-b from-[#1e3a8a] via-[#9badc5] to-[#85bcff]" />
      <div className="fixed w-screen max-w-[1500px] h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.img
          src={bottom}
          className="absolute w-[50vw] med:w-[40vw] max-w-[450px] max-h-[40vh] object-contain top-0 right-8 md:right-10 lg:right-20"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          alt="Bottom"
        />
        <motion.img
          src={top}
          className="absolute w-[50vw] med:w-[40vw] max-w-[450px] max-h-[40vh] object-contain bottom-0 left-8 md:left-10 lg:left-20"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          alt="Top"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:top-30 md:left-10 font-courierprime font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex md:block gap-8 med:gap-16 items-center">
            <h1 className="text-[40px] med:text-[50px] md:mb-10">ClipIRL</h1>
            <h2 className="text-[20px] med:text-[25px] lg:text-[35px] md:px-6">
              is always listening
            </h2>
          </div>
        </motion.div>
        <motion.div
          className="hidden md:block absolute bottom-30 right-10 font-semibold text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h1 className="text-[50px] mb-10">Save Moments</h1>
          <h2 className="text-[25px] lg:text-[35px] px-6">
            anytime, effortlessly
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Animation;
