import { useDispatch, useSelector } from "react-redux"
import { getprData } from "../Redux/App/action"
export default function ProductPage(){
    const {log}=console
    
    const data=useSelector((store)=>store.Appreducer)

    console.log(data)


    return <>
    
     
    </>
}