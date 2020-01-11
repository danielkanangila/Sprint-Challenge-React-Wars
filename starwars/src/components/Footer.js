import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: block;
    width: 100;
    padding: 50px 0;
    background-color: #212121;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 50px;
`;

const P = styled.p`
    font-size: 0.7rem;
    letter-spacing:px;
`

const H2 = styled.h2``;

const Footer = () => {
    return(
        <FooterWrapper>
            <H2>Start War Legends</H2>
            <P>By ReactWars - Copyright &copy; 2020</P>
        </FooterWrapper>
    )
}

export default Footer;