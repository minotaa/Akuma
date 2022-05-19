import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function(props: { href: string; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal; }) {
    return (
        <a href={props.href} className="pr-1.5 pl-1.5">
            <button className="h-10 bg-red-300 hover:bg-red-500 ring-inset ring-red-500 rounded-lg px-8 justify-center shadow-2xl">
                <p className="font-bold text-white">{props.text}</p>    
            </button>
        </a>
    )
}