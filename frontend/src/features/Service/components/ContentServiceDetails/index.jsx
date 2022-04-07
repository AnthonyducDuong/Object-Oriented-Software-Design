import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ModalBox from '../../../../components/ModalBox';
import { useNavigate } from 'react-router-dom';

ContentServiceDetails.propTypes = {
   service: PropTypes.object
};

ContentServiceDetails.defaultProps = {
   service: {},
};

function ContentServiceDetails(props) {
   const { service } = props;
   console.log(">>> Check service: ", service);
   const navigate = useNavigate();
   const [login, setLogin] = useState(true);
   const [confirm, setConfirm] = useState(false);

   const { isLoggedIn } = useSelector((state) => state.auth);

   const handleRegister = () => {
      if (!isLoggedIn) {
         setLogin(false);
      }
      else {
         setConfirm(true);
      }
   };

   const handleCloseModalLogIn = () => {
      setLogin(!login);
   };

   const handleCloseModalConfirm = () => {
      setConfirm(false);
   };

   return (
      <>
         {
            <ModalBox
               isOpenModal={!login}
               modalTitle='Warning'
               modalContent='You have not logged in before'
               buttonActionContent='GO TO LOGIN'
               onActionClick={() => navigate('/login')}
               onSetCloseModal={handleCloseModalLogIn}
            />
         }
         {
            <ModalBox
               isOpenModal={confirm}
               modalTitle='Information'
               modalContent='Do you really want to sign up for this service?'
               buttonActionContent='CONFIRM'
               onActionClick={() => navigate('/services')}
               onSetCloseModal={handleCloseModalConfirm}
            />
         }
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

                     onClick={() => handleRegister()}
                  >
                     registration
                  </Button>
               </Box>
            </Flex>
         </Box>
      </>
   );
}

export default ContentServiceDetails;