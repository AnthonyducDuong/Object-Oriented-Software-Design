import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Flex, Spinner } from '@chakra-ui/react';
import IMAGES from '../../../../constants/images';
import ServiceCard from '../ServiceCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../serviceSlice';

ServicesList.propTypes = {
   // services: PropTypes.array,
   // isLoading: PropTypes.bool,
   // loadMore: PropTypes.func,
};

ServicesList.defaultProps = {
   // services: [],
   // isLoading: false,
   // loadMore: null,
};

function ServicesList(props) {
   const { services, pagination, loadMore } = props;
   const { _currentItem, _limit, _page, _totalItem, _totalPage } = pagination;

   const [statusLoadMore, setStatusLoadMore] = useState(false);
   console.log(statusLoadMore);

   const handleLoadMore = (newPage) => {
      if (loadMore) loadMore(newPage);
   }

   return (
      <Box
         paddingY={'90px'}
         paddingX='0'
         bgColor={'#f4f4f4'}
         bgImage={IMAGES.FooterBG}
         bgPosition='center bottom'
         backgroundRepeat={'repeat-x'}
         width='100%'
         marginX='auto'
         minHeight={'500'}
         height='500'
         overflow={'auto'}
         id='infiniteScroll'
      >
         <Container
            maxW={'6xl'}
         >
            <Flex
               wrap={'wrap'}
               alignItems='center'
               justify={'center'}
            >
               {services ?
                  <InfiniteScroll
                     style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                     }}
                     dataLength={services.length}
                     next={() => handleLoadMore(_page + 1)}
                     hasMore={_page + 1 >= _totalPage ? false : true}
                     loader={<><p style={{ width: '100%' }}></p> <Spinner thickness='4px' /></>}
                     scrollableTarget='infiniteScroll'

                     useWindow={false}
                     endMessage={
                        <p style={{ textAlign: "center", width: '100%' }}>
                           <b>Yay! You have seen it all</b>
                        </p>
                     }
                  >
                     {
                        services.map((service, index) => (
                           <ServiceCard
                              key={service.id}
                              service={service}
                           />
                        ))
                     }
                  </InfiniteScroll>
                  :
                  <Spinner thickness='4px' />
               }
            </Flex>
         </Container>
      </Box>
   );
}

export default ServicesList;