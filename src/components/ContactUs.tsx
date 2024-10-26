import React from 'react';
import styles from '@/styles/ContactUs.module.css';

const ContactUs: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.ctaContainer}>
          <BorderBeam direction="leftToRight" />
          <div className={styles.ctaInner}>
            <div className={styles.ctaInnerContent}>
              <h3 className={styles.title}>Let&apos;s build the future of payments</h3>
              <p className={styles.subtitle}>Book a demo with one of our experts</p>
            </div>
            <a href="/contact-us" className={styles.ctaButton}>
              <div>Contact us</div>
            </a>
            <VerticalLines />
          </div>
          <BorderBeam direction="rightToLeft" bottom />
          <CornersBeam />
          <ShapeAnimation />
        </div>
      </div>
    </section>
  );
};

const BorderBeam: React.FC<{ bottom?: boolean; direction: 'leftToRight' | 'rightToLeft' }> = ({ bottom, direction }) => (
  <div className={`${styles.lineHorizontalWrap} ${bottom ? styles.bottom : styles.top} ${styles[direction]}`}>
    <div className={`${styles.horizontalLine} ${styles.hLeft}`}></div>
    <div className={`${styles.horizontalLine} ${styles.hRight}`}></div>
    <div className={`${styles.horizontalLine} ${styles.hExtLeft}`}></div>
    <div className={`${styles.horizontalLine} ${styles.hExtRight}`}></div>
    <div className={`${styles.dot} ${styles.isLeft}`}></div>
    <div className={`${styles.dot} ${styles.isRight}`}></div>
    <div className={`${styles.dot} ${styles.isCenter}`}></div>
  </div>
);

const VerticalLines: React.FC = () => (
  <>
    <div className={`${styles.verticalLine} ${styles.isLeft}`}>
      <div className={styles.ctaLineMovingLeft}></div>
      <div className={`${styles.ctaLineMovingLeft} ${styles.blur}`}></div>
    </div>
    <div className={`${styles.verticalLine} ${styles.isRight}`}>
      <div className={styles.ctaLineMovingRight}></div>
      <div className={`${styles.ctaLineMovingRight} ${styles.blur}`}></div>
    </div>
  </>
);

const CornersBeam: React.FC = () => (
  <div className={styles.lineExtremityWrap}>
    <div className={`${styles.horizontalLine} ${styles.topLeft}`}></div>
    <div className={`${styles.horizontalLine} ${styles.topRight}`}></div>
    <div className={`${styles.horizontalLine} ${styles.topCenter}`}></div>
    <div className={`${styles.horizontalLine} ${styles.bottomLeft}`}></div>
    <div className={`${styles.horizontalLine} ${styles.bottomRight}`}></div>
    <div className={`${styles.horizontalLine} ${styles.bottomCenter}`}></div>
  </div>
);

const ShapeAnimation: React.FC = () => (
  <div className={styles.ctaShape}>
    <div className={styles.ctaCircle}></div>
    <div className={styles.ctaShapeInner}>
      <div className={styles.ctaShapeItem}>
        <div className={styles.onrampDotWrap}>
        </div>
        <div className={styles.ctaShapeItemAnimation}></div>
      </div>
    </div>
  </div>
);

export default ContactUs;
