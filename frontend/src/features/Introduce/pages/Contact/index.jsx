import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../../components/header';
import Map from '../../../../components/Map'
import NewsLetter from '../../../../components/NewsLetter';
import Footer from '../../../../components/Footer';
import Banner from '../../../../components/Banner';
import ContentContact from '../../components/ContentContact'

Contact.propTypes = {

};

function Contact(props) {
    window.scrollTo(0, 0)
    const arr = [{
        head: 'Contact',
        link: ''
    }]
    const arrJson = JSON.stringify(arr)
    useEffect(() => {
        document.title = "Contact"
    }, [])
    return (
        <>
            <Banner arrHeading={arrJson} headingPage={'Contact'} />
            <ContentContact />
        </>
    );
}

export default Contact;