import React from "react";
import { useNavigate } from "react-router-dom";
import BasicCard from "../../components/cardsHome";
import { ModalSingIn } from "../../components/modalLogin";

import "./style.css";

function Home() {

    const history = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <div className="global">
                <div className="container">
                    <div className="cardsArea">
                        <BasicCard /> <BasicCard /></div>
                </div>
                <div className="rightButtons">
                    <div className="fixedButton1" tabIndex="1" onClick={() => setOpen(true)}>
                        <text>login</text>
                    </div>
                    <div className="fixedButton2" tabIndex="1" onClick={() => history("/test")}>
                        <text>inscreva-se</text>
                    </div>
                    <div className="fixedButton3" tabIndex="1" onClick={() => history("/test")}>
                        <text>ajuda</text>
                    </div>
                </div>
                <footer></footer>
            </div>
            <ModalSingIn
                show={open}
                onHide={() => setOpen(false)}
            />

            {/* <div className="footer"></div> */}
        </>
    );
}
export default Home;

