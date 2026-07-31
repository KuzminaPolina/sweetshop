import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { almonds, macaroon, truck, box } from "../assets";

export default function TopBanner() {
  return (
    <div className="header-container bg-[#D4E9F9]">
      <Swiper
        className="w-full max-w-7xl"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="flex justify-center items-center">
          <div className="slide-content flex justify-center items-center gap-2 p-2.5">
            <img src={truck} alt="" />
            <span>ДОСТАВКА В ДЕНЬ ЗАКАЗА</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content flex justify-center items-center gap-2 p-2.5">
            <img src={box} alt="" />
            <span>ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content flex justify-center items-center gap-2 p-2.5">
            <img src={macaroon} alt="" />
            <span>ВСЕГДА СВЕЖЕЕ</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content flex justify-center items-center gap-2 p-2.5">
            <img src={almonds} alt="" />
            <span>МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
