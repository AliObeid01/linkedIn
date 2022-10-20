//REACT
import { useState } from 'react';


//COMPONENTS
import Header from "../../Components/Header/Header";
import Loader from "../../Components/Loader/Loader";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import './Login.scss';

//IMAGES
import loginImage from '../../assets/Public/loginImage.PNG';

const Login = () => {

    const [loading] = useState(false);
    const [error] = useState(false);
    const [signUpPanel, setSignUpPanel] = useState(true);
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            signIn();
        }
    };

    const signIn = () => {

    };

    return (
        <>
            <Header btnFunction={setSignUpPanel} />
            <div className='loginCon'>
                <>
                    <div className='loginLeft'>
                        <div className='signInCon'>
                            <div className='signInForm'>
                                <div className='signInHeader'>
                                    {!signUpPanel ?
                                        <p>
                                            Welcome to your  <br /> 
                                            professional community
                                        </p>
                                    :
                                        <p>
                                            Make the most of your professional life
                                        </p>
                                    }
                                </div>
                                <div className='signInBody'>
                                    <span>
                                        <input 
                                            id='email'
                                            className='bodyInput'
                                            type='text'
                                            placeholder='Email'
                                            onKeyPress={(e) => handleKeyPress(e)} />
                                    </span>
                                    <span>
                                        <input 
                                            id='pwd'
                                            className='bodyInput'
                                            type='password'
                                            placeholder='Password (8+ characters)'
                                            onKeyPress={(e) => handleKeyPress(e)} />
                                    </span>
                                </div>
                                <div className='signInFooterCon'>
                                    {!signUpPanel &&
                                        <div className='forgotPwdCon'>
                                            <button className='forgotPwd'>Forgot password?</button>
                                        </div>
                                    }
                                    <div className='signInFooter'>
                                        <button className='signInBtn' onClick={() => signIn()}>
                                            {signUpPanel ? 'Agree & Join' : 'Sign in'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {!signUpPanel &&
                        <div className='loginRight'>
                            <img src={loginImage} alt="" />
                        </div>
                    }
                </>
            </div>
            {error && <ErrorMessage errorMsg='Wrong email or password!' />}
            
            {loading && <Loader loaderName='loaderSignIn' />}
        </>
    );
};

export default Login;