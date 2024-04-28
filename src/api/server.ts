//TODO add Auth0 access token

//const base_url = 'https://coffee-ojjf.onrender.com/api'
const base_url = 'http://127.0.0.1:5000/api'
const token = 'bearer 8fae4124a57c04b3da8f6e745305083f781627a4f0062b73'

export const server_calls = {
    tester: async () => {
        const response = await fetch(`${base_url}/tester`, {
            method: 'GET',
            headers: {

            }
            
        });
        
        if(!response.ok){
            throw new Error('Could not get tester')
        }
    },
    get: async (endpoint: string) => {
        console.log(endpoint)
        console.log(token)
        const response = await fetch(`${base_url}/${endpoint}`,{
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        });

        if(!response.ok){
            throw new Error(`Could not retreive user portfolio`)
        }

        return await response.json();
    },
    getPublic: async (endpoint: string) => {
        console.log(endpoint)
        console.log(token)
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
    addBeans: async (user_id: string) => {
        const response = await fetch(`${base_url}/${user_id}`,{
            method: 'POST',
            headers: {
                'x-access-token': token
            }
        });
    },
    
    delete_coffee: async (user_id: string, coffee_id: string) => {
        // deletes a single coffee from a single portfolio
        const response = await fetch(`${base_url}/${user_id}/${coffee_id}`,{
            method: 'DELETE',
            headers: {
                'x-access-token': token
            }
        });
    },
}