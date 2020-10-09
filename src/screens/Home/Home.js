import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import {
  Button,
  ButtonText,
  H1,
  H2,
  InputContainer,
  InputText,
  Label,
  Main,
  Row,
  Text,
} from "../../styles/globalStyles";
import { terminalIconStyle } from "../../styles/styles";

const Home = ({ navigation }) => {
  const handleNavigate = (screen) => {
    console.log("Pressed");
    navigation.navigate(screen);
  };
  return (
    <View>
      <Main>
        <Row>
          <View>
            <Icon style={terminalIconStyle} name="terminal" size={24} />
          </View>
          <H1 color="#ff1b2c">Dev</H1>
          <H1>Camper</H1>
        </Row>
        <H2>The best online resource to learn technology</H2>
        <InputContainer>
          <Label>Email</Label>
          <InputText placeholder="Digite seu email" />
        </InputContainer>
        <InputContainer>
          <Label>Senha</Label>
          <InputText placeholder="Digite sua senha" />
        </InputContainer>
        <Row align="center">
          <Button>
            <ButtonText>Login</ButtonText>
          </Button>
        </Row>
        <Row space="10px">
          <Text>Nao tem uma conta?</Text>
          <Text
            weight="bold"
            decoration="underline"
            color="#ff1b2c"
            onPress={handleNavigate("Register")}>
            {" "}
            Cadastre-se, é grátis!
          </Text>
        </Row>
        <Text>
          se preferir, veja nosso catálogo
          <Text weight="bold" color="#ff1b2c" onPress={handleNavigate("Main")}>
            {" "}
            sem criar uma conta
          </Text>
        </Text>
      </Main>
    </View>
  );
};
export default Home;
