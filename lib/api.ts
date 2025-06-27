import axios from "axios";

//const API_URL = "http://localhost:1337"; // or your deployed URL
const API_URL = "https://strong-belief-18dce98a17.strapiapp.com"; // or your deployed URL

interface ImageObj {
    formats: {
        medium: {
            url: string
        }
    }
    url: string;
}

interface DescriptionObj {
    children: {
        text: string
    }[]
}

interface ProductItem {
    id: string;
    image: ImageObj[];
    name: string;
    price: string;
    description: DescriptionObj[];
    in_stock: string;
    quantity_available: string;
    slug: string;
}

export const fetchProducts = async () => {
    const res = await axios.get(`${API_URL}/api/products?populate=*`);
    console.log("res", res)
    const rawData = res.data.data;
    console.log("rawdata", rawData)

    // Flatten each product object
    const normalizedData = rawData.map((item: ProductItem) => {
        const { id, ...attributes } = item;

        const imageUrl =
            attributes.image?.[0]?.formats?.medium?.url ||
            attributes.image?.[0]?.url ||
            "";

        const fullImageUrl = imageUrl.startsWith("/")
            ? `${API_URL}${imageUrl}`
            : imageUrl;

        return {
            id,
            name: attributes?.name,
            price: attributes?.price,
            description: attributes?.description?.[1]?.children?.[0]?.text || "No description",
            in_stock: attributes?.in_stock,
            quantity_available: attributes?.quantity_available,
            slug: attributes?.slug,
            image: fullImageUrl,
        };
    });
    console.log("normalizedData ", normalizedData)
    return normalizedData;
};

export const fetchProductBySlug = async (slug: number) => {
    const res = await axios.get(`${API_URL}/products?filters[slug][$eq]=${slug}&populate=*`);
    return res.data[0]; // assuming slugs are unique
};

// http://localhost:1337/api/products?populate=*    