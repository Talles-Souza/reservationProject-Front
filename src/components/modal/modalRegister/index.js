import React, { useState } from 'react';
import Logo from "../../../assets/img/logo.jpg"
import Box from '@mui/material/Box';
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Modal from 'react-bootstrap/Modal';
import "./style.css";

export const ModalSingUp = (props) => {

    // const [steps, setSteps] = useState(0)
    // const handleOpen = () => setAbrir(true);
    // const handleClose = () => setAbrir(false);

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChangeIcon = (prop) => (event) => {
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

    const formik = useFormik({
        initialValues: {
            name: "",
            cpf: "",
            email: "",
            password: "",
            confirm_password: "",
        },

        validationSchema: Yup.object({

            name: Yup.string()
                .min(4, "Precisa ter entre 4 e 50 caracteres.")
                .max(50, "Precisa ter entre 4 e 50 caracteres.")
                .required("*Campo obrigatório")
                .matches(
                    /^[\p{Script=Latin}]/u,
                    "Precisa conter caracteres do alfabeto latino."
                )
                .matches(/^[\p{Script=Latin} ]+$/u, "Nome deve ser completo.")
                .matches(/[ ][\p{Script=Latin}]+/gu, "Nome deve ser completo."),

            cpf: Yup.string()
                .min(14)
                .max(14)
                .required(),

            email: Yup.string()
                .email()
                .required(),


            password: Yup.string()
                .min(8)
                .max(16)
                .required(),

            // confirm_password: Yup.string()
            //     .validaSenhasIguais()
            //     .required("*Campo obrigatório"),
        })

    });

    return (
        <>
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
               <Modal.Header closeButton> </Modal.Header>
            <Modal.Title style={{ display: "flex", alignItems: "center", justifyContent: "center",  position: "relative", top:"7px" }} id="contained-modal-title-vcenter">
                <img src={Logo}  />
            </Modal.Title>
                <Modal.Body style={{ display: "flex", justifyContent: "center", alignItems: 'center', gap: '10px', flexDirection: "column" }}>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: "center", width: "100%" }}>
                        {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}

                        {formik.errors.email && formik.touched.email ? (
                            <TextField sx={{ width: '80%' }}
                                error
                                id="standard-error-helper-text"
                                label="Error"
                                type='email'
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText="Formato incorreto."
                                variant="standard"
                            />
                        ) : (
                            <TextField sx={{ width: '80%' }}
                                required
                                id="input-with-sx"
                                label="Email"
                                type="email"
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                variant="standard" />
                        )}


                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: "center", width: "100%" }}>
                        {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}

                        {formik.errors.cpf && formik.touched.cpf ? (
                            <TextField sx={{ width: '80%' }}
                                error
                                id="standard-error-helper-text"
                                label="Error"
                                type='text'
                                keyboardType="numeric"
                                name='cpf'
                                value={formik.values.cpf}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText="Formato incorreto."
                                variant="standard"
                            />
                        ) : (
                            <TextField sx={{ width: '80%' }}
                                required
                                id="input-with-sx"
                                label="CPF"
                                type='text'
                                name='cpf'
                                keyboardType="numeric"
                                value={formik.values.cpf}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                variant="standard" />
                        )}
                    </Box>

                    <FormControl sx={{ display: 'flex', width: '80%', justifyContent: "center" }} variant="standard">
                        <InputLabel required htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChangeIcon('password')}
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
                    <div className='buttonSingIn' type="submit">
                        <text>Sing Up</text>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button  onClick={() => setAbrir(false)}appearance="primary">
                        Ok
                    </Button>
                    <Button  onClick={() => setAbrir(false)} appearance="subtle">
                        Cancel
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

