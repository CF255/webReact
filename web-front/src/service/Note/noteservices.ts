

/* 
export async function getNotes(){

    try {
        
        const response = await fetch(`${API_URL}/notes`,{
            method: "GET",
            headers: {
                "Content-Type": "aaplication/json",
                Authorization: `Bearer ${auth.getAccessToken()}`
            }
        })
        const data = await response.json()
        return data
        
    } catch (error) {
        console.log(error)

    }
} */
 

/* export async function createNote(payload: unknown) {
    try {
        const response =await fetch(`${API_URL}/notes`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
    
} */





/* export async function editNote(id:string, payload: unknown) {
    try {
        const response = await fetch(`${API_URL}/notes/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        return data

    } catch (error) {
        console.error(error)

    }
}
 */

/* export async function deleteNote(id:string) {
    try {
        const response = await fetch(`${API_URL}/notes/${id}`,{
            method: 'DELETE'
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
} */