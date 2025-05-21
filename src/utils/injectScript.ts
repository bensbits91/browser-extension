export function injectScript() {
   chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const tab = tabs[0];
      const url = tab?.url || '';
      const id = tab?.id || 0;

      if (url.startsWith('chrome://') || url.startsWith('edge://') || url === '') {
         console.error('Cannot inject script into this tab.');
         alert('This extension cannot run on this page.');
         return;
      }

      if (id) {
         chrome.scripting
            .executeScript({
               target: { tabId: id },
               func: () => {
                  alert('Hello from the content script!');
               }
            })
            .catch(error => {
               console.error('Error injecting script:', error);
               alert(`Failed to inject script: ${error.message}`);
            });
      }
   });
}
