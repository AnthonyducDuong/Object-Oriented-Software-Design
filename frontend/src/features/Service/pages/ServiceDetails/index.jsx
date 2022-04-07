import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Flex, useToast } from '@chakra-ui/react';
import Banner from '../../../../components/Banner';
import { Outlet, useParams } from 'react-router-dom';
import ContentServiceDetails from '../../components/ContentServiceDetails';
import ServicesSidebar from '../../components/ServicesSidebar';
import serviceApi from '../../../../api/serviceApi';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../serviceSlice';

ServiceDetails.propTypes = {

};

function ServiceDetails(props) {
   const { id: idService } = useParams();
   console.log(">>> Check param servicedetails page: ", idService);

   const toast = useToast();
   const dispatch = useDispatch();

   const { services, isLoading } = useSelector((state) => state.service);

   const initialServiceState = {
      id: '',
      name: '',
      description: '',
      price: 0,
      slot: 0,
      status: false,
   };
   const [currentService, setCurrentService] = useState(initialServiceState);

   const fetchData = async (idService) => {
      try {
         const response = await serviceApi.getInfoService(idService);
         console.log(">>> Check response fetchData/ServiceDetail: ", response);

         if (response.data.success) {
            setCurrentService(response.data.data.serviceInfo);
            console.log(">>> Check state: ", currentService);
         }
      } catch (error) {
         toast({
            title: 'Something wrong🥺🥺...',
            description: error.response.data.message,
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top'
         })
      }
   }

   useEffect(() => {
      const fetchData = async () => {
         const params = {
            page: 0,
            size: 5,
         };

         dispatch(getServices(params))
            .unwrap()
            .then((response) => {
               //
            })
            .catch(() => { });
      };
      fetchData();
   }, [dispatch]);

   useEffect(() => {
      fetchData(idService);
   }, [idService]);
   const arr = [{
      head: 'Services',
      link: 'Services'
   },
   {
      head: 'Services single page',
      link: ''
   }]
   const arrJson = JSON.stringify(arr)

   return (
      <>
         <Banner arrHeading={arrJson} headingPage={'Services single page'} />
         <Container
            maxW={'6xl'}
            paddingY='90px'
         >
            <Flex>
               <ContentServiceDetails service={currentService} />
               <ServicesSidebar services={services} />
            </Flex>
         </Container>
      </>
   );
}

export default ServiceDetails;