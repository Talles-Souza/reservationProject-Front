import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Logo from "../../../assets/img/logo.jpg"
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./style.css";

export const ModalSingIn = (props) => {

    const [steps, setSteps] = useState(0)
    const [isClosed, setClosed] = useState(false)

    // function handleClickCloseModal () {
    //     if (isClosed === true) {
    //         steps(e => 0)
    //     }
    //     setClosed(true)
    //     }

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
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={e => setSteps( 0)}></Modal.Header>
            <Modal.Title style={{ display: "flex", alignItems: "center", justifyContent: "center",  position: "relative", top:"7px" }} id="contained-modal-title-vcenter">
                <img src={Logo}  />
            </Modal.Title>

            {steps === 0 ? <Modal.Body style={{display: "flex", justifyContent: "center", flexDirection:"column"}}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: "center", width: "100%" }}>
                    {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                    <TextField id="input-with-sx" label="Email" variant="standard" sx={{ width: '80%' }} />
                </Box> 

                <FormControl sx={{ display: 'flex', width: '82%', justifyContent: "center", position: "relative", left: '26px' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <div className='buttonSingIn'>
                        <text>Sing In</text>
                </div>
                <div className='forgetPassword'>
                        <button onClick={e => setSteps( 1)}>Esqueceu sua senha?</button>
                </div> 

            </Modal.Body>  : <div></div>}


            {steps === 1 ? <Modal.Body style={{display: "flex", justifyContent: "center", flexDirection:"column"}}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: "center", width: "100%" }}>
                    {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                    <TextField id="input-with-sx" label="Email" variant="standard" sx={{ width: '80%' }} />
                </Box> 

                <div className='buttonSingIn'>
                        <text>Recuperar</text>
                </div>
                <div className='backButton'>
                <button onClick={e => setSteps( 0)}>Voltar</button>
                </div>

            </Modal.Body>  : <div></div>}
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}

