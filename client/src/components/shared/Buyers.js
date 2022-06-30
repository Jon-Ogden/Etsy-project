import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { Title } from "../styled-components/Fonts"
import BuyerCard from "./BuyerCard"

export default function Buyers(){
    const {buyers} = useContext(AuthContext)

    const renderBuyers = () =>{
        return buyers.map((c) => {
            return <BuyerCard
            key={c.id}
            id={c.id}
            name={c.name}
            max_price={c.max_price}
            desired_categories={c.desired_categories} />
        })
    }

    return(
        <div>
            <Title type="t2">Buyers</Title>
            {renderBuyers()}
        </div>
    )
}