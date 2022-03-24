import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Image } from '@chakra-ui/react'
import AdoptCart from '../../../../../components/AdoptCart';

SliderAdoption.propTypes = {

};

function SliderAdoption(props) {
    const style = {
        // textAlign: 'center',
        // padding: '50px 0 0 0',
        // fontSize: '30px'
        margin: '0 30px',
        // width: 'auto !important'
    };

    const properties = {
        duration: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <Slide {...properties}>
            <div style={style}>
                <AdoptCart
                    namePet='Mimi'
                    gender='Female'
                    age='3'
                    breed='Mixed'
                    info='Vaccinated'
                    character='Children friendly'
                    maxW='505px !important'
                    h='396px'
                />
            </div>
            <div style={style}>
                <AdoptCart
                    namePet='Mimi'
                    gender='Female'
                    age='3'
                    breed='Mixed'
                    info='Vaccinated'
                    character='Children friendly'
                    maxW='505px'
                    h='396px'
                />
            </div>
        </Slide>
    );
}

export default SliderAdoption;