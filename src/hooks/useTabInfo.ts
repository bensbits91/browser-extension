import { useState, useEffect } from 'react';
import { manageTabInfo } from '../utils';

export function useTabInfo() {
   const [tabInfo, setTabInfo] = useState({ title: '', url: '' });

   useEffect(() => {
      const { queryTabInfo } = manageTabInfo();
      queryTabInfo(setTabInfo);
   }, []);

   return tabInfo;
}
