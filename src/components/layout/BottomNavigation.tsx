import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LearnIcon from '../../assets/icons/LearnIcon';
import TeleHealthIcon from '../../assets/icons/TeleHealthIcon';
import SehatIcon from '../../assets/icons/SehatIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import { useRouter } from 'next/router';
import HomeIcon from '../../assets/icons/HomeIcon';

export default function SimpleBottomNavigation({defaultValue=0}:any) {
  const [value, setValue] = React.useState(defaultValue);

  const router = useRouter()

  return (
    <div className='bottomNavigation'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={()=>router.push('/')} label="Home" icon={<HomeIcon color={value === 0 ? '#ED60CE' : '#C5C5C7'} />} />
        <BottomNavigationAction onClick={()=>router.push('/learn')} label="Learn" icon={<LearnIcon color={value === 1 ? '#ED60CE' : '#C5C5C7'} />} />
        <BottomNavigationAction onClick={()=>router.push('/period-tracking')} label="Sehat" icon={<SehatIcon color={value === 2 ? '#ED60CE' : '#C5C5C7'} />} />
        <BottomNavigationAction onClick={()=>router.push('/telehealth')} label="Telehealth" icon={<TeleHealthIcon color={value === 3 ? '#ED60CE' : '#C5C5C7'} />} />
        <BottomNavigationAction onClick={()=>router.push('/profile')} label="Profile" icon={<ProfileIcon color={value === 4 ? '#ED60CE' : '#C5C5C7'} />} />
      </BottomNavigation>
    </div>
  );
}