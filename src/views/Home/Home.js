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
const osName = platform();

const Home = ({activePanel, go}) => (
    <View activePanel={activePanel}>
        <Panel id={'example'}>
            <PanelHeader>Example</PanelHeader>
            <Group title="Simple Group">
                <Cell>
                    <Button size={'xl'} onClick={go} data-to={'persik'}>Go Next Page</Button>
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


