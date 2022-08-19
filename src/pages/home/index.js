import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicCard from "../../components/cardsHome";
import { ModalSingIn } from "../../components/modalLogin";
import "./style.css";
import SpeedDial from '@mui/material/SpeedDial';
import { Collapse, CardBody, Card } from 'reactstrap';
import AddOutline from '@rsuite/icons/AddOutline';
import { IoIosAdd, IoMdHelpCircleOutline } from 'react-icons/io';
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai';
import { Animation, Button } from 'rsuite';


function Home(args) {

    const history = useNavigate();
    const [open, setOpen] = React.useState(false);
    // const [isPageSelected, setPageSelected] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [show, setShow] = React.useState(true);
    const onChange = () => setShow(!show);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const Panel = React.forwardRef((props, ref) => (
        <div
            {...props}
            ref={ref}
            style={{ width: 100, height: 160, overflow: 'hidden', display: 'flex', gap: '13px', flexDirection: 'column', position: 'absolute', bottom: '80px', right: 16 }}
        >
            <div className="fixedButton1" onClick={() => setOpen(true)}>
                {/* <text  style={{color: 'white'}}>L</text> */}
                <div className="icon">
                    <AiOutlineUser />
                </div>
                <text>login</text>
            </div>
            <div className="fixedButton1" >
                <div className="icon">
                    <AiOutlineUserAdd />
                </div>
                <text>inscrever</text>
            </div>
            <div className="fixedButton1" >
                <div className="icon">
                    <IoMdHelpCircleOutline />
                </div>
                <text>ajuda</text>
            </div>
        </div>
    ));


    return (
        <>

            <div className="global">
                <div className="container">
                    <div className="cardsArea">
                        <BasicCard /> <BasicCard /></div>
                </div>
                {/* <div className="rightButtons">
                    <div className="fixedButton1" tabIndex="1" onClick={() => setOpen(true)}>
                        <text>login</text>
                    </div>
                    <div className="fixedButton2" tabIndex="1" onClick={() => history("/test")}>
                        <text>inscreva-se</text>
                    </div>
                    <div className="fixedButton3" tabIndex="1" onClick={() => history("/test")}>
                        <text>ajuda</text>
                    </div>
                </div> */}
                <div >
                    <Button onClick={onChange} style={{ backgroundColor: "black", position: 'absolute', bottom: 16, right: '60px', height: '55px', borderRadius: '30px' }}><IoIosAdd style={{ fontSize: '30px', color: 'white' }} /></Button>
                    <Animation.Bounce in={show}>
                        {(props, ref) => <Panel {...props} ref={ref} />}
                    </Animation.Bounce>
                </div>
                <footer></footer>
            </div>
            {/* <React.StrictMode>
                <Button color="primary" onClick={toggle} className="test">
                    Toggle
                </Button> 

                <SpeedDial

                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<IoIosAdd style={{ backgroundColor: "black", fontSize: '56px', borderRadius: '30px' }} />}
                    onClick={toggle}
                    
                >

                    <Collapse isOpen={isOpen} {...args} className="rightButtons">

                        <div className="fixedButton1" tabIndex="1" onClick={() => setOpen(true)}>
                            <text>login</text>
                        </div>
                        <div className="fixedButton2" tabIndex="1" onClick={() => history("/test")}>
                            <text>inscreva-se</text>
                        </div>
                        <div className="fixedButton3" tabIndex="1" onClick={() => history("/test")}>
                            <text>ajuda</text>
                        </div>

                    </Collapse>

                </SpeedDial>
            </React.StrictMode> */}


            <ModalSingIn
                show={open}
                onHide={() => setOpen(false)}
            />

            <div className="footer"></div>
        </>
    );
}
export default Home;

