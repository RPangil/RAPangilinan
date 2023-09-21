import styles from '../../SCSS/main.module.scss';

function Container(props)
{
    return(
        <section className={props.className} id={props.id}>
            <div className={styles.container}>
                {props.title ? <h2 className={`${styles.med} ${styles.red}`}>{props.title}</h2> : ''}
                {props.children}
            </div>
        </section>
    );
}

export default Container;