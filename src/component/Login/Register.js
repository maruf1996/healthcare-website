import React from 'react';
import { Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const {setUser,signInUsingGoogle,signInUsingGithub}=useAuth();

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

    // const handleEmaileChange=e=>{
    //     setEmail(e.target.value);
    // }

    // const handlePasswordChange=e=>{
    //     setPassword(e.target.value);
    // }
    return (
        <div>
           <h2 className='mt-3 mb-3'>Please Register</h2>

            <Form className='w-25 m-auto mb-3' >
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Enter Your email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Password" required/>
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