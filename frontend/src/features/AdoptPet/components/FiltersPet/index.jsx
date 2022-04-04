import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Flex, Heading, Text, List, ListIcon, ListItem, Button } from '@chakra-ui/react';

FiltersPet.propTypes = {

};

function FiltersPet(props) {
    const [fliterAll, setFilterAll] = useState(true)
    const [fliterDog, setFilterDog] = useState(false)
    const [fliterCat, setFilterCat] = useState(false)
    const handleFilterAll = () => {
        if (!fliterAll) {
            setFilterAll(true)
            setFilterCat(false)
            setFilterDog(false)
        }
    }
    const handleFilterDog = () => {
        if (!fliterDog) {
            setFilterDog(true)
            setFilterCat(false)
            setFilterAll(false)
        }
    }
    const handleFilterCat = () => {
        if (!fliterCat) {
            setFilterCat(true)
            setFilterAll(false)
            setFilterDog(false)
        }
    }
    return (
        <Flex
            alignItems='center'
            justifyContent='center'
            marginTop='48px'
        >
            <Button
                fontSize='22px'
                fontWeight='700'
                color='#fff'
                backgroundColor={fliterAll ? '#018AE0' : '#1446A0'}
                boxShadow='none !important'
                padding='30px 44px'
                alignItems='center'
                borderRadius='40px'
                margin='0 8px'
                onClick={handleFilterAll}
                _hover={{
                    backgroundColor: fliterAll === true ? '' : '#018AE0'
                }}
                _active={{
                    backgroundColor: '#1446A0'
                }}
            >
                All
            </Button>
            <Button
                fontSize='22px'
                fontWeight='700'
                color='#fff'
                backgroundColor={fliterDog ? '#018AE0' : '#1446A0'}
                boxShadow='none !important'
                padding='30px 44px'
                alignItems='center'
                borderRadius='40px'
                margin='0 8px'
                onClick={handleFilterDog}
                _hover={{
                    backgroundColor: fliterDog === true ? '' : '#018AE0'
                }}
                _active={{
                    backgroundColor: '#1446A0'
                }}
            >
                Dogs Only
            </Button>
            <Button
                fontSize='22px'
                fontWeight='700'
                color='#fff'
                backgroundColor={fliterCat ? '#018AE0' : '#1446A0'}
                boxShadow='none !important'
                padding='30px 44px'
                alignItems='center'
                borderRadius='40px'
                margin='0 8px'
                onClick={handleFilterCat}
                _hover={{
                    backgroundColor: fliterCat === true ? '' : '#018AE0'
                }}
                _active={{
                    backgroundColor: '#1446A0'
                }}
            >
                Cats Only
            </Button>
        </Flex>
    );
}

export default FiltersPet;