'use client';

import { data } from "../products/[id]/products";
import { CartSheet } from "../products/cartSheet";
import ProductItem from "../products/productItem";
import { Provider, useAtom } from 'jotai'
import { Product } from "../products/type";

export default function Page() {
    const [products] = useAtom(data.products);

    return (
        <main>
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    Pottery <span className="text-[hsl(280,100%,70%)]">Gallery</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
                {/* NOTE: To show the each product */}
                {products.map((product: Product) => {
                    return (
                        <div key={product.id}>
                            <ProductItem product={product} />
                            <CartSheet product={product} />
                        </div>
                    )
                })}
            </div>
        </main>
    )
}