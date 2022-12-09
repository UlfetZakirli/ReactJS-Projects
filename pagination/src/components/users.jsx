import { useContext } from 'react'
import { UsersContext } from './../context/UsersContext';
import User from './User';
import { USER_PER_PAGE } from './../utils/constant';

const Users = () => {
    const { users, pages } = useContext(UsersContext)
    const startIndex = (pages - 1) * USER_PER_PAGE
    const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE)


    return  selectedUsers.map((user) => (
            <User user={user} key={user.login.uuid} />
        ))

    

}

export default Users