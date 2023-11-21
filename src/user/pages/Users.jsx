
import React from 'react'
import { UserList } from '../components/UserList'

const Users = () => {
  const USERS = [
    { id: 'u1', name: "user 1", places: 30, image: "https://res.cloudinary.com/dzkmd9oki/image/upload/v1692305328/cjoiunwvisfnnxaqaxam.png" },
    { id: 'u2', name: "user 2", places: 30, image: "https://res.cloudinary.com/dzkmd9oki/image/upload/v1692208092/wexet1edq9ucloyf6yu8.png" }
  ]
  return (
    <>
      <UserList users={USERS} />
    </>
  )
}

export default Users