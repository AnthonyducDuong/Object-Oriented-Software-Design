import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import AdoptContent from '../AdoptContent';
import './Paginate.scss'
import { Container, Flex, Button } from '@chakra-ui/react';
import petAPI from '../../../../api/petApi';
import AdoptCart from '../../../../components/AdoptCart';

PaginateAdopt.propTypes = {
    itemsPerPage: PropTypes.number,

};
const items = [];

function PaginateAdopt(props) {
    const { itemsPerPage } = props
    const [page, setPage] = useState(0)
    console.log(itemsPerPage);

    for (let i = 0; i < page; i++) {
        items[i] = i + 1
    }
    // console.log(items);

    const [currentItems, setCurrentItems] = useState([]);
    // const [pageCount, setPageCount] = useState(0);
    // // Here we use item offsets; we could also use page offsets
    // // following the API or data you're working with.
    // const [itemOffset, setItemOffset] = useState(0);

    const [currentPage, setCurrentPage] = useState(0);

    // useEffect(() => {
    //     // Fetch items from another resources.
    //     const endOffset = itemOffset + itemsPerPage;
    //     // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    //     setCurrentItems(items.slice(itemOffset, endOffset));
    //     setPageCount(Math.ceil(items.length / itemsPerPage));
    // }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        // const newOffset = (event.selected * itemsPerPage) % items.length;
        // // console.log(
        // //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // // );
        setCurrentPage(event.selected)
        // setItemOffset(newOffset);
    };
    console.log(`current page: ${currentPage}`);

    useEffect(() => {
        const getPet = async () => {
            const params = {
                page: currentPage,
                size: itemsPerPage,
            }

            const response = await petAPI.getAll(params)
            const { data, pagination } = response.data
            console.log(data);
            console.log(pagination);
            setPage(pagination._totalPage)
            setCurrentItems(data.pets)
        }
        getPet()
    }, [currentPage])
    console.log(currentItems);

    return (
        <Container
            maxWidth='100%'
            width='auto'
            padding='0 16px'
            marginTop='48px'
        >
            <AdoptContent currentItems={currentItems} />

            <Flex
                alignItems='center'
                justifyContent='center'
            >
                <ReactPaginate
                    className='paginate'
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={page}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    disabledClassName='paginate__disabled'
                    activeClassName='paginate__active'
                />
            </Flex>
        </Container>
    );
}

export default PaginateAdopt;