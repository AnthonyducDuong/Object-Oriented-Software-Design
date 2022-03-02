import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import TopNav from './TopNav';
import { Container } from '@chakra-ui/layout';

Header.propTypes = {

};

function Header(props) {
    return (
        <>
            <TopBar />
            <TopNav />
        </>
    );
}

export default Header;