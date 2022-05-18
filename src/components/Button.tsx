export default function(props) {
    return (
        <a href={props.href} className="pr-1.5 pl-1.5">
            <button className="h-10 bg-red-300 ring-inset ring-red-500 sm:max-w-lg sm:rounded-lg sm:px-8 px-8 justify-center shadow-2xl">
                <p className="font-bold text-white">{props.text}</p>    
            </button>
        </a>
    )
}