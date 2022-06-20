import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: 7px;
  /* flex-grow: 1; */
  /* width: 100%; */
  ${({ bw }) =>
    bw &&
    css`
      border-width: 1px;
      border-color: red;
    `}
  padding: ${({ padding }) => padding || ""};
  width: ${({ width }) => width || ""};
  /* ${({ width }) =>
    width &&
    css`
      width: ${width};
    `} */
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  /* color: #dc9217; */
  border: none;
  cursor: pointer;
  /* padding: 5px 0; */
  background-image: ${({ bg }) =>
    bg || "linear-gradient(90deg, #D47A09 0%, #EBBF33 100%)"};
  ${({ bgc }) =>
    bgc &&
    css`
      background-color: ${bgc};
    `};
`;
const ButtonEl = ({
  bw,
  bg,
  children,
  color,
  bgc,
  width,
  padding,
  // disabled,
  // onPress = () => {},
  // loading,
}) => {
  return (
    <Button
      bg={bg}
      bgc={bgc}
      bw={bw}
      color={color}
      width={width}
      // loading={loading}
      // disabled={disabled}
      // onPress={() => onPress()}
      padding={padding}
    >
      {children}
    </Button>
  );
};

export default ButtonEl;
