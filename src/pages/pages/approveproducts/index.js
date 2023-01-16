import TableStickyHeader from "src/views/tables/TableStickyHeader"
import { useEffect, useState } from "react"
import { ProductApprovalList } from "src/API/ProductApproval"
export default function ApproveProduct(){
    const [getproductlist,setProductList] = useState([])
    useEffect(() =>{
		ProductApprovalList().then(response => {
            console.log(response,"RESPONSEDATA")
            setProductList(response.data.data)
        })
	},[])
    console.log(getproductlist,"getproductlist")
    return(
        <div>
        <TableStickyHeader data={getproductlist}/>
        </div>
    )
}