import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, useToast } from '@chakra-ui/react'
import HeaderAdmin from '../Header';
import TableAccount from './TableAccount';
import PaginateUser from './PaginateUser';
import ModalAcc from './ModalAcc';
import userApi from '../../../../api/userApi';
import { duration } from 'moment';

AccountsManagement.propTypes = {
};

function AccountsManagement(props) {
    const [onModal, setOnModal] = useState(false)
    const [isRender, setIsRender] = useState(false)
    const toast = useToast()

    const handleOnModal = () => {
        setOnModal(true)
    }
    const handleCloseModal = () => {
        setOnModal(false)

    }
    const handleCreactAcc = async (acc) => {

        try {
            const params = {
                email: acc.email,
                password: acc.password,
                roles: acc.role,
                username: acc.userName,
            }
            const response = await userApi.saveUser(params)
            const { status } = response.data
            if (status === 200) {
                toast({
                    title: 'Create new user',
                    description: 'Create new user successfully',
                    duration: 3000,
                    isClosable: true,
                    position: 'top',
                    status: 'success'
                })
                setIsRender(!isRender)
            }
        } catch (error) {
            const { message } = error.response.data
            toast({
                title: 'Create new user',
                description: `${message}`,
                duration: 3000,
                isClosable: true,
                position: 'top',
                status: 'error'
            })
        }
    }
    useEffect(() => {
        document.title = "Accounts"
    }, [])
    return (
        <>
            <Box marginLeft='288px'>
                <Box
                    padding='40px'
                >
                    <HeaderAdmin heading='Accounts Management' isButton={true} btnName='Create new account' handleOnModal={handleOnModal} />
                    <PaginateUser itemsPerPage={10} isRerender={isRender} />
                </Box>
            </Box>
            <ModalAcc
                openModal={onModal}
                closeModal={handleCloseModal}
                handleAction={handleCreactAcc}
                isRender={isRender}
            />
        </>
    );
}

export default AccountsManagement;