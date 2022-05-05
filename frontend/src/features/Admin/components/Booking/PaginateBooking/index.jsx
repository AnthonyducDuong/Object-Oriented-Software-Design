import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import './PaginateBooking.scss'
import { Container, Flex, Button } from '@chakra-ui/react';
import TableBooking from '../TableBooking';
import bookServiceAPI from '../../../../../api/bookServiceApi';

PaginatPet.propTypes = {
    itemsPerPage: PropTypes.number,
};
const items = [];

function PaginatPet(props) {
    const { itemsPerPage, isReRender } = props
    const [page, setPage] = useState(0)
    const [isRender, setIsRender] = useState(false)
    const [serialNum, setSerialNum] = useState(0)
    const hanldeRender = () => {
        setIsRender(!isRender)
    }
    for (let i = 0; i < page; i++) {
        items[i] = i + 1
    }

    const [currentItems, setCurrentItems] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected)
        setSerialNum((event.selected) * itemsPerPage)
    };
    useEffect(() => {
        const getBookings = async () => {
            const params = {
                page: currentPage,
                size: itemsPerPage,
            }

            const response = await bookServiceAPI.getAllBooking(params)
            const { data, pagination } = response.data
            setPage(pagination._totalPage)
            setCurrentItems(data.bookingServices)
        }
        getBookings()
    }, [currentPage, isRender, itemsPerPage, isReRender])
    return (
        <Container
            maxWidth='100%'
            width='auto'
            padding='0 16px'
            marginTop='48px'
        >
            <TableBooking currentItems={currentItems} serialNum={serialNum} hanldeRender={hanldeRender} />

            <Flex
                alignItems='center'
                justifyContent='end'
            >
                <ReactPaginate
                    className='paginate'
                    breakLabel="..."
                    nextLabel=">"
                    forcePage={0}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={page}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    disabledClassName='paginate__disabled'
                    activeClassName='paginate__active'
                />
            </Flex>
        </Container>
    );
}

export default PaginatPet;