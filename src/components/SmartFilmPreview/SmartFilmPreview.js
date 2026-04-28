import React, { useState } from 'react';
import {
  SmartPreviewWrap,
  SmartPreviewImageBox,
  SmartPreviewImage,
  SmartPreviewShade,
  SmartPreviewControl,
  SmartPreviewDot,
} from './SmartFilmPreview.styled';

const SmartFilmPreview = ({ src, alt, variant = 'card', loading = 'lazy' }) => {
  const [isPowered, setIsPowered] = useState(false);
  const label = isPowered ? 'Napięcie włączone' : 'Napięcie wyłączone';

  return (
    <SmartPreviewWrap $variant={variant}>
      <SmartPreviewImageBox $variant={variant}>
        <SmartPreviewImage src={src} alt={alt} loading={loading} decoding="async" />
        <SmartPreviewShade $isPowered={isPowered} />
      </SmartPreviewImageBox>

      <SmartPreviewControl
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setIsPowered((value) => !value);
        }}
        aria-pressed={isPowered}
        aria-label={`${label}. Kliknij, aby przełączyć efekt folii LCD.`}
      >
        <SmartPreviewDot $isPowered={isPowered} />
        <span>{label}</span>
      </SmartPreviewControl>
    </SmartPreviewWrap>
  );
};

export default SmartFilmPreview;
