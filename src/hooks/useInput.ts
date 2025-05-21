import { useState, useEffect, useMemo } from 'react';
import { manageInput } from '../utils';

export function useInput() {
   const [inputValue, setInputValue] = useState('');

   // Memoize manageInput to ensure stable references
   const { getInputValue, saveInputValue } = useMemo(() => manageInput(), []);

   useEffect(() => {
      getInputValue(value => {
         if (value) {
            setInputValue(value);
         }
      });
   }, [getInputValue]);

   const saveValue = () => {
      saveInputValue(inputValue);
   };

   return { inputValue, setInputValue, saveValue };
}
