function Container(props)
{
    return(
        <section className={props.className}>
            <div className="container">
                {props.title ? <h2>{props.title}</h2> : ''}
                {props.children}
            </div>
        </section>
    );
}

export default Container;