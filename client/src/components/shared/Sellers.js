import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Button from "../styled-components/Button"
import { Card } from "../styled-components/CardContainer"
import { Text, Title } from "../styled-components/Fonts"
import SellerCard from "./SellerCard"

export default function Sellers(){
    const {sellers, newSeller} = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        //e.preventDefault();
        let newInfo = {name:name, email:email}
        newSeller(newInfo);
    }

    const renderSellers = () =>{
        return sellers.map((c) => {
            return <SellerCard
            key={c.id}
            id={c.id}
            name={c.name}
            email={c.email} />
        })
    }

    return(
        <div>
            <form>
            <Title>Add a new Seller!</Title>
            <Text>Name</Text>
                <input value={name} onChange={(e) => {setName(e.target.value)}} />
                <Text>Email</Text>
                <input className="input" value={email} onChange={(e) => {setEmail(e.target.value)}} /><br />
                <Button event={()=>{handleSubmit()}}>Submit</Button>
            </form>
            <Title type="t2">Sellers</Title>
            {renderSellers()}
        </div>
    )
}