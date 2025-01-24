import { cn } from '@/utils/utils';
import React, { useState } from 'react';
import Button from '../common/Button';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('');

  const tabs = ['Description', 'What we offer', 'Reviews', 'About host'];

  const handleScrollToSection = (tabId: string) => {
    document.getElementById(tabId)?.scrollIntoView({ behavior: 'smooth' });
    if (activeTab === tabId) return;
    setActiveTab(tabId);
  };

  return (
    <div className='flex items-center gap-5 overflow-x-auto border-b border-[#E6E6E6] mb-9 px-21 md:px-0'>
      {tabs.map((tab) => {
        const isActiveTab = tab === activeTab;
        return (
          <Button
            onClick={() => handleScrollToSection(tab)}
            key={tab}
            className={cn(
              'pb-5',
              isActiveTab
                ? 'border-b-4 text-primary border-primary font-semibold'
                : 'font-medium text-[#929292]'
            )}
          >
            {tab}
          </Button>
        );
      })}
    </div>
  );
};

export default Tabs;
