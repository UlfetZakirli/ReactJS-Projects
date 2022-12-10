
import { useState } from "react"
import { data } from "./users"
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
const App = () => {
    const [users, setUsers] = useState(data)
    const [sorted, setSorted] = useState({ sorted: 'id', reversed: false })
    const [searchPhrase, setSearchPhrase] = useState("")

    const renderBody = () => {
        return users.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{`${user.first_name} ${user.last_name}`}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
            </tr>
        ))
    }

    const handleSortById = () => {
        setSorted({ sorted: "id", reversed: !sorted.reversed })
        const usersCopy = [...users]
        usersCopy.sort((userA, userB) => {
            if (sorted.reversed) {
                return userA.id - userB.id
            }
            return userB.id - userA.id
        })
        setUsers(usersCopy)
    }

    const handleSortByName = () => {
        setSorted({ sorted: 'name', reversed: !sorted.reversed })
        const usersCopy = [...users]

        //first way
        usersCopy.sort((userA, userB) => {
            const fullNameA = `${userA.first_name} ${userA.last_name}`
            const fullNameB = `${userB.first_name} ${userB.last_name}`

            if (sorted.reversed) {
                return fullNameB.localeCompare(fullNameA)
            }
            return fullNameA.localeCompare(fullNameB)
        })

        //OR

        //second way
        // usersCopy.sort((userA, userB) => {
        //     if (sorted.reversed) {
        //         return (
        //             userA.first_name > userB.first_name ? 1 : -1
        //         )
        //     }
        //     return userA.first_name < userB.first_name ? 1 : -1
        // })

        setUsers(usersCopy)

    }

    const handleArrow = () => {
        if (sorted.reversed) {
            return <FaArrowUp />
        }
        return <FaArrowDown />
    }

    const handleSearch = (e) => {
        const matchedUsers = data.filter((user) => (
            `${user.first_name} ${user.last_name}`.toLowerCase().includes(e.target.value.toLowerCase()) &&
            `${user.first_name} ${user.last_name}`.toLowerCase().startsWith(e.target.value.toLowerCase())
        ))
        setUsers(matchedUsers)
        setSearchPhrase(e.target.value)
    }


    return (
        <div className="App">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchPhrase}
                    onChange={handleSearch}
                />
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th onClick={handleSortById}>
                                <span>Id</span>
                                {
                                    sorted.sorted === "id" ? handleArrow() : null
                                }

                            </th>
                            <th onClick={handleSortByName}>
                                <span>Name</span>
                                {
                                    sorted.sorted === 'name' ? handleArrow() : null
                                }
                            </th>
                            <th><span>Email</span></th>
                            <th><span>Gender</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            renderBody()
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App