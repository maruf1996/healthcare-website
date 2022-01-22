import React from 'react';
import { Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const {setUser,setEmail,setPassword,setName,createNewAccount,signInUsingGoogle,signInUsingGithub}=useAuth();
    
    const history=useHistory();
    const location=useLocation();
    const url=location.state?.from || "/home";

    const signInWithGoogle=()=>{
        signInUsingGoogle()
        .then(result=>{
            setUser(result.user);
            history.push(url);
        })
    }

    const signInWithGithub=()=>{
        signInUsingGithub()
        .then(result=>{
            setUser(result.user);
            history.push(url);
        })
    }

    const handleGetName=e=>{
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleGetEmail=e=>{
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handleGetPassword=e=>{
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    const handleRegistration=e=>{
        e.preventDefault();
        createNewAccount()
        .then((userCredential) => {
            const user = userCredential.user;
          })
    }

    return (
        <div>
           <h2 className='mt-3 mb-3'>Please Register</h2>

            <Form className='w-25 m-auto mb-3' onSubmit={handleRegistration}>
            <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Control onBlur={handleGetName} type="text" placeholder="Enter Your Name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control onBlur={handleGetEmail} type="email" placeholder="Enter Your email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control onBlur={handleGetPassword} type="password" placeholder="Enter Your Password" required/>
            </Form.Group>
            <input type="submit" className='btn btn-primary' value="Register" />
            </Form>

            <button className='btn btn-warning mb-2' onClick={signInWithGoogle}>Sign In Google</button>
            <br />
            <button className='btn btn-warning mb-2' onClick={signInWithGithub}>Sign In Github</button>
            <br />
            <Link to="/login" style={{textDecoration:"none", fontSize:"20px"}}>Already have an account?</Link>
        </div>
    );
};

export default Register;