import React from "react";
import styles, { layout } from "../style";
import { Button } from ".";
import { features } from "../constants";

const FeatureCard = (props) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      props.index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full
     bg-dimBlue ${styles.flexCenter}`}
    >
      <img
        src={props.icon}
        alt=""
        className={`w-[50%] h-[50%] object-contain`}
      />
    </div>
    <div className="flex flex-1  flex-col ml-3">
      <h4 className="font-poppins font-semibold 
      text-white text-[18px] leading-[23px] mb-1">
        {props.title}
      </h4>
      <p className="font-poppins  
      text-dimWhite text-[16px] leading-[24px] mb-1">
        {props.content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={`${layout.section} sm:m-10`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        Yo do the business, <br className="sm:block hidden" /> we'll handle the
        money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button text="Get Started" styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((item, index) => (
        <FeatureCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          content={item.content}
          index={index}
        />
      ))}
    </div>
  </section>
);

export default Business;
