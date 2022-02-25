import Divider from '../divider';

import DiceIcon from '../dice';
import {
  AdviceTextStyled,
  BoxCardStyled,
  ButtonDiceGenerate,
  DividerWrapStyled,
  IdTextStyled,
} from './styled';
import { useState } from 'react';

function BoxCard() {
  const [quote, setQuote] = useState({
    id: 117,
    text: `It is easy to sit up and take notice, what's difficult is getting up and taking action.`,
  });

  return (
    <BoxCardStyled>
      {/* Display Quotes */}
      <IdTextStyled>advice #{quote.id}</IdTextStyled>
      <AdviceTextStyled>&ldquo;{quote.text}&rdquo;</AdviceTextStyled>
      {/* Display Quotes */}

      {/* Divider */}
      <DividerWrapStyled>
        <Divider />
      </DividerWrapStyled>
      {/* Divider */}

      {/* Generate Button */}
      <ButtonDiceGenerate>
        <DiceIcon />
      </ButtonDiceGenerate>
      {/* Generate Button */}
    </BoxCardStyled>
  );
}

export default BoxCard;
