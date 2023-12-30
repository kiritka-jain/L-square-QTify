import React from "react";
import styles from "./Hero.module.css";
import HeadPhoneImage from "../../assets/vibrating-headphone.png"


function Hero() {
    return(
        <div className={styles.hero}>
            <div>
                <h1>100 Thousands Songs, ad-free</h1>
                <h1>Over Thousand podcast episodes</h1>
            </div>
            <div>
                <img src={HeadPhoneImage} alt="headphones" width={112} />
            </div>
        </div>
    );
}
export default Hero;