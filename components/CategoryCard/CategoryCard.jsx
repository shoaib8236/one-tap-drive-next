import React from "react";
import cl from "./CategoryCard.module.scss";
import Image from "next/image";

const CategoryCard = (props) => {
  const { data } = props;

  return (
    <div className={cl.wrapper}>
      <div className={cl.image}>
        <Image fill src={data?.image} alt="image" objectFit="contain" />
      </div>
      <p>{data?.name}</p>
      <p>231</p>
    </div>
  );
};

export default CategoryCard;
