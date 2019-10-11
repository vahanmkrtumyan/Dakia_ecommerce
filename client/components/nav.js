import React from "react";
import Link from "next/link";
import DrawerButton from "./drawerButton";
import "../assets/styles/nav.scss";

const Nav = ({ onOpen }) => (
  <nav>
    <div className="nv">
      <ul className="navbar">
        <li className="link">
          <Link href="/">
            <a>Գլխավոր</a>
          </Link>
        </li>
        <li className="link">
          <Link href="/about">
            <a>Մեր մասին</a>
          </Link>
        </li>
        <li className="link">
          <Link href="/contact">
            <a>ՀԵտադարձ կապ</a>
          </Link>
        </li>
      </ul>
      <ul className="cart">
        <li className="link">
          <Link href="/cart">
            <a>Գրանցվել</a>
          </Link>
        </li>
        <li className="link">
          <Link href="/cart">
            <a>Մուտք</a>
          </Link>
        </li>
        <li className="link">
          <Link href="/cart">
            <a>Cart</a>
          </Link>
        </li>
      </ul>
      <DrawerButton onOpen={() => onOpen()} />
    </div>
    <style jsx>{`
      :global(html) {
        height: 100%;
      }
      :global(body) {
        margin: 0;
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
    `}</style>
  </nav>
);

export default Nav;
