import { useState, useEffect } from "react";
import {User} from "../../types/types"
import { API_URL } from "../../auth/constants";
import { useAuth } from "../../auth/AuthProvider";



export const useUsers = () =>{

    const [users, setUsers] = useState<User[] | []>([])
    const auth = useAuth()

    let fetchUsers = () =>{
        fetch(`${API_URL}/perfil/users`,{
            headers: {
              "Content-Type": "aplication/json",
              Authorization: `Bearer ${auth.getAccessToken()}`,
            }
            }).then(res => res.json())
            .then((data: {users: User[]}) => setUsers(data.users))
    }

    useEffect(() =>{
      fetchUsers()
    }, [])

    return {
        users,
        refetchUsers: fetchUsers
    }
}