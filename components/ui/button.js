export default function Button (props){
    return(
        <div className={`sm:flex flex-col justify-center ${props.style}`}>
            <a href="#" className="text-blue sm:text-base text-base font-bold bg-yellow h-fit sm:p-1 p-2 sm:rounded-lg rounded-xl shadow-sm">{props.children}</a>
          </div>
    )
}
