import Image from "next/image";
import { AddButton } from "../cart/button";
import { data } from "./products";



export function ProductItem() {
    const { products } = data
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
                    <div><AddButton /></div>
                </div>
            ))}

        </div>
    )
}
