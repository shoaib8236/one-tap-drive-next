import React from "react";
import cl from "./VehicleCard.module.scss";
import Image from "next/image";
import { GiCarDoor } from "react-icons/gi";
import { IoBagSharp } from "react-icons/io5";
import { BsLuggage } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";

const VehicleCard = () => {
  return (
    <div className={cl.card}>
      <div className={cl.rental_logo_wrap}>
        <div className={cl.rental_logo}>
          <Image src={"/dollar-rent-a-car-lg.webp"} alt="rental_logo" fill />
        </div>
      </div>
      <div className={cl.card_image}>
        <Image src={"/dummy-car.webp"} fill objectFit="cover" alt={"image"} />
      </div>
      <div className={cl.car_content}>
        <h2>mitsubishi lancer</h2>

        <div className={cl.pricing}>
          <div className={cl.pricing_item}>
            <p>
              <del>AED 180</del>
            </p>
            <p>
              AED 130 / <sub>day</sub>
            </p>
            <p>250km</p>
          </div>
          <div className={cl.pricing_item}>
            <p>
              <del>AED 180</del>
            </p>
            <p>
              AED 130 / <sub>day</sub>
            </p>
            <p>250km</p>
          </div>
        </div>

        <ul>
          <li>
            <GiCheckMark />1 day rental available
          </li>
          <li>
            <GiCheckMark />
            Deposit: AED 1000
          </li>
          <li>
            <GiCheckMark />
            Insurance included{" "}
          </li>
        </ul>

        <div className={cl.vehicle_stats}>
          <div className={cl.type}>
            <span>SUV</span>
          </div>
          <div>
            <IoBagSharp /> <span>1</span>
          </div>
          <div>
            <BsLuggage /> <span>1</span>
          </div>
          <div>
            <GiCarDoor /> <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
