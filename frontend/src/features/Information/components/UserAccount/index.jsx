import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

UserAccount.propTypes = {

};

function UserAccount(props) {
   return (
      <Box
         marginTop={'-20'}
         marginBottom={'0'}
         flex='1'
         boxShadow={'dark-lg'}

         background='#f7fafc'
         backgroundClip={'border-box'}

         border={'1px solid rgba(0, 0, 0, .05)'}
         borderRadius='0.375rem'

         paddingX={'15px'}
      >
         UserAccount
      </Box>
   );
}

export default UserAccount;