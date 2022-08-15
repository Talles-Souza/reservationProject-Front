import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import BasicCard from "../../components/cardsHome";
import { ModalSingIn } from "../../components/modalLogin";
import "./style.css";

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

function Home() {

    const history = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [isPageSelected, setPageSelected] = useState(false)

    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const actions = [
        { icon: <FileCopyIcon />, name: 'login' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];


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

            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial 
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'fixed', bottom: '350px', right: '20px' }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => setOpen(true)}
                        />
                        
                        
                    ))} 
                </SpeedDial>
            </Box>
            <ModalSingIn
                show={open}
                onHide={() => setOpen(false)}
            />

            {/* <div className="footer"></div> */}
        </>
    );
}
export default Home;

