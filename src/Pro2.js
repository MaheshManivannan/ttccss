import React from "react";
import "./Pro2.css";
const Pro2 = () => {
    return (
        <>
        <main className="pro2main">
        <h2 className="pro2h2">Transaction Processing System</h2>
        <img className="pro2img" src="/tpsimage.jpeg" alt="Transaction Processing System" />
        <p className="pro2p">A Transaction Processing System (TPS) is a type of information system<br />that manages and supports the processing of various types of<br />transactions within an organization or business. In the context of a bank,<br />handling financial transactions efficiently, securely, and in real-time.</p>
        <ul className="pro2ul">
            <li className="pro2li"><a className="pro2a" href="#">Function 1</a> <button className="pro2btn">Run</button></li>
            <li className="pro2li"><a className="pro2a" href="#">Function 2</a> <button className="pro2btn">Run</button></li>
            <li className="pro2li"><a className="pro2a" href="#">Function 3</a> <button className="pro2btn">Run</button></li>
            <li className="pro2li"><a className="pro2a" href="#">Function 4</a> <button className="pro2btn">Run</button></li>
        </ul>

        </main>
        </>
    );
}
export default Pro2;