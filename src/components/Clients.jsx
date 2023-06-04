import React from "react";
import { clients } from "../constants";
import styles from "../style";

const ImagesCard = (props) => (
  <img src={props.logo} alt={props.id} key={props.id} className=" sm:w-[192px] 
  w-[100px] m-8 object-contain" />
);

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap justify-evenly w-full`}>
      {clients.map((item, index) => (
        <ImagesCard id={item.id} logo={item.logo} />
      ))}
    </div>
  </section>
);

export default Clients;
