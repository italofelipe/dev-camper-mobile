import styled from "styled-components/native";

const primaryButtonColor = "#FFF";
const primaryButtonBackground = "#ff1b2c";
const secondaryButtonColor = "#ff1b2c";
const secondaryButtonBackground = "#FFF";

export const SafeArea = styled.SafeAreaView`
  height: 100%;
  background: #f4f4f4;
`;
export const Main = styled.View`
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
`;
export const Row = styled.View`
  margin: ${(props) => props.space || "0"}
  flex-flow: row;
`;

export const H1 = styled.Text`
  font-family: "SF UI Text Regular";
  font-weight: bold;
  font-size: 36px;
  color: ${(props) => (props.color ? props.color : "#333")};
`;

export const H2 = styled.Text`
  font-family: "SF UI Text Regular";
  font-size: 20px;
  font-weight: bold;
  margin: 10px 15px;
`;

export const Text = styled.Text`
  margin: ${(props) => props.margin || 0}
  font-family: "SF UI Text Regular";
  font-size: 16px;
  color: ${(props) => props.color || "#333"}
  font-weight: ${(props) => props.weight || "normal"}
  text-decoration: ${(props) => props.decoration || "none"}
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${primaryButtonColor};
  text-align: center;
`;
export const Label = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;
export const Button = styled.TouchableHighlight`
  background: ${primaryButtonBackground};
  width: 200px;
  padding: 10px 0;
  border-radius: 5px;
  box-shadow: 4px 10px 15px #ff5481;
`;

export const InputContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  flex-flow: column;
  padding: 15px;
`;

export const InputText = styled.TextInput`
  height: 50px;
  width: 100%;
  border: 1px solid ${primaryButtonBackground};
  border-radius: 3px;
  margin-top: 10px;
`;
