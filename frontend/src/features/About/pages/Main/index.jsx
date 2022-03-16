import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../../components/header'
import Banner from '../../../../components/Banner';
import { Container, Flex } from '@chakra-ui/layout';
import Content from '../../components/Content';
import SideBar from '../../../../components/SideBar'
import SliderAbout from '../../components/Slider';
import AccordionAbout from '../../components/Accordion';
import Footer from '../../../../components/Footer'
import NewsLetter from '../../../../components/NewsLetter'

About.propTypes = {

};

function About(props) {
    return (
        <>
            <Header />
            <Banner heading='About us' />
            <Container
                backgroundColor='#fff'
                width='auto'
                padding='90px 16px !important'
                margin='0 190px'
                maxWidth='100%'
            >
                <Flex
                    flexWrap='wrap'
                    margin='0 -15px'
                    width='100% !important'
                >
                    <Container
                        flex='0 0 75%'
                        maxWidth='75%'
                        margin='0'
                        paddingRight='20px'
                    >
                        <Content />
                        <AccordionAbout />
                        <Container
                            margin='48px 0 0 0'
                            padding='0 15px'
                            maxWidth='100%'
                        >
                            <SliderAbout />
                        </Container>
                    </Container>
                    <SideBar maxW='25%' flex='0 0 25%' />
                </Flex>
            </Container>
            <NewsLetter />
            <Footer />
        </>
    );
}

export default About;