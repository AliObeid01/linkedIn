import { useState } from 'react';

import './Admin.scss';

import Header from "../../Components/Header/Header";

import profile from '../../assets/Public/profile.png';

const Admin = () => {

    const [jobTitle, setJobTitle] = useState('Software Engineer')
    const [bio, setBio] = useState('This is a bio')
    const [setNewJobTitle] = useState('')
    const [setNewJobDesc] = useState('')
    const [editMode, setEditMode] = useState(false)

    return (
        <>
            <Header />
            <div className='homeCon'>
                <div className='home'>
                    <div className='userPanelCon'>
                        <div className='userPanel'>
                            <img src={profile} alt="" />
                            <p>Company Name</p>
                            <p id='email'>HR@email.com</p>
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
                                    type='text'
                                    placeholder='Address' />
                            </span>
                            <span>
                                <textarea 
                                    disabled={!editMode && 'true'}
                                    className='bodyInput'
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    type='text'
                                    placeholder='About Us' />
                            </span>
                            <span className='editBtnCon'>
                                <button className='editBtn' onClick={() => setEditMode(!editMode)}>{editMode ? 'Save' : 'Edit'}</button>
                            </span>
                        </div>
                    </div>
                    <div className='postsPanelCon'>
                        <div className='postsPanel'>
                            <div className='newPostCon'>
                                <span className='newPostHeader'>
                                    <p>Add a job</p>
                                </span>
                                <div className='newPost'>
                                    <span>
                                        <input 
                                            className='bodyInput'
                                            onChange={(e) => setNewJobTitle(e.target.value)}
                                            type='text'
                                            placeholder='New Job Title' />
                                    </span>
                                    <span>
                                        <textarea 
                                            className='bodyInput'
                                            onChange={(e) => setNewJobDesc(e.target.value)}
                                            type='text'
                                            placeholder='New Job Description' />
                                    </span>
                                </div>
                            </div>
                            <div className='oldPostCon'>
                                <div className='oldPost'>
                                    <p>Job Title</p>
                                    <p>Job DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob Description</p>
                                </div>
                                <div className='oldPost'>
                                    <p>Job Title</p>
                                    <p>Job DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob Description</p>
                                </div>
                                <div className='oldPost'>
                                    <p>Job Title</p>
                                    <p>Job DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob Description</p>
                                </div>
                                <div className='oldPost'>
                                    <p>Job Title</p>
                                    <p>Job DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob Description</p>
                                </div>
                                <div className='oldPost'>
                                    <p>Job Title</p>
                                    <p>Job DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob Description</p>
                                </div>
                                <div className='oldPost'>
                                    <p>Job Title</p>
                                    <p>Job DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob Description</p>
                                </div>
                                <div className='oldPost'>
                                    <p>Job Title</p>
                                    <p>Job DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob DescriptionJob Description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='notifPanelCon'>
                        <div className='notifPanel'>
                            <span className='notifPanelHeader'>
                                <p>Applicants</p>
                            </span>
                            <div className='notifCon'>
                                <div className='notifImgCon'>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='notifBodyCon'>
                                    <div className='notif'>
                                        <p>Applicant</p>
                                        <p>Job Title</p>
                                    </div>
                                </div>
                            </div>
                            <div className='notifCon'>
                                <div className='notifImgCon'>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='notifBodyCon'>
                                    <div className='notif'>
                                        <p>Applicant</p>
                                        <p>Job Title</p>
                                    </div>
                                </div>
                            </div>
                            <div className='notifCon'>
                                <div className='notifImgCon'>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='notifBodyCon'>
                                    <div className='notif'>
                                        <p>Applicant</p>
                                        <p>Job Title</p>
                                    </div>
                                </div>
                            </div>
                            <div className='notifCon'>
                                <div className='notifImgCon'>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='notifBodyCon'>
                                    <div className='notif'>
                                        <p>Applicant</p>
                                        <p>Job Title</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;