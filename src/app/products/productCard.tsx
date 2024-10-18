import Image from "next/image";

type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    stock: number;
}

type propProduct = {
    product: Product
}


export default function ProductCard({ product }: propProduct) {
    return (
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
        </div>
    )
}