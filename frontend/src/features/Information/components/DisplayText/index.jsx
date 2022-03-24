import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Heading, Text } from '@chakra-ui/react';

DisplayText.propTypes = {

};

function DisplayText(props) {
   return (
      <Flex
         align={'center'}
      >
         <Flex
            marginX={'-15px'}
            wrap='wrap'
            direction={'column'}
         >
            <Heading as='h1' size='lg' isTruncated
               marginBottom={'1.5rem'}
            >
               Hello [Username]
            </Heading>
            <Text fontSize={'lg'}>
               This is your profile page. You can see the progress you've made with <br /> your work and manage your projects or assigned tasks
            </Text>
         </Flex>
      </Flex>
   );
}

export default DisplayText;