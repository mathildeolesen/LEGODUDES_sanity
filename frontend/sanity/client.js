import {createClient} from '@sanity/client'

export const client = createClient( {
    projectId: 'peklz78e',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-07'
})