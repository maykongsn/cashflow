import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  background: ${(props) => props.theme["gray-600"]};
`;

export const SummaryContent = styled.div`
  display: grid;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 0;

  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  background: ${(props) => props.theme["gray-600"]};
`;

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme["gray-400"]};
  border-radius: 1px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-100"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: ${props.theme["green-400"]};
    `}
`;
