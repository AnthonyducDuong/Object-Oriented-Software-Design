import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Link, Image, Container, Heading, List, ListItem, Text } from '@chakra-ui/react';
import IMAGES from '../../constants/images';
import { MdPets } from "react-icons/md";
import { FaDog } from "react-icons/fa";

AdoptCart.propTypes = {
    namePet: PropTypes.string,
    gender: PropTypes.string,
    age: PropTypes.number,
    breed: PropTypes.string,
    info: PropTypes.string,
    character: PropTypes.string

};

function AdoptCart(props) {
    return (
        <Flex
            maxWidth='544px'
            height='396px'
            flexWrap='wrap'
            backgroundImage={IMAGES.AdoptCart}
            backgroundRepeat='repeat'
            backgroundColor='#f4f4f4!important'
            padding='20px'
        >
            <Flex
                width='100%'
            >
                <Link maxWidth='41.67%' padding='0 15px'>
                    <Image
                        objectFit='cover'
                        src={IMAGES.AdoptPet}
                        alt='Pet 1'
                        borderBottom='5px solid #018AE0'
                    />
                </Link>
                <Container
                    maxWidth='58,33%'
                    padding='0 15px'
                >
                    <Heading
                        margin='20px 0'
                        fontSize='24px'
                    >
                        {props.namePet}
                    </Heading>
                    <List>
                        <ListItem
                            borderBottom='1px dashed #cecece'
                            padding='5px 0'
                        >
                            <strong>Gender:</strong>{props.gender}
                        </ListItem>
                        <ListItem
                            borderBottom='1px dashed #cecece'
                            padding='5px 0'
                        >
                            <strong>Age:</strong>{props.age}years
                        </ListItem>
                        <ListItem
                            borderBottom='1px dashed #cecece'
                            padding='5px 0'
                        >
                            <strong>Breed:</strong>{props.breed}
                        </ListItem>
                    </List>
                </Container>
            </Flex>
            <Container
                maxWidth='100%'
                marginTop='15px'
                textAlign='center'
            >
                <List
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    padding='10px'
                    marginBottom='20px'
                    backgroundColor='#fff'
                >
                    <ListItem
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding='5px 0'
                        margin='6px'
                    >
                        <MdPets />
                        <Text
                            fontSize='12px'
                            fontWeight='500'
                        >
                            SPECIAL NEEDS
                        </Text>
                    </ListItem>
                    <ListItem
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding='5px 0'
                        margin='6px'
                    >
                        <FaDog />
                        <Text
                            fontSize='12px'
                            fontWeight='500'
                        >
                            FRIENDLY TO OTHER PETS
                        </Text>
                    </ListItem>
                </List>
                <Link
                    marginTop='5px'
                    padding='10px 50px'
                    backgroundColor='#018AE0'
                    borderRadius='50px'
                    color='#fff'
                    fontWeight='700'
                >
                    MORE INFO
                </Link>

            </Container>
        </Flex>
    );
}

export default AdoptCart;