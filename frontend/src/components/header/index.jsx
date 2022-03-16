import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import TopNav from './TopNav';
import { Container } from '@chakra-ui/layout';

Header.propTypes = {

};

function Header(props) {
    return (
        <Container
            maxWidth='100%'
            width='100%'
            padding='0'
            position='fixed'
            top='0'
            background='#fff'
            zIndex='100'
        >
            <TopBar />
            <TopNav />
        </Container>
    );
}

export default Header;