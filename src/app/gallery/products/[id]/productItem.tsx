'use client'
import Image from "next/image";
import { data } from "./products";
import Link from "next/link";


// NOTE: to show the list of the products
export function ProductItem() {

    const products = data.products
    // // NOTE: OR it can be defined ` const {products} = data`

    const handleAddtoCart = (id: number, name: string) => {

        // Because `localStorage` can only store string, using JSON to change its type
        // These 'cartItemId' and 'cartItemName' are VERY important, DO NOT use the same anme
        localStorage.setItem('cartItemId', JSON.stringify(id));
        localStorage.setItem('cartItemName', JSON.stringify(name));
    }


    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
            {products.map((product) => (
                <div key={product.id}>
                    <Image
                        src={product.image}
                        width={500}
                        height={500}
                        priority={true}
                        alt={product.name}
                    />
                    <p>{product.name}</p>
                    <p>$ {product.price}</p>
                    <div>
                        <Link href="/cart">
                            <button onClick={() =>
                                handleAddtoCart(product.id, product.name)}
                                className="btn btn-primary">Add to Cart</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
