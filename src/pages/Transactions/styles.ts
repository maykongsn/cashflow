import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: auto;
  color: #000;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${(props) => props.theme["gray-100"]};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  td {
    border-bottom: 1px solid ${(props) => props.theme["gray-100"]};
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme.white};
  }

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-400"]
      : props.theme["red-400"]};
`;
