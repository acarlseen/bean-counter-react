//const base_url = 'https://coffee-ojjf.onrender.com/api'
const base_url = 'http://127.0.0.1:5000/api'
const token = localStorage.getItem('accessToken')


export const server_calls = {
    tester: async () => {
        const JWT = localStorage.getItem('accessToken')
        console.log(`TOKEN SENT: ${JWT}`);

        
        const response = await fetch(`${base_url}/`, {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${JWT}`
            }
            
        });
        
        if(!response.ok){
            throw new Error('Could not get tester')
        }
        return await response.json()
    },
    get: async (endpoint: string) => {
        //const JWT = localStorage.getItem('accessToken')
        console.log(endpoint)
        console.log(token)
        const response = await fetch(`${base_url}/${endpoint}`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error(`Could not retreive user portfolio`)
        }

        return await response.json();
    },
    getPublic: async (endpoint: string) => {
        console.log(endpoint)
        const response = await fetch(`${base_url}/${endpoint}`,{
            method: 'GET',
            headers: {

            }
        });

        if(!response.ok){
            throw new Error(`Could not retreive bean profile`)
        }

        return await response.json();
    },
    create: async (data: any, endpoint: string) => {
        console.log(endpoint)
        console.log(token)
        const response = await fetch(`${base_url}/${endpoint}`,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/JSON',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to create new Bean entry')
        }

        return await response.json();
    },
update: async (data: any, endpoint: string) => {
    console.log(`${base_url}'${endpoint}`)
    console.log(`Data: ${JSON.stringify(data)}`);
    
        const response = await fetch(`${base_url}/${endpoint}`,{
            method: 'PUT',
            headers: {
                'Content-type' : 'application/JSON',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to create new Bean entry')
        }

        return await response.json();
    },
    
    delete_coffee: async (endpoint: string) => {
        // deletes a single coffee from a single portfolio
        const response = await fetch(`${base_url}/${endpoint}`,{
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                
            }
        });

        if (!response.ok){
            throw new Error('Could not delete entry')
        }

        return await response.json()
    },
}

