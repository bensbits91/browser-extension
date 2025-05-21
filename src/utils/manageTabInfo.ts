export function manageTabInfo() {
   const queryTabInfo = (setTabInfo: (info: { title: string; url: string }) => void) => {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
         if (chrome.runtime.lastError) {
            console.error('Error querying tabs:', chrome.runtime.lastError.message);
            setTabInfo({
               title: 'Restricted Page',
               url: 'This page cannot be accessed by the extension.'
            });
            return;
         }

         if (tabs[0]) {
            const url = tabs[0].url || '';
            if (url.startsWith('chrome://') || url.startsWith('edge://') || url === '') {
               console.error('Cannot access this tab:', url);
               setTabInfo({
                  title: 'Restricted Page',
                  url: 'This page cannot be accessed by the extension.'
               });
            } else {
               setTabInfo({ title: tabs[0].title || '', url });
            }
         }
      });
   };

   return { queryTabInfo };
}
