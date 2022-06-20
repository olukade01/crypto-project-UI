import styled, { css } from "styled-components";

export const Text = styled.span`
  font-size: ${({ size }) => size || "16px"};
  font-family: ${({ font }) => font || "sans-serif"};
  color: ${({ color }) => color || "#777E90"};
  font-weight: ${({ weight }) => weight || 400};
  text-align: ${({ align }) => align || "left"};
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `}
  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `}
  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `}
  ${({ mh }) =>
    mh &&
    css`
      margin-horizontal: ${mh};
    `}
  ${({ mv }) =>
    mv &&
    css`
      margin-vertical: ${mv};
    `}
  ${({ pt }) =>
    pt &&
    css`
      padding-top: ${pt};
    `}
  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${pb};
    `}
  ${({ pr }) =>
    pr &&
    css`
      padding-right: ${pr};
    `}
  ${({ pl }) =>
    pl &&
    css`
      padding-left: ${pl};
    `}
  ${({ ph }) =>
    ph &&
    css`
      padding-horizontal: ${ph};
    `}
  ${({ pv }) =>
    pv &&
    css`
      padding-vertical: ${pv};
    `}
`;
