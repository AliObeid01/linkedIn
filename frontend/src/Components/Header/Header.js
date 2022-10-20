import { useHistory, useLocation } from "react-router-dom";
import './Header.scss';

import logo from '../../assets/Public/logo.png';

const Header = (props) => {
    
    const loggedIn = true;
    const userType = 2;

    let history = useHistory();
    let location = useLocation();

    

    const changePath = (page) => {

        console.log(page)
        history.push(`/${page}`);
    };

    return (
        <>
            <div className='headerCon'>
                <div className='header'>
                    <div className='left'>
                        <div className='logo'>
                            <img src={logo} alt='ARGUS' />
                        </div>
                    </div>
                    <div className='right'>
                        <div className='userCon'>
                            {loggedIn ? 
                                <>
                                    {userType === 1 ?
                                        <>
                                            <button id={location.pathname === '/Home' && 'activeMenuBtn'} className='menuBtn' onClick={() => changePath('Home')}>Home</button>
                                            <button id={location.pathname === '/Following' && 'activeMenuBtn'} className='menuBtn' onClick={() => changePath('Following')}>Following</button>
                                        </>
                                    :
                                        <>
                                            <button id={location.pathname === '/Admin' && 'activeMenuBtn'} className='menuBtn'>Admin</button>
                                        </>
                                    }
                                </>
                            :
                                <>
                                    <button className='joinNowBtn' onClick={() => props.btnFunction(true)}>Join now</button>
                                    <button className='signInBtn' onClick={() => props.btnFunction(false)}>Sign In</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;