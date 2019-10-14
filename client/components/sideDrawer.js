import React from 'react';
import Link from 'next/link';
import '../assets/styles/sideDrawer.scss';

const SideDrawer = props => {
  let classname = props.show ? 'side-drawer' : 'side-drawer open';

  return (
    <div className={classname}>
      <ul>
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
    </div>
  );
};

export default SideDrawer;
