import Divider from '../divider';

import DiceIcon from '../dice';
import {
  AdviceTextStyled,
  BoxCardStyled,
  ButtonDiceGenerate,
  DividerWrapStyled,
  IdTextStyled,
} from './styled';
import { useEffect, useState } from 'react';

function BoxCard() {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState({
    id: 117,
    text: `It is easy to sit up and take notice, what's difficult is getting up and taking action.`,
  });

  const handleClick = () => {
    setLoading(true);
    console.log('click me');
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <BoxCardStyled>
      {loading ? null : (
        <>
          {/* Display Quotes */}
          <IdTextStyled>advice #{quote.id}</IdTextStyled>
          <AdviceTextStyled>&ldquo;{quote.text}&rdquo;</AdviceTextStyled>
          {/* Display Quotes */}
        </>
      )}

      {/* Divider */}
      <DividerWrapStyled>
        <Divider />
      </DividerWrapStyled>
      {/* Divider */}

      {/* Generate Button */}
      <ButtonDiceGenerate onClick={handleClick} disabled={loading}>
        <DiceIcon loading={loading} />
      </ButtonDiceGenerate>
      {/* Generate Button */}
    </BoxCardStyled>
  );
}

export default BoxCard;
