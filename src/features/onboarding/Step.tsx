import { useRouter } from 'next/router';
import React from 'react'
import ChatIllustration from '../../assets/illustrations/ChatIllustration';
import LearningIllustration from '../../assets/illustrations/LearningIllustration';
import PeriodTrackingIllustratoin from '../../assets/illustrations/PeriodTrackingIllustration';
import styles from './Step.module.scss'

type Props = {}

function Step({ }: Props) {

    const [step, setStep] = React.useState(0);

    const router = useRouter();

    const steps = [
        {
            title: 'Awareness videos',
            icon: <LearningIllustration height='250' />,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            title: 'Period Tracker',
            icon: <PeriodTrackingIllustratoin height='250' />,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            title: 'Private chat',
            icon: <ChatIllustration height='250' />,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
    ]

    return (
        <div className={styles.pageContainer}>
            <div className={styles.stepDetailsContainer}>
                <p className={styles.stepTitle}>{steps[step].title}</p>

                {steps[step].icon}
                <p className={styles.stepDescription}>{steps[step].description}</p>

            </div>
            <div className={styles.stepActionsContainer}>
                <div className={styles.stepActions}>
                    {step > 0 && (
                        <button onClick={()=>{setStep(step-1)}} className='secondaryButton'>
                            Previous
                        </button>
                    )}
                   
                    {step < 3 && (
                        <button onClick={()=>{step === 2 ? router.push('/') : setStep(step+1)}} className='primaryButton'>
                            Next
                        </button>
                    )}
                   
                </div>
                <p onClick={()=>{
                    router.push('/')
                }} className='inlineButton'>Skip karke aage jaye</p>
            </div>
        </div>
    )
}

export default Step