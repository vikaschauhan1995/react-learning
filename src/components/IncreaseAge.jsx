import React, { useContext } from 'react'
import { UserContext } from "../context/UserContext";

const IncreaseAge = () => {
    const { user, setUser } = useContext(UserContext);
  return (
    <div>
        <p>User: {user.name} {user.age}</p>
        <input type="number" value={user.age} onChange={(e) => setUser(prev => { return {...prev, age: e.target.value } })} />
    </div>
  )
}

export default IncreaseAge