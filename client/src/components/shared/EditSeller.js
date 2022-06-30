import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../styled-components/Button";
import { Text, Title } from "../styled-components/Fonts";

export default function EditSeller(){
    const params = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const {sellers, getSellers, updateSeller} = useContext(AuthContext)
    const seller = sellers.filter(c => c.id == params.id)[0]
    const [name, setName] = useState(seller ? seller.name :'blank')
    const [email, setEmail] = useState(seller ? seller.email : 'blank email')

    useEffect(()=>{
        console.log('banana')
        if(sellers.length > 0){
            setName(seller.name)
            setEmail(seller.email)
        setLoading(false)}
    }, [sellers])

    const handleSubmit = (e) => {
        //e.preventDefault();
        let newInfo = {id:params.id, name:name, email:email}
        updateSeller(newInfo);
        navigate('/sellers')
    };

    const remove = () => {
        axios.delete(`/api/sellers/${params.id}`)
        getSellers()
        navigate('/sellers')
    }

    return(
        <div>
        {loading ? <div><Title>loading</Title></div> : (
        <div>
            <form onSubmit={handleSubmit}>
                <Text>Name</Text>
                <input value={name} onChange={(e) => {setName(e.target.value)}} />
                <Text>Email</Text>
                <input className="input" value={email} onChange={(e) => {setEmail(e.target.value)}} /><br />
                <Button event={()=>{handleSubmit()}}>Submit Changes</Button>
            </form>
            <Button event={()=>{remove()}}>Delete this Seller</Button>
        </div>)}
        </div>
    )
}