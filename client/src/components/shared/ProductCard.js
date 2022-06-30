import Button from "../styled-components/Button";
import { Card } from "../styled-components/CardContainer";
import { Text, Title } from "../styled-components/Fonts";

export default function ProductCard(props){
    return(
        <Card>
            <Title type="t3">Seller: {props.sellerName}</Title>
            <Text>{props.description}</Text>
            <Text>Price:{props.price}</Text>
            <Text>Category:{props.category}</Text>
            <Button>Edit</Button>
        </Card>
    )
}