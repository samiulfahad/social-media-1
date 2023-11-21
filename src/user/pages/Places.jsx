import React from 'react'
import { useParams } from 'react-router-dom'

const Places = () => {
    const { userId } = useParams()
    return (
        <div>userId:  {userId}</div>
    )
}

export default Places