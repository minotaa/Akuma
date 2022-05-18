import Button from "../components/Button";
import Header from "../components/Header";

export default function() {
    return (
        <>
            <Header/>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <h1 className="text-xl font-bold">
                    👺 Akuma
                    </h1>
                    <h2 className="text-lg">A classy comic/manga reader application.</h2>
                    <br />
                    <hr />
                    <br />
                    <p>
                        <a href="https://discord.gg/rfC6MUzU" className="font-bold text-sky-500 hover:text-sky-600">We're not done yet! Check out the discord server for more updates &rarr;</a>
                    </p>
                </div>
                <br/>
                <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <h1 className="text-lg font-bold">
                        🗳️ Register
                    </h1>
                    <h2 className="text-m">At the moment these buttons do not work, they are merely to test out components.</h2>
                    <br/>
                    <hr/>
                    <br/>
                    <Button href="/login" text="Log in"/>
                    <Button href="/login" text="Sign up"/>
                </div>
            </div>
        </>
    )
}