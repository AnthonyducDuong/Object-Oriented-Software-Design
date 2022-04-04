import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import { Container, Flex, Image, Heading, List, ListItem, Text, Button, Divider } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import SliderAdoptSingle from '../../components/SliderAdoptSingle';
import AccordionAdoptSingle from '../../components/AccordionAdoptSingle';
import IMAGES from '../../../../constants/images';
import petAPI from '../../../../api/petApi';
import AdoptCartSingle from '../../components/AdoptCartSingle';


AdoptionSingle.propTypes = {
    namePet: PropTypes.string,
    age: PropTypes.string,
    breed: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    vaccinated: PropTypes.bool,
};

function AdoptionSingle(props) {

    const { id: idPet } = useParams();
    const [pet, setPet] = useState({});
    const [srcImage, setSrcIamge] = useState();
    const [listPet, setListPet] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const getPet = async () => {
            const response = await petAPI.getPet(idPet);
            const { data } = response.data;
            if (response) {
                setIsLoading(true)
            }
            setPet(data.petInfo);
            setSrcIamge(data.petInfo.imagePetEntityList[0].url)
        }
        const getListPet = async () => {
            const params = {
                page: 0,
                size: 6,
            }
            const response = await petAPI.getAll(params)
            const { data } = response.data
            setListPet(data.pets)
        }
        getPet()
        getListPet()
    }, [idPet])

    window.scrollTo(0, 0)
    return (
        <>
            <Banner arrHeading={['Adoption', 'Adoption single page']} />
            <Container
                maxWidth='100%'
                width='auto'
                margin='0 190px'
                padding='90px 16px'
            >
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    flexWrap='wrap'
                >
                    <Container
                        flex='0 0 75%'
                        maxWidth='75%'
                        width='auto'
                        padding='0 30px 0 15px'
                        margin='0'
                    >
                        <Flex
                            alignItems='center'
                            justifyContent='center'
                            flexWrap='wrap'
                        >
                            <AdoptCartSingle pet={pet} srcImage={srcImage} isLoading={isLoading} />
                            <Container
                                flex='0 0 100%'
                                maxWidth='100%'
                                width='auto'
                                padding='0 15px'
                                margin='0'
                            >
                                <Heading
                                    marginBottom='20px'
                                >
                                    About me
                                </Heading>
                                <Text
                                    color='#6f6f6f'
                                    marginBottom='16px'
                                    fontWeight='400'
                                >
                                    Aliquam erat volutpat In id fermentum augue, ut pellentesque leo.Maecenas at arcu risus.Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id.
                                    In aliquet magna nec lobortis maximus.Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                                </Text>
                                <Text
                                    color='#6f6f6f'
                                    marginBottom='16px'
                                    fontWeight='400'
                                >
                                    Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.
                                </Text>
                                <Text
                                    color='#6f6f6f'
                                    marginBottom='16px'
                                    fontWeight='400'
                                >
                                    Elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus ac sodales felis tiam non metus.
                                    lorem ipsum dolor sit amet, consectetur adipisicing elit
                                </Text>
                                <Text
                                    color='#6f6f6f'
                                    marginBottom='16px'
                                    fontWeight='700'
                                >
                                    If you have any doubts or need more information, please {' '}
                                    <Link
                                        to='/contact'
                                        style={{
                                            color: '#018AE0'
                                        }}
                                    >
                                        contact us
                                    </Link>
                                </Text>
                                <Button
                                    textTransform='uppercase'
                                    color='#fff'
                                    fontWeight='700'
                                    padding='10px 50px'
                                    backgroundColor='#D61C62'
                                    borderRadius='24px'
                                    boxShadow='none !important'
                                    _hover={{
                                        backgroundColor: '#018AE0'
                                    }}
                                    _active={{
                                        backgroundColor: '#D61C62'
                                    }}
                                >
                                    Adopt me
                                </Button>
                            </Container>
                            <Container
                                flex='0 0 100%'
                                maxWidth='100%'
                                width='auto'
                                padding='0 15px'
                                margin='60px 0 0 0'
                            >
                                <Heading
                                    fontWeight='500'
                                    fontSize='32px'
                                >
                                    My photo gallery
                                </Heading>
                                <Divider
                                    width='60px'
                                    border='1px solid #cecece !important'
                                    margin='20px 0'
                                />

                                <SliderAdoptSingle />
                            </Container>
                            <Container
                                flex='0 0 100%'
                                maxWidth='100%'
                                width='auto'
                                padding='0 15px'
                                margin='40px 0 0 0'
                            >
                                <Heading
                                    fontWeight='500'
                                    fontSize='32px'
                                >
                                    Frequently Asked questions
                                </Heading>
                                <Divider
                                    width='60px'
                                    border='1px solid #cecece !important'
                                    margin='20px 0'
                                />
                                <AccordionAdoptSingle padd='20px 20px' />
                                <Flex
                                    alignItems='center'
                                    justifyContent='center'
                                    marginTop='40px'
                                >
                                    <Button
                                        textTransform='uppercase'
                                        color='#fff'
                                        fontWeight='700'
                                        padding='10px 50px'
                                        backgroundColor='#D61C62'
                                        borderRadius='24px'
                                        boxShadow='none !important'
                                        margin='8px'
                                        _hover={{
                                            backgroundColor: '#018AE0'
                                        }}
                                        _active={{
                                            backgroundColor: '#D61C62'
                                        }}
                                    >
                                        Adopt me
                                    </Button>
                                    <Link
                                        to='/adoption'
                                        style={{
                                            textTransform: 'uppercase',
                                            backgroundColor: '#018AE0',
                                            padding: '10px 50px',
                                            margin: '8px',
                                            borderRadius: '24px',
                                            color: '#fff',
                                            fontWeight: '700',
                                        }}
                                    >
                                        go back to adoption
                                    </Link>
                                </Flex>
                            </Container>
                        </Flex>
                    </Container>
                    <Container
                        flex='0 0 25%'
                        maxWidth='25%'
                        width='auto'
                        padding='20px'
                        margin='0'
                        backgroundColor='#f4f4f4!important'
                        borderRadius=' 8px'
                        backgroundImage={IMAGES.FooterBG}
                        backgroundRepeat='no-repeat'
                        backgroundPosition='center bottom'
                    >
                        <Container
                            maxWidth='100%'
                            width='auto'
                            padding='0'
                            margin='0'
                            textAlign='center'
                        >
                            <Heading
                                fontSize='24px'
                                fontWeight='700'
                                marginBottom='20px'
                                _after={{
                                    content: '""',
                                    border: '1px solid #cecece',
                                    display: 'block',
                                    width: '80px',
                                    margin: '10px auto'
                                }}
                            >
                                Information
                            </Heading>
                            <Text
                                textAlign='left'
                                color='#6f6f6f'
                                marginBottom='20px'
                            >
                                In id fermentum augue, ut pellen tesque Maecenas at arcu risus.Donec com modo sodales ex.
                            </Text>
                            <Heading
                                fontSize='24px'
                                fontWeight='700'
                                marginTop='30px'
                                marginBottom='20px'
                                _after={{
                                    content: '""',
                                    border: '1px solid #cecece',
                                    display: 'block',
                                    width: '80px',
                                    margin: '10px auto'
                                }}
                            >
                                Adopt a pet
                            </Heading>
                            <List
                                padding='0 10px'
                            >
                                {listPet.map((pet, index) => {
                                    return (
                                        <ListItem
                                            backgroundColor='#fff'
                                            borderRadius='8px'
                                            margin='10px 0'
                                            key={index}
                                        >
                                            <Link
                                                to={`/adoption/${pet.id}`}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Image
                                                    borderRadius='8px'
                                                    maxWidth='60px'
                                                    src={pet.imagePetEntityList[0].url}
                                                />
                                                <Heading
                                                    marginLeft='20px'
                                                    fontSize='24px'
                                                    color='#018AE0'
                                                >
                                                    {pet.name}
                                                </Heading>
                                            </Link>
                                        </ListItem>
                                    )
                                })}


                            </List>
                            <Flex
                                alignItems='center'
                                justifyContent='center'
                                backgroundColor='#018AE0'
                                borderRadius='24px'
                                margin='20px 0 60px 0'
                                cursor='pointer'
                                _hover={{
                                    backgroundColor: '#D61C62'
                                }}
                            >
                                <Link
                                    to='/adoption'
                                    style={{
                                        display: 'block',
                                        textTransform: 'uppercase',
                                        color: '#fff',
                                        padding: '10px 50px',
                                        fontWeight: '700',
                                    }}
                                >
                                    see all
                                </Link>
                            </Flex>
                        </Container>
                    </Container>
                </Flex>
            </Container >
        </>
    );
}

export default AdoptionSingle;