import React from 'react';
import { useDispatch } from 'react-redux';
import { clearSelectedToken } from '../../redux/actions/tokenAction';
import { formatNumber } from '../../utils/funcs';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { svg2img } from '../../utils/randomAvatar';
import './style.css';

const TokenInfo = ({selectedToken}) => {
  const dispatch = useDispatch();

  if (!selectedToken) {
    return (
      <div className="token-info-empty">
        Select a token to view details
      </div>
    );
  }

  const handleClose = () => {
    dispatch(clearSelectedToken());
  };

  return (
    <div className="token-info-panel">
      <div className="token-info-header">
        <h2 className="font-header token-info-title">
          {selectedToken.symbol}
        </h2>
        <IconButton onClick={handleClose} className="token-info-close-button">
          <Close />
        </IconButton>
      </div>

      <div className="token-info-logo-section">
        <img
          src={
            selectedToken.logo
              ? `https://assets.thetatoken.org/tokens/${selectedToken.logo}`
              : svg2img(selectedToken)
          }
          className={`token-info-logo ${!selectedToken.logo ? 'token-row-logo-round' : ''}`}
        />
        <h3 className="font-header token-info-name">
          {selectedToken.name}
        </h3>
      </div>

      <div className="token-info-grid">
        <InfoRow label="Price" value={`${selectedToken.derivedUSD}`} />
        <InfoRow label="Market Cap" value={`${formatNumber(selectedToken.tradeVolumeUSD * 1)}`} />
        <InfoRow label="Liquidity" value={`${formatNumber(selectedToken.totalLiquidityUSD * 1)}`} />
        <InfoRow label="Volume 24h" value={`${formatNumber(selectedToken.volume24HrsUSD * 1)}`} />
        <InfoRow label="Volume" value={`${formatNumber(selectedToken.tradeVolume * 1)}`} />
        <InfoRow 
          label="Change 24h" 
          value={`+${((selectedToken.volume24HrsETH * 1) / (selectedToken.tradeVolumeETH * 1) * 100).toFixed(2)}%`}
          isPositive={true}
        />
      </div>

      <div className="token-info-section-divider"></div>

      <div className="token-info-contract">
        <div className="token-info-contract-label">
          CONTRACT ADDRESS
        </div>
        <div className="token-info-contract-address">
          {selectedToken.id}
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value, isPositive }) => (
  <div className="token-info-row">
    <span className="token-info-label">{label}</span>
    <span className={`font-header token-info-value ${isPositive ? 'token-info-value-positive' : ''}`}>
      {value}
    </span>
  </div>
);

export default TokenInfo;