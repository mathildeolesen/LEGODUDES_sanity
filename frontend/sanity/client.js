import {createClient} from '@sanity/client'

export const client = createClient( {
    projectId: 'peklz78e',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-07'
})


//
// sk0PNUFHgQyb1bPz5joCsNN01LmzjBSnbt97qR6b6wTgNWlmbtyGggtOf6JEkYyeiZF7u3CxS8xVkXZuwWVCN1h3PhbANVLTs8ks5U1bBP9x3zBcanAndrf7Hv24JctWEolqFopmXzCKUemz0q2ryCFvThKunN23UTSNWfGZLhioRpLFMRuh

export const writeClient = createClient({
    projectId: 'peklz78e',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2022-03-07',
    token: "sk0PNUFHgQyb1bPz5joCsNN01LmzjBSnbt97qR6b6wTgNWlmbtyGggtOf6JEkYyeiZF7u3CxS8xVkXZuwWVCN1h3PhbANVLTs8ks5U1bBP9x3zBcanAndrf7Hv24JctWEolqFopmXzCKUemz0q2ryCFvThKunN23UTSNWfGZLhioRpLFMRuh"
})
