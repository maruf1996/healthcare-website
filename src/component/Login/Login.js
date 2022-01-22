import React from 'react';
import { Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {setUser,setEmail,email,setPassword,password,signInUsingEmail,signInUsingGoogle,signInUsingGithub,setIsLoading}=useAuth();

    const history=useHistory();
    const location=useLocation();
    const url=location.state?.from || "/home";

    const signInWithGoogle=()=>{
        signInUsingGoogle()
        .then(result=>{
            setIsLoading(true);
            console.log(result.user);
            setUser(result.user);
            history.push(url);
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    const signInWithGithub=()=>{
        signInUsingGithub()
        .then(result=>{
            setIsLoading(true);
            console.log(result.user);
            setUser(result.user);
            history.push(url);
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    const handleGetEmail=e=>{
        setEmail(e.target.value);
    }

    const handleGetPassword=e=>{
        setPassword(e.target.value);
    }

    const handleLoginWithEmail=(e)=>{
        e.preventDefault();
        signInUsingEmail(email,password)
        .then((result) => {
            setIsLoading(true);
            console.log(result.user);
            history.push(url);
          })
          .finally(()=>{
            setIsLoading(false)
        })
    }

    return (
        <div>
            <h2 className='mt-3 mb-3'>Please Login</h2>

            <Form className='w-25 m-auto mb-3' onSubmit={handleLoginWithEmail}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control onBlur={handleGetEmail} type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control onBlur={handleGetPassword} type="password" placeholder="Password" required/>
            </Form.Group>
            <button className='btn btn-primary'>Login</button>
            </Form>

            <button className='btn btn-warning mb-2' onClick={signInWithGoogle}>Sign In Google</button>
            <br />
            <button className='btn btn-warning mb-2' onClick={signInWithGithub}>Sign In Github</button>
            <br />
            <Link to="/register" style={{textDecoration:"none", fontSize:"20px"}}>New User?</Link>
        </div>
    );
};

export default Login;