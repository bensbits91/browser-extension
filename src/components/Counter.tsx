import { useCounter } from '../hooks';

export function Counter() {
   const { count, increment } = useCounter();

   return (
      <div className='p-4'>
         <h1 className='text-xl font-bold'>Counter</h1>
         <p className='text-sm'>Count: {count}</p>
         <button
            className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
            onClick={() => increment()}>
            Increment
         </button>
      </div>
   );
}
