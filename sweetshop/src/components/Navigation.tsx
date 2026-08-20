/* import React from "react";*/
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { mainLogo } from "../assets";

export default function Menu() {
  const isTabletUp = useMediaQuery("(min-width: 768px)");

  function mobileMenu() {
    return <div>mobile menu</div>;
  }

  function desktopMenu() {
    return (
      <div>
        <div className="flex bg-[#F7EBE5] px-[135px] py-[15px]">
          <nav className="flex max-w-[1170px] my-0 mx-auto">
            <ul className="grid grid-cols-4 gap-3.5">
              <li>
                <Link to="/" className="text-[14px]">
                  Гарантия свежести
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px]">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px]">
                  Оптовые поставки
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px]">
                  Контакты
                </Link>
              </li>
            </ul>
            <ul className="flex">
              <li>
                <Link to="/" className="text-[14px]">
                  Санкт-Петербург
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px]">
                  8 812 309-82-88
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px]">
                  В корзине (4 товара)
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="flex">
          <ul className="flex">
            <li>
              <Link to="/">Сладкие дни</Link>
            </li>
            <li>
              <Link to="/sets">Подарочные наборы</Link>
            </li>
            <li>
              <Link to="/">Собрать набор</Link>
            </li>
          </ul>
          <img src={mainLogo} />
          <ul className="flex">
            <li>
              <Link to="/">Создать дизайн</Link>
            </li>
            <li>
              <Link to="/">Компаниям</Link>
            </li>
            <li>
              <Link to="/">Весь каталог</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div>
      <nav className="max-w-360 my-0 mx-auto">
        {isTabletUp ? desktopMenu() : mobileMenu()}
      </nav>
    </div>
  );
}
