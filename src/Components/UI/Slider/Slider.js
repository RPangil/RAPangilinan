import Slide from "./Slide/Slide";
import SlideNav from "./SlideNav/SlideNav";

import style from "./Slider.module.scss";

function Slider(props)
{
    return (
        <div className={style.container}>
            <SlideNav></SlideNav>
            <Slide></Slide>
        </div>
    );
}

export default Slider;