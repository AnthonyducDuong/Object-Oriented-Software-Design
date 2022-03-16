import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../../components/header';
import Map from '../../../../components/Map'
import NewsLetter from '../../../../components/NewsLetter';
import Footer from '../../../../components/Footer';
import Banner from '../../../../components/Banner';
import ContentContact from '../../Content'

Contact.propTypes = {

};

function Contact(props) {
    return (
        <>
            <Header />
            <Banner heading='Contact' />
            <ContentContact />
            <NewsLetter />
            <Footer />
        </>
    );
}

export default Contact;