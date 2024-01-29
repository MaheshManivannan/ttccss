import React from "react";
import "./Pro1.css";
const Pro1 = () => {
    return (
        <>
        <main className="pro1main">
        <h2 className="pro1h2">Cloud-Based Loan Management System</h2>
        <img className="pro1img" src="/cloudbank.jpeg" alt="Loan Management System" />
        <p className="pro1p">A Cloud-Based Loan Management System is a software application<br /> designed to streamline and automate the entire lifecycle of loan<br /> processing within a financial institution. This system leverages <br />cloud computing services for scalability, flexibility, and accessibility.</p>
        <ul className="pro1ul">
            <li className="pro1li"><a className="pro1a" href="#">Function 1</a> <button className="pro1btn">Run</button></li>
            <li className="pro1li"><a className="pro1a" href="#">Function 2</a> <button className="pro1btn">Run</button></li>
            <li className="pro1li"><a className="pro1a" href="#">Function 3</a> <button className="pro1btn">Run</button></li>
            <li className="pro1li"><a className="pro1a" href="#">Function 4</a> <button className="pro1btn">Run</button></li>
        </ul>

        </main>
        </>
    );
}
export default Pro1;