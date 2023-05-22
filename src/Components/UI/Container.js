import styles from '../../SCSS/main.module.scss';

function Container(props)
{
    return(
        <section className={props.className}>
            <div className={styles.container}>
                {props.title ? <h2>{props.title}</h2> : ''}
                {props.children}
            </div>
        </section>
    );
}

export default Container;