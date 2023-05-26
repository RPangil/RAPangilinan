import { Link } from 'react-scroll';

import styles from './Header.module.scss';
import { useState } from 'react';

function Header()
{
    const [menuClick, setMenuClick] = useState(false);

    function menuIsClicked()
    {
        if(menuClick === false)
        {
            setMenuClick(true);
        }
        else
        {
            setMenuClick(false);
        }
    }

    return (
        <header>
            <nav>
                <div className={styles.logo}>
                    <Link
                        to='hero'
                        spy={true}
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                    >
                        RAP
                    </Link>
                </div>
                <div className={styles.nav}>
                    <Link
                        to='About'
                        spy={true}
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                    >
                        About
                    </Link>
                    <Link
                        to='Skills'
                        spy={true}
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                    >
                        Skills
                    </Link>
                    <Link
                        to='Experience'
                        spy={true}
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                    >
                        Experience
                    </Link>
                    <Link
                        to='Work'
                        spy={true}
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                    >
                        Work
                    </Link>
                </div>
                <div className={styles.menu}>
                    <button aria-label='Menu' onClick={menuIsClicked}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </button>
                    <div className={`${styles.menuNav} ${menuClick ? styles.open : ''}`}>
                        <nav>
                            <Link
                                to='About'
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                            >
                                About
                            </Link>
                            <Link
                                to='Skills'
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                            >
                                Skills
                            </Link>
                            <Link
                                to='Experience'
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                            >
                                Experience
                            </Link>
                            <Link
                                to='Work'
                                spy={true}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                            >
                                Work
                            </Link>
                        </nav>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;