import { offersBlock } from "../data/siteInfo";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { arrow } from "../assets";

export default function Offers() {
  const isTabletUp = useMediaQuery("(min-width: 768px)");

  type Card = {
    id: string;
    icon: string;
    title: string;
    description: string;
    gradient: string;
    linkTo: string;
  };

  const cards = offersBlock.map((card: Card) => {
    return (
      <li
        id={card.id}
        className={`${card.gradient} px-[53px] py-[35px] flex flex-col items-center`}
      >
        <div className="p-5 bg-white rounded-full mb-5 size-[100px]">
          <img src={card.icon} alt="icon" className="m-auto" />
        </div>

        <Link to={card.linkTo}>
          <p className="mb-2.5 font-bold text-center flex">
            {card.title}
            <img src={arrow} width="20" />
          </p>
        </Link>
        <p className="text-center">{card.description}</p>
      </li>
    );
  });

  const links = offersBlock.map((card: Card) => {
    return (
      <li className="border-b pb-[17px] border-[#2929295b]">
        <Link
          to={card.linkTo}
          className="flex justify-between font-semibold text-[14px]"
        >
          {card.title}
          <img src={arrow} width="20" />
        </Link>
      </li>
    );
  });
  return (
    <section>
      <ul className="grid max-w-360 my-0 mx-auto px-3.5 md:py-10 md:px-10  md:grid-cols-2 gap-x-[30px] gap-y-6">
        {isTabletUp ? cards : links}
      </ul>
    </section>
  );
}
