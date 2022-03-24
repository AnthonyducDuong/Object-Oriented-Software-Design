import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';
import Banner from '../../../../components/Banner';
import DisplayText from '../../components/DisplayText';
import UserInformation from '../../components/UserInformation';
import UserAccount from '../../components/UserAccount';

UserProfile.propTypes = {

};

function UserProfile(props) {
   return (
      <>
         <Banner
            heading={'Profile'}
         />
         <Box>
            <Container
               maxW={'7xl'}
               zIndex='100'

               padding='12'
               marginX={'auto'}

               backgroundColor='#f7f6fbb0'
            >
               <DisplayText />
            </Container>

            <Container
               maxW={'7xl'}
               padding='12'
               backgroundColor='#dffeeca8'
            >
               <Flex>
                  <UserInformation />
                  <Spacer maxW='30px' />
                  <UserAccount />
               </Flex>
            </Container>
         </Box>
      </>
   );
}

export default UserProfile;