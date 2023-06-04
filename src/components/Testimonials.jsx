import React from "react";
import styles, { layout } from "../style";
import { coinbase, people01, people02, quotes } from "../assets";
import { feedback } from "../constants";

const TestimonialCard = (props) => (
  <div
    className={` flex flex-col items-start p-[40px]
     feature-card rounded-[20px] md:w-[340px] w-[370px] h-[395px] justify-between`}
    key={props.id}
  >
    <img src={quotes} alt="Quotes" className=" w-[40px] h-[40px]" />

    <p
      className="text-white sm:text-[18px] text-[16px] 
    max-w-[290px] max-h-[150px] font-poppins "
    >
      {props.content}
    </p>
    <div className=" flex flex-row ">
      <img
        src={props.image}
        alt="People 1"
        className=" rounded-full w-[48px] h-[48px] mr-4"
      />
      <div className=" flex flex-col">
        <h4 className=" text-white font-poppins sm:text-[20px] text-[16px]  ">
          {" "}
          {props.name}
        </h4>
        <p className=" sm:text-[16px] text-[14px] text-dimWhite font-poppins">
          {props.designation}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className=" flex flex-1 flex-col bg-primary">
      <section id="clients" className={`${layout.section} sm:m-10`}>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2}`}>
            Find better card deal <br className="sm:block hidden" /> in few easy
            steps.
          </h2>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.\u00C3\u00A7 Aliquet ultrices ac, ametau.
        </p>
      </section>
      <div className=" flex md:flex-row flex-col justify-center">
        {feedback.map((item, index) => (
          <div>
            <TestimonialCard
              id={item.id}
              name={item.name}
              designation={item.title}
              image={item.img}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
