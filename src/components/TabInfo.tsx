import { useTabInfo } from '../hooks';

export function TabInfo() {
   const tabInfo = useTabInfo();

   return (
      <div className='p-4'>
         <h1 className='text-xl font-bold'>Current Tab Info</h1>
         <p className='text-sm'>Title: {tabInfo.title}</p>
         <p className='text-sm'>URL: {tabInfo.url}</p>
      </div>
   );
}
