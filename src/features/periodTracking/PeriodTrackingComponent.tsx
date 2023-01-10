import React from 'react'
import CircleLeft from '../../assets/icons/CircleLeft';
import CircleRight from '../../assets/icons/CircleRight';
import InfoIcon from '../../assets/icons/InfoIcon';
import PeriodTrackingIllustratoin from '../../assets/illustrations/PeriodTrackingIllustration';
import styles from './PeriodTracking.module.scss'
import PeriodTrackingForm from './PeriodTrackingForm';

type Props = {
    periods: any;
}

function PeriodTrackingComponent({ periods }: Props) {

    return (
        <div>
            {periods && periods.length > 0 ?
                <div>
                    <div className={styles.nextPeriodDetails}>
                        <p>Agla period</p>
                        <div className={styles.periodDaysLabel}>
                            12 days left
                        </div>
                    </div>
                    <p className={styles.nextPeriodDate}>Agle period ki apekshit taarikh 21st January hai.</p>
                    <PeriodTrackingForm />
                    <div className={styles.periodInfoCard}>
                        <InfoIcon />
                        <p>Kabhi kabhi periods 2-3 din pehle ya 2-3 din late bhi aa skte hai.</p>
                    </div>

                    <div className={styles.previousPeriodCard}>
                        <p className={styles.previousPeriodTitle}>Pichla period</p>
                        <p className={styles.previousPeriodDescription}>
                            23rd December se 26th December tak.
                        </p>
                        <div className={styles.tipControls}>
                            <CircleLeft color='#000' />
                            <CircleRight color='#000' />
                        </div>
                    </div>

                </div>
                : <div className={styles.noPeriodTrackingComponent}>
                    <p className={styles.noPeriodTrackingTitle}>Pichle baar period kab aaya tha?</p>
                    <PeriodTrackingIllustratoin height='140' />
                    <PeriodTrackingForm />
                </div>
            }
        </div>
    )
}

export default PeriodTrackingComponent