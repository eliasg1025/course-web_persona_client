import React from 'react';

import SocialLinks from '../../SocialLinks';
import LogoWhite from '../../../../assets/img/png/original.png';

import './MyInfo.scss';

export default function MyInfo() {
    return (
        <div className="my-info">
            <img src={LogoWhite} alt="Elias Guere" />
            <h4>
                Entra al mundo se desarrollo web y disfruta creando proyectos de todo tipo
            </h4>
            <SocialLinks />
        </div>
    );
}
