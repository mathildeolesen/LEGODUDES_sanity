import { client } from "../client";

export async function fetchAllProduct() {
    const data = await client.fetch('*[_type == "products"]')
    return data
}