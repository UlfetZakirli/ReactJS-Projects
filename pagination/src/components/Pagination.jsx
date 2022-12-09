import React, { useContext } from 'react'
import { UsersContext } from './../context/UsersContext';

const Pagination = () => {
    const { pages, totalPages, setPages } = useContext(UsersContext)
    const pagination = [...Array(totalPages).keys()].map((num) => num + 1)

    const handlePaginate = (num) => {
        setPages(num)
    }

    return pagination.map((page) => (
        <button className={`${pages === page ? 'active' : undefined} button`} onClick={() => handlePaginate(page)} key={page}>{page}</button>
    ))

}

export default Pagination