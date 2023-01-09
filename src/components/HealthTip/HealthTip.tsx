import React from 'react';
import CircleLeft from '../../assets/icons/CircleLeft';
import CircleRight from '../../assets/icons/CircleRight';
import styles from './HealthTip.module.scss';
type Props = {}

function HealthTip({ }: Props) {
  const tip = {
    id: 2,

  }
  return (
    <div className={styles.healthTipContainer}>
      <p className={styles.tipTitle}>Health Tip #{tip.id}</p>
      <div className="mt-10">
        <p>
          Paryapt aaram lene swasthya ke liye achha hota hai. Hame kam se
          kam 7-9 ghante sona chahiye.
        </p>
      </div>
      <div className={styles.tipActionContainer}>
        <button>
          Random Tip
        </button>
        <div className={styles.tipControls}>
          <CircleLeft color='#000' />
          <CircleRight color='#000' />
        </div>
      </div>
    </div>
  )
}

export default HealthTip