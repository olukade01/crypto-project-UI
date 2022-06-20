import styled from "styled-components";
import { Text } from "../atoms/Typography";
import { listData, modalInputData } from "../../data/ModalData";
import ButtonEl from "../atoms/Button";
import InputField from "../atoms/InputField";
const Wrapper = styled.div`
  width: 494px;
  border-radius: 10px;
  background-color: #f5f5dc;
  padding: 18px 20px 20px 30px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
`;
const IpsumBox = styled.div`
  background-color: #fff;
  color: #505050;
  opacity: 0.6;
  padding: 8px 0 18px 18px;
  margin-bottom: 28px;
`;
const List = styled.div`
  display: flex;
  margin-bottom: 11px;
  margin-top: 12px;
`;
const Icon = styled.div`
  margin-right: 10px;
`;
export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 19px;
`;
export const Terms = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const Checkbox = styled.div`
  margin-right: 5px;
`;
export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HomeModal = () => {
  return (
    <Wrapper>
      <Header>
        <Text size="32px" color="#000">
          List Token
        </Text>
      </Header>
      <IpsumBox>
        <Text color="#505050" size="30px">
          Lorem Ipsum is simply
        </Text>
        {listData.map((data) => (
          <List>
            <Icon>{data.icon}</Icon>
            {data.text}
          </List>
        ))}
      </IpsumBox>
      <Centered>
        <Text color="#D47A09" mb="12px">
          Token icon (square):
        </Text>
        <ButtonEl padding="12px 25px" children="Choose an image" />
      </Centered>
      {modalInputData.map((data) => (
        <Input>
          {data.label}{" "}
          <InputField bg="rgba(0, 0, 0, 0.05)" placeholder={data.placeholder} />
        </Input>
      ))}
      <Terms>
        <Checkbox>
          <input
            // style={{ background: "transparent", padding: "30px" }}
            type="checkbox"
          />
        </Checkbox>
        <Text>
          I accept the <Text color="#D47A09">Terms of Service.</Text>
        </Text>
      </Terms>
      <Total>
        <Text>Total: 100 BUSD</Text>
        <ButtonEl padding="12px 22px" children="Continue" />
      </Total>
    </Wrapper>
  );
};

export default HomeModal;
