// import { Products } from "../gallery/photo-layout";

export function cartItem() {
    const decreamentQuantity = () => {

    }
    const increamentQuantity = () => {

    }
    return (
        <div>
            <p>name</p>
            <p>quantity</p>
            <p>subPrice</p>
            <div>
                <button onClick={decreamentQuantity}>-</button>
                <button onClick={increamentQuantity}>+</button>
            </div>
        </div>

    )
}

export default async function Page() {
    return (
        <main>
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    Cart
                </h1>
                <div>
                    <p>11111111</p>
                    <p>11111111</p>
                    <p>11111111</p>
                    <p>11111111</p>
                    <p>11111111</p>

                </div>
            </div>
        </main>
    )
}