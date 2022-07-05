import { useNavigate } from "react-router-dom";
import Button from "../styled-components/Button";
import { Card } from "../styled-components/CardContainer";
import { Text, Title } from "../styled-components/Fonts";

export default function ProductCard(props){
    const navigate = useNavigate()

    return(
        <Card>
            {props.sellerName ? <Title type="t3">Seller: {props.sellerName}</Title>: <></>}
            <Text>{props.description}</Text>
            <Text>Price:{props.price}</Text>
            <Text>Category:{props.category}</Text>
            <Button event={()=>{navigate(`/editProduct/${props.id}`)}}>Edit</Button>
        </Card>
    )
}