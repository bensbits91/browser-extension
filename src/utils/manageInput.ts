export function manageInput() {
   const getInputValue = (callback: (value: string | null) => void) => {
      chrome.storage.sync.get(['savedValue'], result => {
         callback(result.savedValue || null);
      });
   };

   const saveInputValue = (value: string) => {
      chrome.storage.sync.set({ savedValue: value }, () => {
         console.log('Value saved:', value);
      });
   };

   return { getInputValue, saveInputValue };
}
