import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../styled-components/Button";
import { Text, Title } from "../styled-components/Fonts";

export default function EditProduct(){
    const params = useParams()
    const {sellers, products} = useContext(AuthContext)
    const product = products.filter(c => c.id == params.id)[0]
    //const seller = sellers.filter(c => c.id == product.seller_id)[0]
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        console.log('banana')
        if(products.length > 0){
            setPrice(product.price)
            setDescription(product.description)
            setCategory(product.category)
        setLoading(false)}
    }, [products])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    }


    return(
        <div>
        {loading ? <div><Title>loading</Title></div> : (
        <div>
            <form onSubmit={handleSubmit}>
                <Text>Price</Text>
                <input className="input" value={price} onChange={(e) => {setPrice(e.target.value)}} /><br />
                <Text>Product Description</Text>
                <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} 
                rows={4}
                cols={40}/>
                <Text>Category</Text>
                <input className="input" value={category} onChange={(e) => {setCategory(e.target.value)}} /><br />
                <Button event={()=>{handleSubmit()}}>Submit Changes</Button>
            </form>
            <Button>Delete this Product</Button>
        </div>)}
        </div>
    )
}