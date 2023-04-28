import * as Dialog from "@radix-ui/react-dialog";

import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  NewTransactionButton,
} from "./styles";

import logoImage from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <img src={logoImage} />
          <h1>CashFlow</h1>
        </LogoContainer>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
