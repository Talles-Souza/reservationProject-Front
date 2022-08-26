import React, { useState } from 'react';
import Logo from "../../assets/img/logo.jpg"
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import "./style.css";

export const ModalSingUp = (props) => {

    // const [steps, setSteps] = useState(0)
    const [abrir, setAbrir] = React.useState(false);
    const handleOpen = () => setAbrir(true);
    const handleClose = () => setAbrir(false);

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };




    return (
        <>
            {/* <ButtonToolbar>
                <Button onClick={handleOpen}> Open</Button>
            </ButtonToolbar> */}

            <Modal  {...props} open={abrir} onClose={handleClose} >
                <Modal.Header>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Placeholder.Paragraph />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

