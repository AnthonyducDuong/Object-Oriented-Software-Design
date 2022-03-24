import React from 'react';
import PropTypes from 'prop-types';
import { Container, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarker } from "react-icons/fa";

TopBar.propTypes = {

};

function TopBar(props) {
    return (
        <Container
            margin='0'
            maxWidth='100%'
            padding='0'
            backgroundColor='#1446A0'
            height='42px'
        >
            <Flex
                justifyContent='space-between' alignItems='center'
                margin='0 190px'
            >
                <List display='flex' >
                    <ListItem display='flex' alignItems='center' padding='0 20px 0 0' color='#fff'>
                        <FaMapMarker />
                        <Text marginLeft='8px'>Số 1 Võ Văn Ngân </Text>
                    </ListItem>
                    <ListItem display='flex' alignItems='center' padding='0 20px' color='#fff'>
                        <EmailIcon />
                        <Text marginLeft='8px'>email@gmail.com </Text>
                    </ListItem>
                    <ListItem display='flex' alignItems='center' padding='0 20px' color='#fff'>
                        <PhoneIcon />
                        <Text marginLeft='8px'>0123456789 </Text>
                    </ListItem>
                </List>
                <List display='flex' color='#fff' alignItems='center' height='42px'>
                    <ListItem padding='0 10px'><FaFacebookF /></ListItem>
                    <ListItem padding='0 10px'><FaTwitter /></ListItem>
                    <ListItem padding='0 10px'><FaInstagram /></ListItem>
                </List>
            </Flex>
        </Container>
    );
}

export default TopBar;