import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../../components/header';
import Banner from '../../../../components/Banner';
import { Outlet } from 'react-router';
import BannerHome from '../../components/Banner';

HomePage.propTypes = {

};

function HomePage(props) {
    return (
        <>
            <BannerHome />
        </>
    );
}

export default HomePage;