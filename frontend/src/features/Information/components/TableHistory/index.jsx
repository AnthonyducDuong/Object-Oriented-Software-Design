import React from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TablePanel from '../TablePanel';

TableHistory.propTypes = {

};

function TableHistory(props) {
   return (
      <Box
         marginTop={'-20'}
         marginBottom={'0'}
         flex='2'
         boxShadow={'dark-lg'}

         background='#f7fafc'
         backgroundClip={'border-box'}

         border={'1px solid rgba(0, 0, 0, .05)'}
         borderRadius='0.375rem'
      >
         <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
               <Tab _selected={{ color: '#222', bg: 'blackAlpha.100', border: '1px solid #7f8c8d', borderBottom: '0px' }}>PETS</Tab>
               <Tab _selected={{ color: '#222', bg: 'blackAlpha.100', border: '1px solid #7f8c8d', borderBottom: '0px' }} >SERVICES</Tab>
            </TabList>
            <TabPanels>
               <TabPanel>
                  <TablePanel tableCaption={'History payment for pets'} />
               </TabPanel>
               <TabPanel>
                  <TablePanel tableCaption={'History payment for services'} />
               </TabPanel>
            </TabPanels>
         </Tabs>
      </Box>
   );
}

export default TableHistory;