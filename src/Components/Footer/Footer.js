import styles from './Footer.module.scss';

function Footer()
{
    return (
        <footer>
            <div className={styles.container}>
                <p>Designed &amp; Built by Robert Pangilinan &copy;2023</p>
            </div>
        </footer>
    );
}

export default Footer;