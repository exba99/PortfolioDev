import React from 'react';
import './ItemNavbar.css';

const ItemNavbar = React.memo(function ({ Icon, Text, classe }) {
    
    const onHoverDiv = () => {
        let div = document.querySelector("."+classe);
        const divIcon =  div.childNodes[0];
        const divText =  div.childNodes[1].firstChild;
        divIcon.style.visibility = 'hidden';
        divText.style.visibility = 'visible';
    }

    const onOutHoverDiv = () => {
        let div = document.querySelector("."+classe);
        const divIcon =  div.childNodes[0];
        const divText =  div.childNodes[1].firstChild;
        divIcon.style.visibility = 'visible';
        divText.style.visibility = 'hidden';
    }

    return (
        <div className={`div-icon-text ${classe}`} onMouseOver={onHoverDiv} onMouseOut={onOutHoverDiv}>
            <div className="div-icon">
                <Icon />
            </div>
            <div className="div-text">
                <span>{Text}</span>
            </div>
        </div>
    )
})

export default ItemNavbar
