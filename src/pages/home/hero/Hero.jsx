import React from "react";
import ImgCard from "./HeroCard/ImgCard";
import Slider from "react-slick";

import {IoIosArrowForward} from "react-icons/io"

import dancers from "../../../assets/image/dancers.jpeg";
import drum from "../../../assets/image/yoruba-talking-drum.webp";
import Eyo from "../../../assets/image/eyo.webp";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    const navigateToOriki = () => {
        navigate('./oriki');
    };


  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" ">
      <div className="relative">
        <Slider {...settings}>
          <ImgCard image={dancers} />
          <ImgCard image={drum} />
          <ImgCard image={Eyo} />
        </Slider>
      </div>
      <div className="absolute inset-0 flex justify-center items-start flex-col bg-[#92B4EC]/30">
        <div className=" pl-20 mb-5">
          <h1 className=" text-brown text-7xl mb-5 font-bold">
            Enjoy the best of Yoruba Eulogy
          </h1>
          <p className="w-3/5 text-white text-[18px] font-light">
            Many cultures have a rich tradition of oral storytelling. Eulogies,
            when delivered verbally, are a form of storytelling that can pass
            down cultural values, beliefs, and the history of a community from
            one generation to the next.
          </p>
        </div>
        <div className="pl-20">
          <button onClick={navigateToOriki} className="bg-gradient-to-r from-brown from-40% to-orange-900 text-[16px] px-6 py-3 flex justify-center items-center text-smokeWhite rounded-md tracking-wider hover:bg-brown/60">
            Explore Now
            <span className="ml-3 ">
              <IoIosArrowForward size={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
