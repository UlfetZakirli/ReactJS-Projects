import React, { useContext } from 'react'
import { UsersContext } from '../context/UsersContext'
import { USER_PER_PAGE } from '../utils/constants';
import User from './User';

const Users = () => {
    const { users, pages } = useContext(UsersContext)
    const startIndex = (pages - 1) * USER_PER_PAGE
    const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE)

    return selectedUsers.map((user) => (
        <User key={user.login.uuid} user={user} />
    ))
}

export default Users