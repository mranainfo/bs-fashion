import React from 'react';
import {Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import './TopNavigation.css';

const TopNavigation = () => {
    return (
        <>
         <Container className="py-1 top-bg">
             <span className="contact-info"><FontAwesomeIcon icon={faEnvelope}/> Lise@The2sisters.Design</span> |
             <span className="contact-info"> <FontAwesomeIcon icon={faPhoneAlt}/> +880 02 8413794</span>
         </Container>
        </>
    );
};

export default TopNavigation;