import { useContext, useState } from 'react'
import { UsersContext } from '../context/UsersContext'

const Pagination = () => {
    const { totalPages, setPages } = useContext(UsersContext)
    const [activeTag, setActiveTag] = useState(1)

    const paginations = [...Array(totalPages).keys()].map(num => num + 1)

    const handleBtnClick = (num) => {
        setPages(num)
        setActiveTag(num)
    }

    return (
        <div> {
            paginations.map((page) => (
                <button className={`${activeTag === page ? 'active' : undefined} button`} onClick={() => handleBtnClick(page)} key={page}>{page}</button>
            ))}
        </div>
    )
}

export default Pagination