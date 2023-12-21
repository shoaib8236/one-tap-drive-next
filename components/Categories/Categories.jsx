"use client";

import React, { useState } from "react";
import cl from "./Categories.module.scss";
import CategoryCard from "../CategoryCard/CategoryCard";
import Button from "../Button/Button";

const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  const carNames = [
    "bmw",
    "mercedes",
    "audi",
    "toyota",
    "honda",
    "ford",
    "chevrolet",
    "nissan",
    "volkswagen",
    "tesla",
    "subaru",
    "mazda",
  ];

  // Create fakeData for all categories
  const fakeData = carNames.map((name, index) => ({
    _id: index + 1,
    image: "/suv2.webp",
    name,
  }));

  // Display either the first 8 or all categories based on showAll state
  const displayedData = showAll ? fakeData : fakeData.slice(0, 8);

  const handleViewAllClick = () => {
    setShowAll(true); // Show all categories
  };

  return (
    <div className={cl.wrapper}>
      <div className={cl.grid_wrap}>
        {displayedData.map((item) => (
          <div key={item._id} className={cl.grid_item}>
            <CategoryCard data={item} />
          </div>
        ))}
      </div>
      <div className={cl.expand_btn}>
        {!showAll && <Button onClick={handleViewAllClick}>View All</Button>}
      </div>
    </div>
  );
};

export default Categories;
