import { client } from "../client";

export async function fetchAllCategories() {
    const data = await client.fetch(`*[_type == "categories"]{
        _id, 
        categorytitle,
        "catslug": categoryurl.current
    }`)
    return data
}

export async function fetchCategoryBySlug(slug) {
    const data = await client.fetch(`*[_type == "categories" && categoryurl.current == $slug] {
        _id,
        categorytitle,
        "catProducts": *[_type == "products" && references(^._id)] {
            _id,
            productname,
            "slug": producturl.current,
            price,
            stock,
            "catname": category->categorytitle,
            "catslug": category->categoryurl.current,
            "image": productimage.asset->url
        }
    }`, {slug})
    return data
}

/*
    Prøver å lage GROQ som kan hente produkter som tilhører en kategori
    category._ref tilhører produkter og _id tilhører kategorier (kategoriID = _id) 
    // *[_type == "products" && category._ref == _id]
*/