import { useEffect, useRef } from "react";
import { Swiper } from "swiper/react";
import { Scrollbar, Pagination, Keyboard, Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperComponent = ({ children }) => {
  const swiperRef = useRef(null);

 
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!swiperRef.current) return;

     
      const tag = document.activeElement?.tagName?.toLowerCase();
      const isTyping =
        tag === "input" || tag === "textarea" || document.activeElement?.isContentEditable;

      if (isTyping) return;

      if (e.ctrlKey && e.key === "Tab") {
        e.preventDefault();
        if (e.shiftKey) swiperRef.current.slidePrev();
        else swiperRef.current.slideNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Swiper
      modules={[Pagination, Scrollbar, Navigation, Keyboard, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      keyboard={{ enabled: true, onlyInViewport: true }}
      a11y={{ enabled: true }}
      pagination={{ clickable: true, dynamicBullets: true }}
      scrollbar={{ draggable: true }}
      
      className="w-full h-screen"
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {children}
    </Swiper>
  );
};

export default SwiperComponent;
