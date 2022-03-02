import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Container, Flex, Image, Link, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import {
    List,
    ListItem,
} from '@chakra-ui/react'
import IMAGES from '../../../constants/images';

TopNav.propTypes = {

};

function TopNav(props) {
    const unFocus = useRef()
    const handleUnFocus = () => {
        console.log(unFocus.current.classList.remove('css-f4h6uy'));
    }

    return (
        <Container
            margin='0'
            maxWidth='100%'
            padding='0'
            height='106px'
            padding='8px 0'
        >
            <Flex
                justifyContent='space-between'
                alignItems='center'
                flexDirection='row'
                height='60px'
                margin={'0 190px'}
            >
                <Link onClick={handleUnFocus} ref={unFocus} href='#'>
                    <Image
                        maxHeight='60px'
                        src={IMAGES.Logo}
                        alt='Dan Abramov'
                    />
                </Link>
                <Flex>
                    <List display='flex'>
                        <ListItem padding={'0 16px'}>
                            <Link href='#'>Home</Link>
                        </ListItem>
                        <ListItem>
                            <Container>
                                <Menu isLazy>
                                    <MenuButton>Services <Icon as={TriangleDownIcon} w={2} h={2} /></MenuButton>
                                    <MenuList backgroundColor={'#018ae0'} >
                                        <MenuItem><Link>Service Style 1</Link></MenuItem>
                                        <MenuItem><Link>Service Style 2</Link></MenuItem>
                                        <MenuItem><Link>Service Style 3</Link></MenuItem>
                                    </MenuList>
                                </Menu>
                            </Container>
                        </ListItem>
                        <ListItem>
                            <Container>
                                <Menu isLazy>
                                    <MenuButton>About <Icon as={TriangleDownIcon} w={2} h={2} /></MenuButton>
                                    <MenuList backgroundColor={'#018ae0'} >
                                        <MenuItem><Link>Service Style 1</Link></MenuItem>
                                        <MenuItem><Link>Service Style 2</Link></MenuItem>
                                        <MenuItem><Link>Service Style 3</Link></MenuItem>
                                    </MenuList>
                                </Menu>
                            </Container>
                        </ListItem>
                        <ListItem>
                            <Container>
                                <Menu isLazy>
                                    <MenuButton>Adopt <Icon as={TriangleDownIcon} w={2} h={2} /></MenuButton>
                                    <MenuList backgroundColor={'#018ae0'} >
                                        <MenuItem><Link>Service Style 1</Link></MenuItem>
                                        <MenuItem><Link>Service Style 2</Link></MenuItem>
                                        <MenuItem><Link>Service Style 3</Link></MenuItem>
                                    </MenuList>
                                </Menu>
                            </Container>
                        </ListItem>
                        <ListItem>
                            <Container>
                                <Menu isLazy>
                                    <MenuButton>Gallery <Icon as={TriangleDownIcon} w={2} h={2} /></MenuButton>
                                    <MenuList backgroundColor={'#018ae0'} >
                                        <MenuItem><Link>Service Style 1</Link></MenuItem>
                                        <MenuItem><Link>Service Style 2</Link></MenuItem>
                                        <MenuItem><Link>Service Style 3</Link></MenuItem>
                                    </MenuList>
                                </Menu>
                            </Container>
                        </ListItem>
                        <ListItem>
                            <Container>
                                <Menu isLazy>
                                    <MenuButton>Contact <Icon as={TriangleDownIcon} w={2} h={2} /></MenuButton>
                                    <MenuList backgroundColor={'#018ae0'} >
                                        <MenuItem><Link>Service Style 1</Link></MenuItem>
                                        <MenuItem><Link>Service Style 2</Link></MenuItem>
                                        <MenuItem><Link>Service Style 3</Link></MenuItem>
                                    </MenuList>
                                </Menu>
                            </Container>
                        </ListItem>
                        <ListItem>
                            <Container>
                                <Menu isLazy>
                                    <MenuButton>Orther pages <Icon as={TriangleDownIcon} w={2} h={2} /></MenuButton>
                                    <MenuList backgroundColor={'#018ae0'} >
                                        <MenuItem><Link>Service Style 1</Link></MenuItem>
                                        <MenuItem><Link>Service Style 2</Link></MenuItem>
                                        <MenuItem><Link>Service Style 3</Link></MenuItem>
                                    </MenuList>
                                </Menu>
                            </Container>
                        </ListItem>
                    </List>
                </Flex>
            </Flex>
        </Container>
    );
}

export default TopNav;