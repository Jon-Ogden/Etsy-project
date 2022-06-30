import Button from "../styled-components/Button";
import { Card } from "../styled-components/CardContainer";
import { Text, Title } from "../styled-components/Fonts";

export default function BuyerCard(props){
    return(
        <Card>
            <Title type="t3">{props.name}</Title>
            <Text>Max price:{props.max_price}</Text>
            <Text>Interested categories:{props.desired_categories}</Text>
            <Button>Edit</Button>
        </Card>
    )
}