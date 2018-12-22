import React from 'react';
import { Link } from 'react-router-dom'
// Always remember to include the type of file when it comes o images.
import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png';


export const CityLogo = (props) => {

    const template = <div
    className = "img_cover"
    style={{
                width: props.width,
                height: props.height,
                background: `url(${mcitylogo}) no-repeat`
            }}></div>

    if(props.link){
        return (
            <Link to={props.linkTo} className='link_logo'>
                {template}
            </Link>
        )
    }else{
        return template
    }
}