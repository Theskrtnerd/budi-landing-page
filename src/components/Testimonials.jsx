import React, { useState, useRef } from "react";
import Carousel from "nuka-carousel";

const Slider = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef();

  const previousSlide = () => {
    carouselRef.current.slickPrev();
  };

  const nextSlide = () => {
    carouselRef.current.slickNext();
  };

  const jumpToSlide = (slideIndex) => {
    carouselRef.current.slickGoTo(slideIndex);
  };

  const handleAfterSlide = (slideIndex) => {
    setCarouselIndex(slideIndex);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ marginTop: "0px" }}>
      <div className="text-center text-black text-4xl font-bold">
          What <span className="text-pri-80">early birds</span> say about <span className="text-pri-100">us</span>
      </div>
      <div className="w-3/4 max-w-3xl bg-white rounded-lg p-4">
        <Carousel
          autoplay={true}
          autoplayInterval={2500}
          cellSpacing={10}
          slideIndex={carouselIndex}
          wrapAround={true}
          afterSlide={handleAfterSlide}
          ref={carouselRef}
          renderCenterLeftControls={({ previousSlide }) => {
            return (
              <button onClick={previousSlide} className="custom-control">
                <i className="fa fa-arrow-left" />
              </button>
            );
          }}
          renderCenterRightControls={({ nextSlide }) => {
            return (
              <button onClick={nextSlide} className="custom-control">
                <i className="fa fa-arrow-right" />
              </button>
            );
          }}
          defaultControlsConfig={{
            pagingDotsStyle: {
              width: "30px",
              height: "30px",

            },
          }}
        >
          {/* Slides */}
          <div className="text-black text-center text-4xl font-light leading-[118.1%] tracking-tighter max-w-[755px] self-center -ml-2.5 max-md:max-w-full py-20">
            "Free Shipping, Discounts AND <br />
            it's more convenient than <br />
            picking up my order at the Posty!<br/>
            Thank you!"
          </div>
          <div className="text-black text-center text-4xl font-light leading-[118.1%] tracking-tighter max-w-[755px] self-center -ml-2.5 max-md:max-w-full py-20">
            "If only this existed in my 1st year <br />
            of uni, I'd have saved so much and  <br />
            wouldn't have had to abandon my shopping"
          </div>
          <div className="text-black text-center text-4xl font-light leading-[118.1%] tracking-tighter max-w-[755px] self-center -ml-2.5 max-md:max-w-full py-20">
            "Knowing that Budi is getting rid <br />
            of shipping fees for good makes me sleep good at night.  <br />
            Let's get these savings!"
          </div>
        </Carousel>

        <div className="mt-4 flex justify-center">
          <img
            src="src/assets/tia.png" // Replace with your image source
            onClick={() => jumpToSlide(0)}
            className={`mx-20 cursor-pointer ${
              carouselIndex === 0 ? "" : "opacity-50"
            }`}
          />
          <img
            src="src/assets/shaw.png" // Replace with your image source
            onClick={() => jumpToSlide(1)}
            className={`mx-20 cursor-pointer ${
              carouselIndex === 1 ? "" : "opacity-50"
            }`}
          />
          <img
            src="src/assets/nick.png" // Replace with your image source
            onClick={() => jumpToSlide(2)}
            className={`mx-20 cursor-pointer ${
              carouselIndex === 2 ? "" : "opacity-50"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
