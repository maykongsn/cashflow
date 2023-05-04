import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const TitleContainer = styled.div`
  height: 10vh;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme["gray-600"]};
`;

export const Title = styled(Dialog.Title)`
  color: ${(props) => props.theme.white};
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;
  border-radius: 1px;
  background: ${(props) => props.theme["gray-600"]};

  form {
    padding: 2.5rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    background: ${(props) => props.theme.white};

    input {
      border-radius: 1px;
      border: 0;
      background: transparent;
      border: 1px solid ${(props) => props.theme["gray-100"]};
      color: ${(props) => props.theme["gray-500"]};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 56px;
      margin-top: 1.5rem;
      border: 0;
      border-radius: 1px;
      background: ${(props) => props.theme["green-100"]};

      color: ${(props) => props.theme.white};
      font-weight: bold;

      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme["green-400"]};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["gray-100"]};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;

  background: ${(props) => props.theme["gray-100"]};
  border: 0;
  border-radius: 1px;
  color: ${(props) => props.theme["gray-500"]};
  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-400"]};
  }

  &[data-state="unchecked"]:hover {
    background: ${(props) => props.theme["gray-200"]};
    transition: background-color 0.2s;
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-400"]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;
