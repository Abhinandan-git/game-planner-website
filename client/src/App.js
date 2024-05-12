import React, { useState, useEffect } from 'react';
import { useOnline } from '@uiw/react-use-online';
import Home from "./components/Home";

function App() {
  const isOnline = useOnline();
	const [status, setStatus] = useState(isOnline ? 'online' : 'offline');

	useEffect(() => {
		const handleOnlineStatusChange = () => {
			setStatus(window.navigator.onLine ? 'online' : 'offline');
		};

		window.addEventListener('online', handleOnlineStatusChange);
		window.addEventListener('offline', handleOnlineStatusChange);

		return () => {
			window.removeEventListener('online', handleOnlineStatusChange);
			window.removeEventListener('offline', handleOnlineStatusChange);
		};
	}, []);
  
  return (
    <>
      {
				(status === 'online') ?
					<Home></Home> :
					<div className='off-txt-wrapper'>
						<p className='offline-txt'>
							This page is not available while offline. Please try again with when connected to the internet.
						</p>
					</div>
			}
    </>
  );
}

export default App;