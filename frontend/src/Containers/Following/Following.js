

import './Following.scss';

import Header from "../../Components/Header/Header";

import profile from '../../assets/Public/profile.png';

const Following = () => {

    return (
        <>
            <Header />
            <div className='followingCon'>
                <div className='following'>
                    <div className='comPanelCon'>
                        <div className='comPanel'>
                            <span className='comPanelHeader'>
                                <p>Companies Followed</p>
                            </span>
                            <div className='companyCon'>
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
                            </div>
                            <div className='companyCon'>
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
                            </div>
                            <div className='companyCon'>
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
                            </div>
                        </div>
                    </div>
                    <div className='jobsPanelCon'>
                        <div className='jobsPanel'>
                            <span className='jobsPanelHeader'>
                                <p>Available Jobs</p>
                            </span>
                            <div className='jobCon'>
                                <div className='jobInfoCon'>
                                    <span className='jobName'>
                                        <p>Job Title</p>
                                    </span>
                                    <span className='jobDisc'>
                                        <p>This is a job description</p>
                                    </span>
                                </div>
                                <div className='applyBtnCon'>
                                    <button>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Following;