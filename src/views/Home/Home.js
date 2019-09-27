import React from 'react';
import PropTypes from 'prop-types';

import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import { platform, IOS } from '@vkontakte/vkui';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
const osName = platform();

const Home = ({activePanel, go, fetchedUser}) => (
    <View activePanel={activePanel}>
        <Panel id={'example'}>
            <PanelHeader>События</PanelHeader>
            <Group title="Новости">
                {fetchedUser &&
                <Cell
                    before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                    description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
                >
                    {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                </Cell>}
                <Cell>
                    <Button size={'xl'} onClick={go} data-to={'persik'}>Персик, кыс-кыс.</Button>
                </Cell>
            </Group>
        </Panel>
        <Panel id={'persik'}>
            <PanelHeader
                left={<HeaderButton onClick={go} data-to="example">
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </HeaderButton>}
            >
                Persik
            </PanelHeader>
        </Panel>
    </View>
);

Home.propTypes = {
    go: PropTypes.func.isRequired
};

export default Home;


