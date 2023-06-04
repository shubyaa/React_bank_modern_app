import React from "react";
import styles, { layout } from "../style";
import { Button } from ".";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} sm:m-10
     ${styles.marginY} ${styles.padding} sm:flex-row flex-col 
     bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} sm:w-[440px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button text="Get Started" />
      </div>
    </section>
  );
};

export default CTA;
