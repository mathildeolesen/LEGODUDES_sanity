import { client } from "../client";

export async function fetchAllProduct() {
    const data = await client.fetch(`*[_type == "products"] {
        _id,
        productname,
        price,
        stock,
        "catname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url
    }`)
    return data
}