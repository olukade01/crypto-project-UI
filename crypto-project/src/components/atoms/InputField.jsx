import styled from "styled-components";
import { Text } from "./Typography";

const Input = styled.input`
  font-size: 16px;
  margin-top: 8px;
  background-color: ${({ bg }) => bg || "#fff"};
  border: 1px solid grey;
  border-radius: 5px;
  outline: none;
  padding: 10px 0 10px 10px;
`;

const InputField = ({ bg, placeholder, password }) => {
  return (
    // <div>

    // </div>
    <Input bg={bg} placeholder={placeholder} type={password && "password"} />
    //   <Text>{placeholder}</Text>
    //  </Input>
  );
};

export default InputField;
