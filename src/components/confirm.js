
import "../imput.css";
import "./confirm.css";
export function Confirm (){
   return(
    <>
    <div className = " p-10 border border-red-400 text-center bg-purple-200">
        <input type= "text" className="boder border-black rounded-md py-1 px-1 shadow-" placeholder="Nhập vào đây "></input>
        <button className = "inline-block py-1 px-6 m-5 text-white bg-blue-800 rounded-lg lg:hover:bg-red-400 transition-all motion-safe:hover:scale-110">Confirm</button>
    </div>
    </>
   )
}