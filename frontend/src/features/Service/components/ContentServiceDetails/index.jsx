import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

ContentServiceDetails.propTypes = {
   service: PropTypes.object
};

ContentServiceDetails.defaultProps = {
   service: {},
};

function ContentServiceDetails(props) {
   const { service } = props;
   console.log(">>> Check service: ", service);

   return (
      <Box
         flex={'0 0 75%'}
         maxW='75%'
         paddingRight={'30px'}
      >
         <Heading
            as={'h2'}
            fontSize='2.5em'
            fontWeight={'600'}
            color='#222'
            lineHeight={'1.2'}
            marginBottom='8px'
         >
            {service.name}
         </Heading>
         <Text
            as={'h6'}
            color='#8a8a8a'
            fontSize={'1.2em'}
            fontWeight='350'
            marginBottom={'20px'}
            lineHeight='1.4em'
         >
            The service is provided by Aslan Team.
         </Text>
         <Text
            fontSize={'16px'}
            lineHeight='1.6'
            fontWeight={'400'}
         >
            {service.description}
         </Text>
         <Flex
            marginTop={'20px'}
         >
            <Box
               flex={'0 0 50%'}
               maxW='50%'
               paddingX='15px'
            >
               <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            </Box>

            <Box
               flex={'0 0 50%'}
               maxW='50%'
               paddingX='15px'
            >
               <Text
                  fontSize={'20px'}
                  padding={'5px 0px'}
                  lineHeight='26px'
                  marginBottom={'5px'}
               >
                  🔥Slot(s): {service.slot}
               </Text>
               <Text
                  fontSize={'20px'}
                  padding={'5px 0px'}
                  lineHeight='26px'
                  marginBottom={'5px'}
               >
                  🤑 Price: {service.price}
               </Text>
               <Text
                  fontSize={'20px'}
                  padding={'5px 0px'}
                  lineHeight='26px'
                  marginBottom={'5px'}
               >
                  💗 Status: {service.status ? 'Available' : 'Unavailable'}
               </Text>
               <Button
                  bg={'#018AE0'}
                  marginTop={'45px'}
                  size='lg'
                  textTransform={'uppercase'}
                  color='white'
                  whiteSpace={'normal'}
                  letterSpacing='0.2px'
                  borderRadius={'25px'}
                  fontWeight='bold'

                  _hover={{
                     bg: '#1446A0'
                  }}
               >
                  registration
               </Button>
            </Box>
         </Flex>
      </Box>
   );
}

export default ContentServiceDetails;