import { useEffect, useState } from 'react';
import axios from 'axios';

import Divider from '../divider';

import DiceIcon from '../dice';
import {
  AdviceTextStyled,
  BoxCardStyled,
  ButtonDiceGenerate,
  DividerWrapStyled,
  IdTextStyled,
} from './styled';

function BoxCard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState({
    id: 117,
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });

  const handleClick = () => {
    setLoading(true);
    setError(false);

    // Make Request
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        // handle success
        const { slip } = response.data;
        setQuote(slip);
        setLoading(false);
      })
      .catch(() => {
        // handle error
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <BoxCardStyled>
      {/* Display Quotes */}
      <IdTextStyled loading={loading.toString()}>
        advice #{error ? '##' : quote.id}
      </IdTextStyled>
      <AdviceTextStyled loading={loading.toString()} error={error.toString()}>
        {error ? (
          'Looks like something went wrong. Please try again in a moment!'
        ) : (
          <>&ldquo;{quote.advice}&rdquo;</>
        )}
      </AdviceTextStyled>
      {/* Display Quotes */}

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
