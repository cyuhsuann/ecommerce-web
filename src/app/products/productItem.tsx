import Image from "next/image";
import { type propProduct } from "./type";

export default function ProductItem({ product }: propProduct) {
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
  );
}
