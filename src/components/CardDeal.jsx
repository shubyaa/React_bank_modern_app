import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import { Button } from ".";

const CardDeal = () => {
  return (
    <section id="features" className={`${layout.section} sm:m-10`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Find better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.\u00C3\u00A7 Aliquet ultrices ac, ametau.
        </p>
        <Button text="Get Started" styles="mt-10" />

      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        <img
          src={card}
          alt="billing"
          className=" w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </section>
  );
};

export default CardDeal;
