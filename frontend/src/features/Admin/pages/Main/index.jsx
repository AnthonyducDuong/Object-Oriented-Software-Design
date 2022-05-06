import React from 'react';
import PropTypes from 'prop-types';
import NavAdmin from '../../components/NavAdmin';
import { Routes, Outlet } from 'react-router-dom';
import { Flex, Box, Container } from '@chakra-ui/layout';

Admin.propTypes = {

};

function Admin(props) {
    const { handleEventLogout } = props
    return (
        <>
            <NavAdmin handleEventLogout={handleEventLogout} />

            <Outlet />
        </>
    );
}

export default Admin;