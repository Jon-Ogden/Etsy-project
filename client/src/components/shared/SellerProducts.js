import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Title } from "../styled-components/Fonts";
import ProductCard from "./ProductCard";

export default function SellerProducts(){
    const {products} = useContext(AuthContext)
    const params = useParams();
    const [seller, setSeller] = useState({})
    const sellerProducts = products.filter(c => c.seller_id == params.id)

    const getSeller = async() => {
        try{
            let res = await axios.get(`/api/sellers/${params.id}`)
            setSeller(res.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getSeller()
    },[])

    const renderProducts = () =>{
        return sellerProducts.map((c) => {
            return <ProductCard
            key={c.id}
            id={c.id}
            price={c.price}
            category={c.category}
            description={c.description} />
        })
    }

    return (
        <div>
            <Title>Products of {seller.name}</Title>
            {renderProducts()}
        </div>
    )
}