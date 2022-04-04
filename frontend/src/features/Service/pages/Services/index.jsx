import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import Advertisement from '../../components/Advertisement';
import { Box, Spinner } from '@chakra-ui/react';
import ContactAction from '../../components/ContactAction';
import Question from '../../components/Question';
import ServicesList from '../../components/ServicesList';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../serviceSlice';

Services.propTypes = {

};

function Services(props) {
   window.scrollTo(0, 0)
   const dispatch = useDispatch();

   const { services, isLoading } = useSelector((state) => state.service);
   const [pagination, setPagination] = useState({
      _currentItem: 0,
      _limit: 0,
      _page: 0,
      _totalItem: 0,
      _totalPage: 0,
   });

   const [filters, setFilters] = useState({
      _page: 0,
      _size: 3,
   });

   useEffect(() => {
      const fetchData = async () => {
         const params = {
            page: filters._page,
            size: filters._size,
         };

         dispatch(getServices(params))
            .unwrap()
            .then((response) => {
               setPagination(response.pagination);
            })
            .catch(() => { });
      };
      fetchData();
   }, [dispatch, filters]);

   const loadMore = (newPage) => {
      setFilters({
         ...filters,
         _page: newPage,
      });
   }

   return (
      <>
         <Banner
            arrHeading={['Services']}
         />
         <Box
            paddingY={'20'}
         >
            <Advertisement />
            <ServicesList services={services} pagination={pagination} loadMore={loadMore} />
            <ContactAction />
            <Question />
         </Box>
         {/* <Outlet /> */}
      </>
   );
}

export default Services;