import React from "react";
import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse} sm:m-10`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className=" w-[100%] h-[100%] relative z-[5]"
        />
      </div>
      <div className="absolute z-[2] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          {" "}
          Easily control <br className="sm:block hidden" /> your billing and
          invoicing.{" "}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="Apple Icon" className=" cursor-pointer w-[128px] object-contain mr-5" />
        <img src={google} alt="Google Play" className=" cursor-pointer w-[128px] object-contain" />

        </div>
      </div>
    </section>
  );
};

export default Billing;
