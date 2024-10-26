import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Features.module.css';

const Features: React.FC = () => {
  return (
    <div className='lg:px-[10%] px-[5%] flex flex-col lg:flex-row justify-between items-center bg-[#f9fafb] py-[5%] rounded-[50px]'>
      <div className={styles.product_container}>
        <div className={styles.product}>
          <div>
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ViewQuiltRoundedIcon"><path d="M21 6v4.5c0 .55-.45 1-1 1h-9.67c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1H20c.55 0 1 .45 1 1m-6.33 12v-4.5c0-.55-.45-1-1-1h-3.33c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h3.33c.55 0 1-.45 1-1m1-4.5V18c0 .55.45 1 1 1H20c.55 0 1-.45 1-1v-4.5c0-.55-.45-1-1-1h-3.33c-.56 0-1 .45-1 1M8.33 18V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3.33c.56 0 1-.45 1-1" fill="#9e1f64"></path></svg>
          </div>
          <div className="pt-1">
            <p className={styles.title}>Wallet</p>
            <p className={styles.description}>A USSD-based Crypto wallet management system which enables token transactions.</p>
            <a className="flex items-center text-brand text-sm font-semibold"><span>Learn more</span>
              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronRightRoundedIcon"><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01" fill="#9e1f64"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.product}>
        <div>
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EdgesensorHighRoundedIcon"><path d="M4 7c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1m-3 3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1m22-3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1m-3 3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1m-4-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99M16 17H8V7h8z" fill="#9e1f64"></path></svg>
        </div>
        <div className="pt-1">
          <p className={styles.title}>USSD Integration</p>
          <p className={styles.description}>A local bank & mobile money service integrated platform to enable fast fiat transactions.</p>
            <a className="flex items-center text-brand text-sm font-semibold"><span>Learn more</span>
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronRightRoundedIcon"><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01" fill="#9e1f64"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.product}>
        <div>
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DevicesRoundedIcon"><path d="M4 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11h-.5c-.83 0-1.5.67-1.5 1.5S.67 20 1.5 20H14v-3H4zm19 1h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z" fill="#9e1f64"></path></svg>
        </div>
        <div className="pt-1">
          <p className={styles.title}>Authentication</p>
          <p className={styles.description}>A hashgraph distributed ledger technology with additional PIN-based authentication.</p>
            <a className="flex items-center text-brand text-sm font-semibold"><span>Learn more</span>
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronRightRoundedIcon"><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01" fill="#9e1f64"></path>
            </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='py-[5%] lg:py-0'>
        <Image className='rounded-xl' src="/images/soon.png" alt="onramp" width={600} height={500} />
      </div>
    </div>
  );
};

export default Features;

