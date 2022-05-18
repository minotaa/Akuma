export default function() {
    return (
        <>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <h1 className="text-xl font-bold">
                    ❌ 404
                    </h1>
                    <h2 className="text-lg">Page not found. This means that the web page could not be found on our server.</h2>
                    <br />
                    <hr />
                    <br />
                    <p>
                        <a href="/" className="font-bold text-sky-500 hover:text-sky-600">Wanna go home? &rarr;</a>
                    </p>
                </div>
            </div>
        </>
    )
}