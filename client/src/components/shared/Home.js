import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../styled-components/Button";
import { Card } from "../styled-components/CardContainer";
import { Title, Text } from "../styled-components/Fonts";

const Home = () => {
    const navigate = useNavigate()

    return(
        <div>
            <Title>Fake Etsy</Title>
            <Title type="t3">Buy, sell, or browse the random nonsense!</Title>
            <Button event={() => navigate("/sellers")}>See our wonderful sellers!</Button>
            <Button event={() => navigate("/products")}>Take a look at our Wacky products!</Button>
            <Button event={() => navigate("/buyers")}>View our devoted buyers</Button>
        </div>
    )
}

export default Home;