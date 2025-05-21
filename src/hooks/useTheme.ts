import { useState } from 'react';

export function useTheme() {
   const [darkMode, setDarkMode] = useState(false);

   const toggleDarkMode = () => {
      setDarkMode(prevMode => {
         const newMode = !prevMode;
         document.documentElement.classList.toggle('dark', newMode);
         return newMode;
      });
   };

   return { darkMode, toggleDarkMode };
}
