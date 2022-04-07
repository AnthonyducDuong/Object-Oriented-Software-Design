import React from 'react';
import PropTypes from 'prop-types';
import { Link, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

TablePanel.propTypes = {

};

function TablePanel(props) {
   const { tableCaption } = props;
   return (
      <TableContainer>
         <Table variant='striped' colorScheme='whatsapp'>
            <TableCaption>{tableCaption}</TableCaption>
            <Thead>
               <Tr>
                  <Th>Serial number</Th>
                  <Th>Date-Time</Th>
                  <Th isNumeric>Amount</Th>
                  <Th>Detail</Th>
               </Tr>
            </Thead>
            <Tbody>
               <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                  <Td><Link>Detail</Link></Td>
               </Tr>
               <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                  <Td><Link>Detail</Link></Td>
               </Tr>
               <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                  <Td><Link>Detail</Link></Td>
               </Tr>
            </Tbody>
            <Tfoot>
               <Tr>
                  <Th>Serial number</Th>
                  <Th>Date-Time</Th>
                  <Th isNumeric>Amount</Th>
                  <Th>Detail</Th>
               </Tr>
            </Tfoot>
         </Table>
      </TableContainer>
   );
}

export default TablePanel;