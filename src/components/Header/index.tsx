import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  NewTransactionButton,
} from "./styles";

import logoImage from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <img src={logoImage} />
          <h1>CashFlow</h1>
        </LogoContainer>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
