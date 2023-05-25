import styles from './Header.module.scss';

function Header()
{
    return (
        <header>
            <nav>
                <div className={styles.logo}></div>
                <div className={styles.nav}></div>
                
            </nav>
        </header>
    );
}

export default Header;