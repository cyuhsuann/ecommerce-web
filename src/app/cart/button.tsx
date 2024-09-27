import Link from "next/link";


export function AddButton() {
    return (
        <div>
            <Link
                href="/cart">
                <button className="rounded-md border p-2 hover:bg-gray-100">Cart</button>
            </Link>
        </div>
    )
}