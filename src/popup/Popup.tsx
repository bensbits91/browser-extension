import ReactDOM from 'react-dom/client';
import { Counter, Input, ScriptInjector, TabInfo } from '../components';
import { useTheme } from '../hooks';
import '../index.css';

const Popup = () => {
   const { darkMode, toggleDarkMode } = useTheme();

   return (
      <div
         className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
         <h1 className='text-xl font-bold'>Hello, Extension!</h1>
         <p className='text-sm'>This is your popup page.</p>
         <button
            className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
            onClick={toggleDarkMode}>
            Toggle Dark Mode
         </button>
         <Counter />
         <Input />
         <ScriptInjector />
         <TabInfo />
      </div>
   );
};

const root = document.getElementById('root');
if (root) {
   ReactDOM.createRoot(root).render(<Popup />);
}

export default Popup;
