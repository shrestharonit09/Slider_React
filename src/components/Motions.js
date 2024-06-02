import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pictures = [
  {
    id: 1,
    image:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
  },
  {
    id: 2,
    image:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png",
  },
  {
    id: 3,
    image: "https://imgd-ct.aeplcdn.com/1056x660/n/rskpp0b_1638613.jpg?q=80",
  },
  {
    id: 4,
    image:
      "https://imgd.aeplcdn.com/1200x900/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg?isig=0&q=80",
  },
];

const Motions = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={pictures[index]?.image}
            alt="Car"
            className="h-60 w-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Motions;
