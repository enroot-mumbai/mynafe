import { useRouter } from 'next/router'
import React from 'react'
import ChatIllustration from '../src/assets/illustrations/ChatIllustration'
import LearningIllustration from '../src/assets/illustrations/LearningIllustration'
import PeriodTrackingIllustratoin from '../src/assets/illustrations/PeriodTrackingIllustration'
import HealthTip from '../src/components/HealthTip/HealthTip'
import styles from './../styles/Home.module.scss'

type Props = {}

export default function Home({ }: Props) {
  const user = {
    name: 'Harsh Vitra',
    mynaID: 'MFHDFO23'
  }

  const progressPercentage = 20;

  const steps = [
    {
      title: "Aapke periods ko track kare",
      cta: "Period track kare",
      icon: <PeriodTrackingIllustratoin />,
      action: "/period-tracking",
      active: true
    },
    {
      title: "Myna k baki logo se baat kare",
      cta: "Message kare",
      icon: <ChatIllustration />,
      action: "/chats",
      active: false
    },
    {
      title: "Apne swastha k bare mai sikhe",
      cta: "Course dekhe",
      icon: <LearningIllustration />,
      action: "/learn",
      active: false
    }
  ]

  const router = useRouter();
  return (
    <div className={styles.pageContainer}>
      <div className={styles.titleContainer}>
        <p>Hi, {user.name}</p>
        <span>Aapka Myna ID: {user.mynaID}</span>
      </div>

      <div className={styles.progressContainer}>
        <p className={styles.subTitle}>Aapka Myna progress:</p>
        <div className={styles.progressBarContainer}>
          <div 
            className={styles.progress} 
            style={{
              width: `${progressPercentage}%`
            }}>
          </div>
        </div>
      </div>

      <div className={styles.stepContainer}>
        <p className={styles.subTitle}>Agla step:</p>

        {steps.map((step, index) => {
          return (
            <div
              onClick={() => {
                router.push(step.action)
              }}
              key={index}
              className={styles.singleStep}
            >
              {step.icon}
              <div className={styles.stepCTA}>
                {step.title}
                <button
                  className={step.active ? 'primaryButton buttonSmall' : 'secondaryButton buttonSmall'}
                >
                  {step.cta}
                </button>
              </div>
            </div>
          )
        })}

      </div>

      <HealthTip/>
    </div>
  );
}
