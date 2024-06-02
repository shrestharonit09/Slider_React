import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const picture = [
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

const Slider = () => {
  const [data, setData] = useState(0);

  const handleClicked = () => {
    if (data < picture.length - 1) {
      setData(data + 1);
    }
  };

  const handleClickes = () => {
    if (data > 0) {
      setData(data - 1);
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <img className="h-60 w-60" src={picture[data]?.image} alt="Car" />
      </div>
      <div className="flex justify-center gap-5">
        <button
          onClick={handleClickes}
          className="text-3xl  border-2 border-gray-500 hover:bg-blue-600"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleClicked}
          className="text-3xl border-2 border-gray-500 hover:bg-blue-600"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
};

export default Slider;
