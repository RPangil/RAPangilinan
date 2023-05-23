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
                <Container className={`${styles.hero} ${styles.ct}`}>
                    <h1 className={styles.norm}>Welcome, I'm <span className={`${styles.red} ${styles.med}`}>Robert Pangilinan</span></h1>
                    <p className={`${styles.smdText}`}>
                        I'm a front-end web developer that aims to create intuitive and user friendly websites.
                    </p>
                </Container>
                <Container title='About Me'>
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
                <Container title="Technologies">
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
                <Container title="Places I've Worked">
                    <div className={`${styles.contain} ${styles.slider}`}>
                        <div className={styles.leftTh}>
                            <div className={styles.company} onClick={() => companyClicked(1)}>Ovis Technologies</div>
                            <div className={styles.company} onClick={() => companyClicked(2)}>Element Zero</div>
                            <div className={styles.company} onClick={() => companyClicked(3)}>LaGuardia Community College</div>
                        </div>
                        <div className={styles.right}>
                            {
                                activeSlide.activeIndex === 1 ?
                                <div className={styles.slide} key={1}>
                                    <h3 className={`${styles.smdText} ${styles.med}`}>Jr. Web Developer - <span>Ovis Technologies</span></h3>
                                    <p className={styles.smText}>April 2021 - March 2023</p>
                                    <ul>
                                        <li>Created responsive websites using HTML, CSS, JavaScript, jQuery, and Perl</li>
                                        <li>Converted mock-ups (Photoshop / Adobe XD) to websites</li>
                                        <li>Provided customer support using the company’s ticketing system, which involved direct communication with end users</li>
                                        <li>Coordinated with Project Managers, Lead Developer and the Quality Assurance Group to ensure the project objectives are met</li>
                                    </ul>
                                </div>
                                :
                                activeSlide.activeIndex === 2 ?
                                <div className={styles.slide} key={2}>
                                    <h3 className={`${styles.smdText} ${styles.med}`}>Full Stack Web Developer - <span>Element Zero</span></h3>
                                    <p className={styles.smText}>September 2019 - March 2021</p>
                                    <ul>
                                        <li>Redesigned the company website to be more responsive and mobile-friendly</li>
                                        <li>Created a subsite to generate leads for the company’s IoT platform. Redesigned and created a subsite for an NPO owned by the company’s investor</li>
                                        <li>Worked on a project that required React/Angular, Laravel and MySQL</li>
                                    </ul>
                                </div>
                                :
                                <div className={styles.slide} key={3}>
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
                            }
                        </div>
                    </div>
                </Container>
                <Container title="Websites I've Worked On">
                    <ul>
                        <li>DZP</li>
                        <li>Questar</li>
                        <li>Ketoret</li>
                        <li>Novawulf</li>
                        <li>Aero Capital Solutions</li>
                        <li>Saige Private Wealth</li>
                        <li>HFC</li>
                        <li>Quorum</li>
                        <li>Famiglia</li>
                    </ul>
                </Container>
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;
