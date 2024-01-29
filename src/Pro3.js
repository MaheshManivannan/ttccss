import React from "react";
import "./Pro3.css";
const Pro3 = () => {
    return (
        <>
        <main className="pro3main">
        <h2 className="pro3h2">Dynamic Pricing Models for Financial Products</h2>
        <img className="pro3img" src="/dpm.png" alt="Dynamic Pricing Models for Financial Products" />
        <p className="pro3p">Dynamic Pricing Models for Financial Products involve the use of<br />advanced analytics and algorithms to adjust the pricing<br />of financial products based on various factors in real-time. The goal is<br />to optimize pricing strategies, maximize revenue, and offer competitive.</p>
        <ul className="pro3ul">
            <li className="pro3li"><a className="pro3a" href="#">Function 1</a> <button className="pro3btn">Run</button></li>
            <li className="pro3li"><a className="pro3a" href="#">Function 2</a> <button className="pro3btn">Run</button></li>
            <li className="pro3li"><a className="pro3a" href="#">Function 3</a> <button className="pro3btn">Run</button></li>
            <li className="pro3li"><a className="pro3a" href="#">Function 4</a> <button className="pro3btn">Run</button></li>
        </ul>

        </main>
        </>
    );
}
export default Pro3;