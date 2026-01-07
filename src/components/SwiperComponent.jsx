import { Swiper } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";

const SwiperComponent = ({ children }) => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, "dynamicBullets": true }}
      scrollbar={{ draggable: true }}
      className="w-full h-screen"
    >
      {children}
    </Swiper>
  )
}
export default SwiperComponent;