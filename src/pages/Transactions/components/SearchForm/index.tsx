import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer, SearchFormContent } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormContent>
        <input type="text" placeholder="Busque por transações" />
        <button type="submit">
          <MagnifyingGlass size={20} />
          Pesquisar
        </button>
      </SearchFormContent>
    </SearchFormContainer>
  );
}
