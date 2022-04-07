import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

TableDetail.propTypes = {

};

function TableDetail(props) {
   return (
      <Box
         h={'100%'}
         marginTop={'-20'}
         marginBottom={'0'}
         flex='1'
         boxShadow={'dark-lg'}

         background='#fff'
         backgroundClip={'border-box'}

         // border={'1px solid rgba(0, 0, 0, .05)'}
         borderRadius='0.375rem'

         paddingBottom='1.5rem'
      >
         table detail
      </Box>
   );
}

export default TableDetail;