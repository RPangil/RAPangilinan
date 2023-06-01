import { Fragment, useState } from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Container from './Components/UI/Container';
import ProgressBar from './Components/UI/ProgressBar/ProgressBar';

import styles from './SCSS/main.module.scss';

function App() 
{
    const [activeSlide, setActiveSlide] = useState(
    {
        activeIndex: 1
    });

    function companyClicked(companyNum)
    {
        if(activeSlide.activeIndex === companyNum)
        {
            return setActiveSlide(
            {
                ...activeSlide
            });
        }

        setActiveSlide(
        {
            ...activeSlide,
            activeIndex: companyNum
        });
    }

    return (
        <Fragment>
            <Header />
            <main>
                <Container className={`${styles.hero} ${styles.ct}`} id='hero'>
                    <h1 className={styles.norm}>Welcome, I'm <span className={`${styles.red} ${styles.med}`}>Robert Pangilinan</span></h1>
                    <p className={`${styles.smdText}`}>
                        I'm a front-end web developer that aims to create intuitive and user friendly websites.
                    </p>
                </Container>
                <Container title='About Me' id='About'>
                    <p>
                        Hey! My name is Robert and I take interest in almost anything related to tech, photography, basketball and football. 
                        I started to get into web development back in 2011, when I had a computer class that taught us how to make basic websites.
                        From there, I took a lot more interest in coding, inspecting websites to see how they're made and libraries that could help with making websites responsive.
                    </p>
                    <p>
                        While in college, I worked as a college assistant that helps making and maintaining webpages for the different college departments. 
                        After graduating college, I was able to work in a start-up and most recently a website agency. 
                        Recently, I'm working on a couple of projects for an F1 league that wants a revamped website and a private project, while looking for a job.
                    </p>
                </Container>
                <Container title="Technologies" id='Skills'>
                    <p>Some of the technologies I use:</p>
                    <div className={`${styles.progressBarContainer} ${styles.contain}`}>
                        <div className={styles.left}>
                            <ProgressBar completed={90} label='HTML' />
                            <ProgressBar completed={90} label='CSS' />
                            <ProgressBar completed={85} label='JavaScript' />
                            <ProgressBar completed={85} label='Bootstrap' />
                        </div>
                        <div className={styles.right}>
                            <ProgressBar completed={80} label='React' />
                            <ProgressBar completed={80} label='jQuery' />
                            <ProgressBar completed={70} label='MySQL' />
                            <ProgressBar completed={50} label='SCSS' />
                        </div>
                    </div>
                </Container>
                <Container title="Places I've Worked" id='Experience'>
                    <div className={`${styles.contain} ${styles.slider}`}>
                        <div className={styles.leftTh}>
                            <div className={`${styles.company} ${activeSlide.activeIndex === 1 ? styles.active:''}`} onClick={() => companyClicked(1)}>Ovis Technologies</div>
                            <div className={`${styles.company} ${activeSlide.activeIndex === 2 ? styles.active:''}`} onClick={() => companyClicked(2)}>Element Zero</div>
                            <div className={`${styles.company} ${activeSlide.activeIndex === 3 ? styles.active:''}`} onClick={() => companyClicked(3)}>LaGuardia Community College</div>
                        </div>
                        <div className={styles.right}>
                            <div className={`${styles.slide} ${activeSlide.activeIndex === 1 ? styles.active : ''}`} key={1}>
                                <h3 className={`${styles.smdText} ${styles.med}`}>Jr. Web Developer - <span>Ovis Technologies</span></h3>
                                <p className={styles.smText}>April 2021 - March 2023</p>
                                <ul>
                                    <li>Created responsive websites using HTML, CSS, JavaScript, jQuery, and Perl</li>
                                    <li>Converted mock-ups (Photoshop / Adobe XD) to websites</li>
                                    <li>Provided customer support using the company’s ticketing system, which involved direct communication with end users</li>
                                    <li>Coordinated with Project Managers, Lead Developer and the Quality Assurance Group to ensure the project objectives are met</li>
                                </ul>
                            </div>
                            <div className={`${styles.slide} ${activeSlide.activeIndex === 2 ? styles.active : ''}`} key={2}>
                                <h3 className={`${styles.smdText} ${styles.med}`}>Web Developer - <span>Element Zero</span></h3>
                                <p className={styles.smText}>September 2019 - March 2021</p>
                                <ul>
                                    <li>Redesigned the company website to be more responsive and mobile-friendly</li>
                                    <li>Created a subsite to generate leads for the company’s IoT platform. Redesigned and created a subsite for an NPO owned by the company’s investor</li>
                                    <li>Worked on a project that required React/Angular, Laravel and MySQL</li>
                                </ul>
                            </div>
                            <div className={`${styles.slide} ${activeSlide.activeIndex === 3 ? styles.active : ''}`} key={3}>
                                <h3 className={`${styles.smdText} ${styles.med}`}>Instructional Design Assistant - <span>LaGuardia Community College</span></h3>
                                <p className={styles.smText}>August 2016 - June 2019</p>
                                <ul>
                                    <li>Design and develop faculty and instructional web pages using HTML, CSS, Bootstrap, and JavaScript</li>
                                    <li>Use Adobe Photoshop for images on websites</li>
                                    <li>Provide one-on-one consultation in the use of instructional technologies and webpage design</li>
                                    <li>Provide classroom instructional assistance and tutorials</li>
                                    <li>Supervise the ePortfolio Studio Lab, and aid faculty and students in the use of the ePortfolio</li>
                                    <li>Provide technical support to the ePortfolio Studio Lab</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container title="Websites I've Worked On" id='Work'>
                    <div className={`${styles.contain} ${styles.projects}`}>
                        <div className={`${styles.item} ${styles.dzp}`}>
                            <div className={styles.details}>
                                <h3 className={`${styles.title} ${styles.mdText} ${styles.med} ${styles.red}`}>DZP</h3>
                                <p className={`${styles.description} ${styles.smText}`}>React, SCSS, Bootstrap, Redux</p>
                                <a href='https://deltazeroproduction.com/' target='_blank' rel='noreferrer' className={`${styles.link} ${styles.smText}`}>Visit Site</a>
                            </div>
                        </div>
                        <div className={`${styles.item} ${styles.questar}`}>
                            <div className={styles.details}>
                                <h3 className={`${styles.title} ${styles.mdText} ${styles.med} ${styles.red}`}>Questar</h3>
                                <p className={`${styles.description} ${styles.smText}`}>HTML, CSS, jQuery, Perl</p>
                                <a href='https://www.questarcap.com/' target='_blank' rel='noreferrer' className={`${styles.link} ${styles.smText}`}>Visit Site</a>
                            </div>
                        </div>
                        <div className={`${styles.item} ${styles.ketoret}`}>
                            <div className={styles.details}>
                                <h3 className={`${styles.title} ${styles.mdText} ${styles.med} ${styles.red}`}>Ketoret</h3>
                                <p className={`${styles.description} ${styles.smText}`}>HTML, CSS, jQuery, Perl</p>
                                <a href='https://www.ketoretcap.com/' target='_blank' rel='noreferrer' className={`${styles.link} ${styles.smText}`}>Visit Site</a>
                            </div>
                        </div>
                        <div className={`${styles.item} ${styles.novawulf}`}>
                            <div className={styles.details}>
                                <h3 className={`${styles.title} ${styles.mdText} ${styles.med} ${styles.red}`}>Novawulf</h3>
                                <p className={`${styles.description} ${styles.smText}`}>HTML, CSS, jQuery, Perl</p>
                                <a href='https://novawulf.io/' target='_blank' rel='noreferrer' className={`${styles.link} ${styles.smText}`}>Visit Site</a>
                            </div>
                        </div>
                        <div className={`${styles.item} ${styles.acs}`}>
                            <div className={styles.details}>
                                <h3 className={`${styles.title} ${styles.mdText} ${styles.med} ${styles.red}`}>Aero Capital Solutions</h3>
                                <p className={`${styles.description} ${styles.smText}`}>HTML, CSS, jQuery, AJAX, Perl</p>
                                <a href='https://www.aerocapitalsolutions.com/' target='_blank' rel='noreferrer' className={`${styles.link} ${styles.smText}`}>Visit Site</a>
                            </div>
                        </div>
                        <div className={`${styles.item} ${styles.saige}`}>
                            <div className={styles.details}>
                                <h3 className={`${styles.title} ${styles.mdText} ${styles.med} ${styles.red}`}>Saige Private Wealth</h3>
                                <p className={`${styles.description} ${styles.smText}`}>HTML, CSS, jQuery, Perl</p>
                                <a href='https://www.saigepwm.com/' target='_blank' rel='noreferrer' className={`${styles.link} ${styles.smText}`}>Visit Site</a>
                            </div>
                        </div>
                        <div className={`${styles.item} ${styles.hfc}`}>
                            <div className={styles.details}>
                                <h3 className={`${styles.title} ${styles.mdText} ${styles.med} ${styles.red}`}>HFC</h3>
                                <p className={`${styles.description} ${styles.smText}`}>HTML, CSS, jQuery, AJAX, Perl</p>
                                <a href='https://www.hfc.org/' target='_blank' rel='noreferrer' className={`${styles.link} ${styles.smText}`}>Visit Site</a>
                            </div>
                        </div>
                        <div className={`${styles.item} ${styles.quorum}`}>
                            <div className={styles.details}>
                                <h3 className={`${styles.title} ${styles.mdText} ${styles.med} ${styles.red}`}>Quorum</h3>
                                <p className={`${styles.description} ${styles.smText}`}>HTML, CSS, jQuery, Perl</p>
                                <a href='https://www.quorumpw.com/' target='_blank' rel='noreferrer' className={`${styles.link} ${styles.smText}`}>Visit Site</a>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;
