import { useNavigate } from "react-router-dom";
import Button from "../styled-components/Button";
import { Card } from "../styled-components/CardContainer";
import { Text, Title } from "../styled-components/Fonts";

export default function SellerCard(props){
    const navigate = useNavigate();

    return(
        <Card>
            <Title type="t3">{props.name}</Title>
            <Text>{props.email}</Text>
            <Button>See Products</Button>
            <Button>See Buyers</Button>
            <Button event={()=>{navigate(`/editSeller/${props.id}`)}}>Edit</Button>
        </Card>
    )
}