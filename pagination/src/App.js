import React, { useContext } from 'react'
import Pagination from './components/Pagination'
import Users from './components/users'
import { UsersContext } from './context/UsersContext'

const App = () => {
  const { pages, loading } = useContext(UsersContext)
  return (
    <div>
      <h1>Pagination</h1>
      <p>Page: <b>{pages}</b></p>
      {
        loading ? <p className='loading'>Loading...</p> : (
          <>
            <Users />
            <Pagination />
          </>
        )
      }
    </div>

  )
}

export default App