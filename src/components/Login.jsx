import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
from 'mdb-react-ui-kit';
import '../estilos/LoginStyle.css';
import '../recursos/loginimg.jpg';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <MDBContainer className="my-5">

        <MDBCard className='justify-content-left align-self-center'>
            <MDBRow className='g-0'>

            <MDBCol md='6' style={{display: "flex"}}>
                <img src={require('../recursos/loginimg.jpg')} alt="LoginImage" style={{height: "fill-content"}}/>
            </MDBCol>

            <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>

                <div className='d-flex flex-row mt-2'>
                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                    <span className="h1 fw-bold mb-0">WhatsCooking</span>
                </div>

                <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Inicia sesion con tu cuenta</h5>

                    <MDBInput wrapperClass='mb-4' label='Nombre de usuario' id='formControlLg' type='user' size="lg"/>
                    <MDBInput wrapperClass='mb-4' label='Contraseña' id='formControlLg' type='password' size="lg"/>
                <Link to={"/home"}>
                    <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                </Link>
                
                <a className="small text-muted" href="#!">¿Olvidaste tu contraseña?</a>
                <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>¿No tienes una cuenta? <a href="#!" style={{color: '#393f81'}}>¡Registrate aqui!</a></p>

                

                </MDBCardBody>
            </MDBCol>

            </MDBRow>
        </MDBCard>

        </MDBContainer>
    );
    }

export default Login;