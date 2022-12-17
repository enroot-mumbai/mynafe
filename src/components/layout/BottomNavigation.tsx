import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LearnIcon from '../../assets/icons/LearnIcon';
import TeleHealthIcon from '../../assets/icons/TeleHealthIcon';
import ChatIcon from '../../assets/icons/ChatIcon';
import SehatIcon from '../../assets/icons/SehatIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';

export default function SimpleBottomNavigation({defaultValue=0}:any) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div className='bottomNavigation'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Learn" icon={<LearnIcon color={value === 0 ? '#ED60CE' : '#C5C5C7'} />} />
        <BottomNavigationAction label="Telehealth" icon={<TeleHealthIcon color={value === 1 ? '#ED60CE' : '#C5C5C7'} />} />
        <BottomNavigationAction label="Chat" icon={<ChatIcon color={value === 2 ? '#ED60CE' : '#C5C5C7'} />} />
        <BottomNavigationAction label="Sehat" icon={<SehatIcon color={value === 3 ? '#ED60CE' : '#C5C5C7'} />} />
        <BottomNavigationAction label="Profile" icon={<ProfileIcon color={value === 4 ? '#ED60CE' : '#C5C5C7'} />} />
      </BottomNavigation>
    </div>
  );
}