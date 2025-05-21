import { useInput } from '../hooks';

export function Input() {
   const { inputValue, setInputValue, saveValue } = useInput();

   return (
      <div className='p-4'>
         <h1 className='text-xl font-bold'>Save Data Example</h1>
         <input
            type='text'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className='border p-2 rounded w-full'
         />
         <button
            className='mt-4 px-4 py-2 bg-green-500 text-white rounded'
            onClick={saveValue}>
            Save
         </button>
      </div>
   );
}
