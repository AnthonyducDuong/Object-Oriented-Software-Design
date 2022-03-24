import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import BoxMember from '../BoxMember';

SliderMember.propTypes = {

};

function SliderMember(props) {
    const style = {
        // textAlign: 'center',
        // padding: '50px 0 0 0',
        // fontSize: '30px',
    };

    const properties = {
        duration: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
                <BoxMember maxW='246px' maxH='414px' />
            </div>
            <div style={style}>
                <BoxMember maxW='246px' maxH='414px' />
            </div>
            <div style={style}>
                <BoxMember maxW='246px' maxH='414px' />
            </div>
            <div style={style}>
                <BoxMember maxW='246px' maxH='414px' />
            </div>
        </Slide>
    );
}

export default SliderMember;