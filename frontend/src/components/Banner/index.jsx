import React from 'react';
import PropTypes from 'prop-types';
import { Container, Flex, Heading, Text, Link } from '@chakra-ui/react'
import IMAGES from '../../constants/images';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { AiOutlineRight } from "react-icons/ai";

Banner.propTypes = {
    heading: PropTypes.string
};

function Banner(props) {
    return (
        <Container
            margin='0'
            padding='0'
            maxWidth='100%'
            width='auto'
            backgroundImage={IMAGES.Banner}
            height='212'
            marginTop='148px'
            padding='64px 0'
            backgroundSize={'cover'}
            backgroundRepeat='no-repeat'
            backgroundPosition='center center'
            position='relative'
            backgroundSize='cover'
        >
            <Container
                margin='0 190px'
                padding='0'
                maxWidth='100%'
                width='auto'
            >
                <Heading
                    color='#fff'
                    fontSize='60px'
                >
                    {props.heading}
                </Heading>
                <Flex alignItems='center' justifyContent='center' borderRadius='5px' background='#D61C62' height='30px' maxWidth='180px' padding='5px 30px'>
                    <Link lineHeight='14px' fontSize='14px' fontWeight='400' color='#fff'> Home</Link>
                    <ChevronRightIcon color='#fff' />
                    <Text lineHeight='14px' fontSize='14px' fontWeight='400' color='#cecece'>{props.heading}</Text>
                </Flex>
            </Container>

        </Container>
    );
}

export default Banner;