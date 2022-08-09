import React from "react";
import { useNavigate } from "react-router-dom";
import BasicCard from "../../components/cardsHome";
import "./style.css";

function Home() {

    const history = useNavigate();

    return (
        <>
            <div className="global">
                <div className="container">
                    <div className="cardsArea">
                        <BasicCard /> <BasicCard /></div>
                </div>
                <div className="rightButtons">
                    <div className="fixedButton1" onClick={() => history("/test")}>
                        <text>teste1</text>
                    </div>
                    <div className="fixedButton2" onClick={() => history("/test")}>
                        <text>teste2</text>
                    </div>
                    <div className="fixedButton3" onClick={() => history("/test")}>
                        <text>teste3</text>
                    </div>
                </div>
                <footer></footer>
            </div>

            {/* <div className="footer"></div> */}
        </>
    );
}
export default Home;

