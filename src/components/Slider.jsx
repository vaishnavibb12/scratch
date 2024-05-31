import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/Slider.css";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";

const images = [
  "https://www.desktopbackground.org/download/1920x1200/2013/12/15/685516_wallpapers-car-nature-spring-park-2560x1600_2560x1600_h.jpg",
  "https://wallpapers.com/images/hd/country-desktop-wallpaper-t5vhdxhmhq51h15e.jpg",
  "https://c4.wallpaperflare.com/wallpaper/951/57/287/images-of-natures-beauty-1920x1200-wallpaper-preview.jpg",
];

const TEXTS = ["Welcome to Natures!", "Happiness", "and Satisfaction."];

function Slider() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((index) => index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="box container">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide" key={index}>
            <img alt="sample_file" src={URL} key={index} />
            <h1>
              <TextTransition springConfig={presets.wobbly}>
                {TEXTS[textIndex % TEXTS.length]}{" "}
              </TextTransition>
            </h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Slider;
