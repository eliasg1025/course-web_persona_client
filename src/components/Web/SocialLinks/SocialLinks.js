import React from 'react';

import { ReactComponent as YouTubeIcon } from '../../../assets/img/svg/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/img/svg/twitter.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/img/svg/linkedin.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/img/svg/facebook.svg';

import './SocialLinks.scss';

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a
                href="https://www.youtube.com/channel/UC6claaQ1IT0ilaV1NGmIyGA?view_as=subscriber"
                className="youtube"
                target="_blank"
                rel="noopener noreferrer"
            >
                <YouTubeIcon />
            </a>
            <a
                href="https://twitter.com/eliasg1025"
                className="twitter"
                target="_blank"
                rel="noopener noreferrer"
            >
                <TwitterIcon />
            </a>
            <a
                href="https://www.linkedin.com/in/elias-guere-canchucaja-4745b4126/"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedinIcon />
            </a>
            <a
                href="https://www.facebook.com/eguere1"
                className="facebook"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FacebookIcon />
            </a>
        </div>
    );
}
