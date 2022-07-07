import PropTypes from "prop-types";
import CardsView from "./CardsView";
import ListView from "./ListView";
import IconSwitch from "./IconSwitch"
import React, { useState } from 'react';

export default function Store() {
  const products = [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
    },
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
    },
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
    },
  ];


  const icons = [ 'view_list', 'view_module'];

  const [StateIcon, setStateIcon] = useState(0);

  const onSwitch = () => {
    setStateIcon(prevStateIcon => 1 - prevStateIcon );
    };

  return (
    <div className="Store">
      <IconSwitch icon={icons[1 - StateIcon]} onSwitch={onSwitch} />
        
      {icons[1 - StateIcon] === 'view_module'? <CardsView products={products} /> : <ListView products={products} />}
      
    </div>
  );
}

Store.propTypes = {
  products: PropTypes.array,
};
