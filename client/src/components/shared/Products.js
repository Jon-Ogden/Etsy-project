import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { Title } from "../styled-components/Fonts"
import ProductCard from "./ProductCard"

export default function Buyers(){
    const {products, sellers} = useContext(AuthContext)

    const getSellerName = (id) => {
        let seller = sellers.filter(c => c.id == id)
        console.log(seller[0].name)
        return seller[0].name
    }

    const renderProducts = () =>{
        return products.map((c) => {
            return <ProductCard
            key={c.id}
            id={c.id}
            sellerName={getSellerName(c.seller_id)}
            price={c.price}
            category={c.category}
            description={c.description} />
        })
    }

    return(
        <div>
            <Title type="t2">Products</Title>
            {renderProducts()}
        </div>
    )
}