import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";

import { SummaryCard, SummaryContainer, SummaryContent } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (summaryAccumulator, transaction) => {
      if (transaction.type === "income") {
        summaryAccumulator.income += transaction.price;
        summaryAccumulator.total += transaction.price;
      } else {
        summaryAccumulator.outcome += transaction.price;
        summaryAccumulator.total -= transaction.price;
      }

      return summaryAccumulator;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <SummaryContent>
        <SummaryCard>
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} color="#00b37e" />
          </header>
          <strong>{priceFormatter.format(summary.income)}</strong>
        </SummaryCard>

        <SummaryCard>
          <header>
            <span>Saídas</span>
            <ArrowCircleDown size={32} color="#f75a68" />
          </header>
          <strong>{priceFormatter.format(summary.outcome)}</strong>
        </SummaryCard>

        <SummaryCard variant="green">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>
          <strong>{priceFormatter.format(summary.total)}</strong>
        </SummaryCard>
      </SummaryContent>
    </SummaryContainer>
  );
}
