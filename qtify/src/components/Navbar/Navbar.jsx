import React from "react";
import Logo from "../Logo/Logo.jsx";
import Button from "../Button/Button.jsx";
import Search from "../Search/Search.jsx";
import styles from "./Navbar.module.css";

export default function Navbar ({searchData}){
    return (
        <nav className={styles.navbar}>
            <a href="/">
                <Logo />
            </a>
            <Search placeholder={"Search a album of your choice"}
                searchData={searchData}
            />
            <Button>Give Feedback</Button> 
        </nav>
        );
}