import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <span>{children}</span>
        </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabComponentProps {
  tabs:Array<TabsProps>;
}
interface TabsProps{
  title:string;
  Component:any;
}

export default function BasicTabs({tabs}:TabComponentProps) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        {tabs.map((tab, index) => {
          return (
            <Tab key={index} label={tab.title} {...a11yProps(index)} />
          )
        })}
      </Tabs>
      {tabs.map((tab, index) => {
        return (
          <TabPanel key={index} value={value} index={index}>
            {tab.Component}
          </TabPanel>
        )
      })}
    </div>
  );
}