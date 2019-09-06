import React from 'react';

import './index.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <p className='footer__main-text footer__sub-text'>
                * iPhone XR pricing is after trade‑in of iPhone 7 Plus in good condition. Monthly pricing requires a
                24‑month installment loan with a 0% APR, and iPhone activation. Applicable sales tax and fees due at
                time of purchase. Last payment may be less depending on remaining balance. Additional trade‑in values
                require purchase of a new iPhone, subject to availability and limits. You must be at least 18 years old.
                In‑store trade‑in requires presentation of a valid, government‑issued photo ID (local law may require
                saving this information). Additional terms from Apple or Apple’s trade‑in partners may apply. Full terms
                apply.
        </p>
        <span className='footer__retailer footer__sub-text'>
                More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.
        </span>
        <span className='footer__copyright footer__sub-text'>
                Copyright © 2019 Apple Inc. All rights reserved.
        </span>
      </div>

    </footer>
  )
};