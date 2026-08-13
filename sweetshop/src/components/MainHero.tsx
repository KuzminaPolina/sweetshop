import { heroBox2, blobBg } from "../assets";
/* import { useMediaQuery } from "../hooks/useMediaQuery"; */

export default function Hero() {
  /*  const isTabletUp = useMediaQuery("(min-width: 768px)"); */

  return (
    <section className="bg-white w-full header-bg">
      <div className="flex flex-col md:flex-row max-w-360 my-0 mx-auto md:py-10 md:px-10">
        <div className="w-full md:w-1/2 order-2 md:order-1 flex items-center justify-center">
          <img src={blobBg} className="absolute" />
          <img
            src={heroBox2}
            alt="heart-shaped macaroon box"
            className="w-full h-full p-4 md:p-0 object-cover object-left md:h-auto max-w-[655px] z-10"
          />
        </div>
        <div className="flex flex-col md:w-1/2 h-full justify-center items-center order-1 md:order-2 self-center pt-16.25 md:py-16 md:py-0 w-full px-3.5 xl:pr-20">
          <p className="font-bold font-montserrat">MACARONSHOP</p>
          <p className="since font-montserrat text-[16px] font-semibold mb-6">
            since 2013
          </p>
          <h1 className="font-montserrat text-[24px] md:text-[32px] xl:text-[42px] mb-3.5 text-center">
            Настоящая любовь
          </h1>
          <p className="text-center font-proxima-nova text-[14px] md:text-[16px] xl:text-[18px] max-w-66.25 sm:max-w-none">
            Пирожные макарон и другие десерты <br />
            из натуральных ингредиентов, приготовленные с любовью
          </p>
        </div>
      </div>
    </section>
  );
}
