import { injectScript } from '../utils';

export function ScriptInjector() {
   return (
      <div>
         <button
            className='mt-4 px-4 py-2 bg-purple-500 text-white rounded'
            onClick={injectScript}>
            Inject Script
         </button>
      </div>
   );
}
