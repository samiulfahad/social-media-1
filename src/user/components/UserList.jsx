import React from "react"
import UserItem from "./UserItem"

export const UserList = ({ users }) => {
  let content = ""
  if (users.length === 0) {
    content = (
      <div className="flex justify-center items-center w-screen min-h-screen text-lg font-bold">No user found</div>
    )
  } else {
    content = users.map((user) => (
      <UserItem key={user.id} id={user.id} name={user.name} image={user.image} placeCount={user.places} />
    ))
  }
  return <> {content} </>
}
