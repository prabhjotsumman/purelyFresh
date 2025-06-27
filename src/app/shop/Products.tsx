import Image from "next/image";

import { useEffect, useState } from "react";
import { fetchProducts } from "../../../lib/api";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await fetchProducts();
            console.log("Client-side products:", data); // visible in browser DevTools
            setProducts(data.data);
        }
        loadData();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Purely Fresh Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.map((item) => {
                    const { id, name, price, description, image } = item;

                    const imageUrl =
                        image?.[0]?.formats?.medium?.url ||
                        image?.[0]?.url ||
                        "";

                    const fullImageUrl= imageUrl.startsWith("/")
                        ? `http://localhost:1337${imageUrl}`
                        : imageUrl;

                    const shortDescription =
                        description?.[1]?.children?.[0]?.text || "No description";

                    return (
                        <div key={id} className="border rounded-lg p-4 shadow">
                            {imageUrl && (
                                <Image
                                    src={fullImageUrl}
                                    alt={name}
                                    width={300}
                                    height={200}
                                    className="rounded mb-4"
                                />
                            )}

                            <h2 className="text-xl font-semibold">{name}</h2>
                            <p className="text-gray-600 mb-2">${price}</p>
                            <p className="text-sm text-gray-700">{shortDescription}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
