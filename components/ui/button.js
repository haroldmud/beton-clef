export default function Button (props){
    return(
        <button className={`sm:flex flex-col justify-center hover:shadow-xl ${props.style}`} onClick={props.onClick}>
            <a href={props.href} className="text-blue sm:text-base text-base font-bold bg-yellow h-fit sm:p-1 p-2 sm:rounded-lg rounded-xl shadow-sm">{props.children}</a>
          </button>
    )
}
