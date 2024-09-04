import React from 'react'

function Button({button, clase}) {
    return <button className={clase}>{button}</button>;
};

export default Button;