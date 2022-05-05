import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Image, Text, List, ListItem, ListIcon, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import IMAGES from '../../../../constants/images';
import { MdSupervisorAccount } from 'react-icons/md'
import { RiDashboard2Line } from 'react-icons/ri'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { FaDog } from 'react-icons/fa'
import { GiDogBowl } from 'react-icons/gi'
import { useDispatch } from 'react-redux';
import { logout } from '../../../Auth/authSlice';

NavAdmin.propTypes = {

};

function NavAdmin(props) {
    const { handleEventLogout } = props;
    const navigate = useNavigate()
    const handleLogout = () => {
        if (handleEventLogout) {
            handleEventLogout();
            navigate('/')
        }
    }
    return (
        <Flex
            top='0'
            height='100%'
            width='288px'
            flexDirection='column'
            borderTopRightRadius='16px'
            borderBottomEndRadius='16px'
            borderTopLeftRadius='0'
            borderBottomLeftRadius='0'
            position='fixed'
            bottom='0'
            zIndex='1001'
            backgroundImage='linear-gradient(160deg, #0ec4cb, #0ec4cb,#0ed0d6,#12d1d8)'
        >
            <Flex
                flexDirection='column'
                height='100%'
                padding='32px 0'
                alignItems='center'
                justifyContent='center'

            >
                <Box
                    marginBottom='20px'
                >
                    <Link
                        to='/admin'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            src={IMAGES.Logo}
                            width='40%'
                        />
                    </Link>
                </Box>
                <Flex
                    minHeight='100px'
                    height='auto'
                    flexDirection='column'
                    width='102px'
                    justifyContent='center'
                    alignItems='center'
                    margin='16px 0'
                    _hover={{
                        boxShadow: '0 4px 10px rgba(0,0,0,.03)!important',
                        background: 'rgba(255, 255, 255, .05)',
                        borderRadius: '16px',
                    }}
                >
                    <Link
                        to='/admin'
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Image
                            src='https://acorn-html-medical-assistant.coloredstrategies.com/img/profile/profile-1.webp'
                            boxSize='80px'
                            borderRadius='full'
                        />

                        <Text
                            fontSize='13px'
                            lineHeight='1'
                            color='#fff'
                            marginTop='4px'
                        >
                            Alicia Owens
                        </Text>
                    </Link>
                </Flex>
                <Flex
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    boxShadow='0 4px 10px rgba(0,0,0,.2)!important'
                    background='rgba(255, 255, 255, .05)'
                    borderRadius='16px'
                    width='80%'
                >
                    <List
                        width='100%'
                        color='#fff'
                        fontSize='18px'
                        fontWeight='500'
                    >
                        <ListItem
                            margin='6px 0'
                            padding='6px'
                            width='100%'
                            textAlign='left'
                            _after={{
                                content: '""',
                                width: '100%',
                                display: 'block',
                                borderBottom: '1px solid #cecece',
                            }}
                        >
                            <Link
                                to='/accounts'
                                style={{
                                    padding: '4px 20px',
                                    display: 'block'
                                }}
                            >
                                <ListIcon
                                    as={MdSupervisorAccount}
                                    fontSize='24px'
                                />
                                Accounts
                            </Link>
                        </ListItem>

                        <ListItem
                            margin='6px 0'
                            padding='6px'
                            width='100%'
                            textAlign='left'
                            _after={{
                                content: '""',
                                width: '100%',
                                display: 'block',
                                borderBottom: '1px solid #cecece',
                            }}
                        >
                            <Link
                                to={'/booking'}
                                style={{
                                    padding: '4px 20px',
                                    display: 'block'
                                }}
                            >
                                <ListIcon
                                    as={BsFillCalendarCheckFill}
                                    fontSize='24px'
                                />
                                Booking Service
                            </Link>
                        </ListItem>

                        <ListItem
                            margin='6px 0'
                            padding='6px'
                            width='100%'
                            textAlign='left'
                            _after={{
                                content: '""',
                                width: '100%',
                                display: 'block',
                                borderBottom: '1px solid #cecece',
                            }}
                        >
                            <Link
                                to={'/dashboard'}
                                style={{
                                    padding: '4px 20px',
                                    display: 'block'
                                }}
                            >
                                <ListIcon
                                    as={RiDashboard2Line}
                                    fontSize='24px'
                                />
                                Dashboard
                            </Link>
                        </ListItem>

                        <ListItem
                            margin='6px 0'
                            padding='6px'
                            width='100%'
                            textAlign='left'
                            _after={{
                                content: '""',
                                width: '100%',
                                display: 'block',
                                borderBottom: '1px solid #cecece',
                            }}
                        >
                            <Link
                                to='/petsmanagement'
                                style={{
                                    padding: '4px 20px',
                                    display: 'block'
                                }}
                            >
                                <ListIcon
                                    as={FaDog}
                                    fontSize='24px'
                                />
                                Pets
                            </Link>
                        </ListItem>

                        <ListItem
                            margin='6px 0'
                            padding='6px'
                            width='100%'
                            textAlign='left'
                            _after={{
                                content: '""',
                                width: '100%',
                                display: 'block',
                                borderBottom: '1px solid #cecece',
                            }}
                        >
                            <Link
                                to='/servicesmanagement'
                                style={{
                                    padding: '4px 20px',
                                    display: 'block'
                                }}
                            >
                                <ListIcon
                                    as={GiDogBowl}
                                    fontSize='24px'
                                />
                                Services
                            </Link>
                        </ListItem>
                    </List>
                </Flex>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    boxShadow='0 4px 10px rgba(0,0,0,.2)!important'
                    background='rgba(255, 255, 255, .05)'
                    borderRadius='16px'
                    width='80%'
                    marginTop='40px'
                >
                    <Button
                        backgroundColor='transparent'
                        color='#fff'
                        fontSize='18px'
                        fontWeight='500'
                        boxShadow='none !important'
                        _hover={{
                            backgroundColor: 'transparent !important',
                        }}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Flex>
            </Flex>

        </Flex>
    );
}

export default NavAdmin;