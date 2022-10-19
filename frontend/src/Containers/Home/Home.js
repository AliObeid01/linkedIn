import { useState } from 'react';

import './Home.scss';

import Header from "../../Components/Header/Header";

import profile from '../../assets/Public/profile.png';

const Home = () => {

    const [jobTitle, setJobTitle] = useState('Software Engineer')
    const [bio, setBio] = useState('This is a bio')
    const [editMode, setEditMode] = useState(false)

    return (
        <>
            <Header />
            <div className='homeCon'>
                <div className='home'>
                    <div className='userPanelCon'>
                        <div className='userPanel'>
                            <img src={profile} alt="" />
                            <p>User Name</p>
                            <p id='email'>test_email@email.com</p>
                            <span>
                                <input 
                                    disabled={!editMode && 'true'}
                                    className='bodyInput'
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    type='text'
                                    placeholder='Job Title' />
                            </span>
                            <span>
                                <input 
                                    disabled={!editMode && 'true'}
                                    className='bodyInput'
                                    type='date'
                                    placeholder='Date of birth' />
                            </span>
                            <span>
                                <textarea 
                                    disabled={!editMode && 'true'}
                                    className='bodyInput'
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    type='text'
                                    placeholder='Bio' />
                            </span>
                            <span className='editBtnCon'>
                                <button className='editBtn' onClick={() => setEditMode(!editMode)}>{editMode ? 'Save' : 'Edit'}</button>
                            </span>
                        </div>
                    </div>
                    <div className='mainPanelCon'>
                        <div className='mainPanel'>
                            <span className='mainPanelHeader'>
                                <p>Recommended for you</p>
                            </span>
                            <div className='companyRecCon'>
                                <div className='companyImgCon'>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='companyInfoCon'>
                                    <span className='companyName'>
                                        <p>Company Name</p>
                                    </span>
                                    <span className='companyDisc'>
                                        <p>This is a company discription</p>
                                    </span>
                                </div>
                                <div className='followCompanyBtnCon'>
                                    <button>Follow</button>
                                </div>
                            </div>
                            <div className='companyRecCon'>
                                <div className='companyImgCon'>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='companyInfoCon'>
                                    <span className='companyName'>
                                        <p>Company Name</p>
                                    </span>
                                    <span className='companyDisc'>
                                        <p>This is a company discription</p>
                                    </span>
                                </div>
                                <div className='followCompanyBtnCon'>
                                    <button>Follow</button>
                                </div>
                            </div>
                            <div className='companyRecCon'>
                                <div className='companyImgCon'>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='companyInfoCon'>
                                    <span className='companyName'>
                                        <p>Company Name</p>
                                    </span>
                                    <span className='companyDisc'>
                                        <p>This is a company discription</p>
                                    </span>
                                </div>
                                <div className='followCompanyBtnCon'>
                                    <button>Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='notifPanelCon'>
                        <div className='notifPanel'>
                            <span className='notifPanelHeader'>
                                <p>Notifications</p>
                            </span>
                            <div className='notifCon'>
                                <div className='notifImgCon'>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='notifBodyCon'>
                                    <span className='notif'>
                                        <p>This is a notification</p>
                                    </span>
                                </div>
                            </div>
                            <div className='notifCon'>
                                <div className='notifImgCon'>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='notifBodyCon'>
                                    <span className='notif'>
                                        <p>This is a notification</p>
                                    </span>
                                </div>
                            </div>
                            <div className='notifCon'>
                                <div className='notifImgCon'>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='notifBodyCon'>
                                    <span className='notif'>
                                        <p>This is a notification</p>
                                    </span>
                                </div>
                            </div>
                            <div className='notifCon'>
                                <div className='notifImgCon'>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='notifBodyCon'>
                                    <span className='notif'>
                                        <p>This is a notification</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;