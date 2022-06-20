import styled, { css } from "styled-components";
import { footerLinks } from "../../data/FooterData";

const Wrapper = styled.div`
  background: linear-gradient(180deg, #010101 0%, #2f2b27 100%);
  /* height: 500px; */
`;
const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
`;
const Link = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 150px;

  ${({ bg }) =>
    bg &&
    css`
      background-color: ${bg};
    `}
`;

const Footer = () => {
  return (
    <Wrapper>
      <Links>
        {footerLinks.map((link) => {
          const Svg = link.icon;
          return (
            <Link bg={link.color}>
              <Svg />
            </Link>
          );
        })}
      </Links>
    </Wrapper>
  );
};

export default Footer;
