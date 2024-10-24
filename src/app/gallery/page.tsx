'use client';

import { ProductItem } from "./products/[id]/productItem";

export default function Page() {
    return (
        <main>
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    Pottery <span className="text-[hsl(280,100%,70%)]">Gallery</span>
                </h1>
            </div>
            <ProductItem />
        </main>
    )
}