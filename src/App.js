import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';

// import View from '@vkontakte/vkui/dist/components/View/View';
// import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';

import '@vkontakte/vkui/dist/vkui.css';

import Home from './views/Home/Home';
import EventsFeed from "./views/EventsFeed/EventsFeed";

import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Messages from '@vkontakte/icons/dist/28/messages';

const App = () => {
	const [activeStory, setActiveStory] = useState('events');
	const [isEpicVisible, setIsEpicVisible] = useState(true);
	const [onlyUserEvent, setOnlyUserEvent] = useState(false);

	const [activeView] = useState('home');
	const [activePanel, setActivePanel] = useState('example');
	const [fetchedUser, setUser] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
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
		}
		fetchData();
	}, []);

	/*<View activePanel={activePanel} popout={popout}>*/
	/*	<Home id='home' fetchedUser={fetchedUser} go={go} />*/
	/*	<Persik id='persik' go={go} />*/
	/* </View> */

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const storyGo = e => {
		setActiveStory(e.currentTarget.dataset.story);
	};

	const OnCreateBegins = () => {
		setIsEpicVisible(false);
	};

	const OnCreateEnds = () => {
		setIsEpicVisible(true);
	};

	function OnFilterChange(onlyUser) {
		setOnlyUserEvent(onlyUser);
	}

	return (
		<Epic activeStory={activeStory} tabbar={
			isEpicVisible ?
			<Tabbar>
				<TabbarItem
					data-story={"events"}
					onClick={storyGo}
					text={"События"}
					selected={activeStory === 'events'}
				>
					<Icon28Newsfeed />
				</TabbarItem>
				<TabbarItem
					data-story={"im"}
					onClick={storyGo}
					text={"Награды"}
					selected={activeStory === 'gifts'}
				>
					<Icon28Messages />
				</TabbarItem>
			</Tabbar> : ''
		}
		>
			<EventsFeed id={'events'}
						fetchedUser={fetchedUser}
						OnChangeFilters={OnFilterChange}
						onlyUserEvents={onlyUserEvent}
						OnCreateBegins={OnCreateBegins}
						OnCreateEnds={OnCreateEnds} />
			{/*<Home id={'events'} activePanel={activePanel} fetchedUser={fetchedUser} go={go}/>*/}
		</Epic>
	);
}

export default App;

