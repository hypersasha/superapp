import React, { useState } from 'react';
// import connect from '@vkontakte/vk-connect';
import Root from '@vkontakte/vkui/dist/components/Root/Root';
// import View from '@vkontakte/vkui/dist/components/View/View';
// import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './views/Home/Home';

const App = () => {
	const [activeView] = useState('home');
	const [activePanel, setActivePanel] = useState('example');
	// const [fetchedUser, setUser] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	/*useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []); */

	/*<View activePanel={activePanel} popout={popout}>*/
	/*	<Home id='home' fetchedUser={fetchedUser} go={go} />*/
	/*	<Persik id='persik' go={go} />*/
	/* </View> */

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<Root activeView={activeView}>
			<Home id={'home'} activePanel={activePanel} go={go}/>
		</Root>
	);
}

export default App;

