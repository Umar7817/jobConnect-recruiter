import React, { useContext, useRef } from 'react';
import { FaIdBadge } from 'react-icons/fa6';
import ContextApi from '../ContextApi';
import { toast } from 'react-toastify';

function Leftside() {
  const { user } = useContext(ContextApi);
  const textRef = useRef();

  const copyToClipboard = async () => {
    let copyText = textRef.current.innerText; // Accessing innerText instead of value for non-input elements
    try {
      await navigator.clipboard.writeText(copyText);
      toast.success('Copied to Clipboard');
      return true;
    } catch (error) {
      console.error('Failed to copy:', error);
      return false;
    }
  };

  const copyTextToClipboard = (text) => { // Renamed the function
    try {
      navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error('Failed to copy:', error);
      return false;
    }
  };

  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaIdBadge />
          Your UserId
        </h3>
        <p className="text-black/70 text-base mb-4 ">This is Required To Post Job</p>
        <p ref={textRef} className="font-bold mb-2 flex items-center gap-2">
          {user ? user._id : 'user Id not Found'}
        </p>
        <div>
          <button className="w-full block py-2 pl-3 border focus:outline-none bg-blue-800 rounded rounded-sm text-white cursor-pointer font-semibold" onClick={copyToClipboard}>
            Click here to Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Leftside;
