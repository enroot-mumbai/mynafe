import { useRouter } from "next/router";
import React from "react";
import styles from './../../styles/Profile.module.scss'

type Props = {};

function UserProfile({ }: Props) {
  const user = {
    name: 'Harsh Vitra',
    id: 'DZIFDS2324',
    email: 'abc@gmail.com',
    phone: '9594702015',
    address: 'Thane, Maharashtra, India',
    dob: '24th May 1996'
  }

  const router = useRouter();
  return (
    <>
      <div className="pageContainerTop">
        <div className="pageContent p-20">
          <h2 className="pageTitle">Aapka Profile</h2>

          <div className={styles.profileDetail}>
            <p className={styles.profileTitle}>Naam</p>
            <p className={styles.profileValue}>{user.name}</p>
          </div>

          <div className={styles.profileDetail}>
            <p className={styles.profileTitle}>Myna ID</p>
            <p className={styles.profileValue}>{user.id}</p>
          </div>

          <div className={styles.profileDetail}>
            <p className={styles.profileTitle}>Email ID</p>
            <p className={styles.profileValue}>{user.email}</p>
          </div>

          <div className={styles.profileDetail}>
            <p className={styles.profileTitle}>Phone</p>
            <p className={styles.profileValue}>{user.phone}</p>
          </div>

          <div className={styles.profileDetail}>
            <p className={styles.profileTitle}>Address</p>
            <p className={styles.profileValue}>{user.address}</p>
          </div>

          <div className={styles.profileDetail}>
            <p className={styles.profileTitle}>Janam Din</p>
            <p className={styles.profileValue}>{user.dob}</p>
          </div>

          <button onClick={() => {
            router.push('/edit-profile')
          }} className="secondaryButton">Edit Profile</button>

          <span className="divider" />


          <div className="mt-20">
            <button className="primaryButton">Join Myna Champions</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
