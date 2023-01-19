
import{Box,Image,Text} from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getprData } from "../Redux/App/action"

export default function SingleProductCard(){

    const dispatch=useDispatch()
      
    useEffect(()=>{

        dispatch(getprData())

    },[])
    const data=useSelector((store)=>store.Appreducer.data)
    
    console.log(data.id)

    return <>
    <Box>
        <Box >
           <Image src={data.thumbnailUrl} />
           <Text>hello</Text>
        </Box>
    </Box>
    </>
}