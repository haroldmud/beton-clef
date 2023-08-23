export default function Button (props){
    return(
        <button className={`sm:flex flex-col justify-center hover:shadow-xl bg-yellow sm:rounded-lg rounded-xl ${props.style}`} onClick={props.onClick}>
            <a href={props.href} className="text-blue sm:text-base text-base  font-bold sm:p-1 p-2 shadow-sm">{props.children}</a>
          </button>
    )
}
