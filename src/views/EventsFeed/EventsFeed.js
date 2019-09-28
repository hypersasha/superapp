import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';

import Root from '@vkontakte/vkui/dist/components/Root/Root';
import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderContent from '@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent';
import HeaderContext from '@vkontakte/vkui/dist/components/HeaderContext/HeaderContext';
import HeaderButton from "@vkontakte/vkui/dist/es6/components/HeaderButton/HeaderButton";

import PullToRefresh from '@vkontakte/vkui/dist/components/PullToRefresh/PullToRefresh';

import Group from '@vkontakte/vkui/dist/components/Group/Group';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from "@vkontakte/vkui/dist/es6/components/Avatar/Avatar";
import Footer from '@vkontakte/vkui/dist/components/Footer/Footer';

// Icons import
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon24Done from '@vkontakte/icons/dist/24/done';

class EventsFeed extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            activeView: 'feed',
            filterContextOpened: false,
            fetching: false,
            events: null
        };
        this.OpenCreateWindow = this.OpenCreateWindow.bind(this);
        this.CloseCreateWindow = this.CloseCreateWindow.bind(this);
        this.ApplyFilter = this.ApplyFilter.bind(this);
        this.ToggleFilterContext = this.ToggleFilterContext.bind(this);
        this.UpdateEventsList = this.UpdateEventsList.bind(this);
    }


    // Try to fetch all the data about events.
    componentDidMount() {

    }

    /**
     * Open new panel for creating a new event.
     * @constructor
     */
    OpenCreateWindow() {

        if (this.props.OnCreateBegins) {
            this.props.OnCreateBegins();
        }

        this.setState({
            activeView: 'create-event'
        })
    }

    /**
     * Open new panel of creating a new event.
     * @constructor
     */
    CloseCreateWindow() {
        if (this.props.OnCreateEnds) {
            this.props.OnCreateEnds();
        }

        this.setState({
            activeView: 'feed'
        })
    }

    /**
     * Toggles onlyUserEvents filter for events feed.
     * @param onlyUser
     * @constructor
     */
    ApplyFilter(onlyUser) {
        this.ToggleFilterContext();
        if (this.props.OnChangeFilters) {
            this.props.OnChangeFilters(onlyUser);
        }
    }

    /**
     * Toggle feed filter context visibility.
     * @constructor
     */
    ToggleFilterContext() {
        this.setState({ filterContextOpened: !this.state.filterContextOpened });
    }

    UpdateEventsList() {
        this.setState({
            fetching: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    fetching: false
                })
            }, 2000);
        })
    }

    NumberToString(n, text_forms) {
        n = Math.abs(n) % 100;
        let n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 === 1) { return text_forms[0]; }
        return text_forms[2];
    }

    render()
    {
        const {id, onlyUserEvents, fetchedUser, ...restProps} = this.props;

        let eventsData = [{
            "_id": "5d8f028ffb3ed803346f23b5",
            "title": "fsafsa",
            "author": {
                "user_id": 1,
                "first_name": "Павел",
                "last_name": "Дуров",
                "photo": "https://sun9-42.userapi.com/c836333/v836333001/31191/qC6rVW5YSD8.jpg?ava=1"
            },
            "description": "fsfa",
            "__v": 0
        },
            {
                "_id": "5d8f02f7fb3ed803346f23b6",
                "title": "Построить дом",
                "author": {
                    "user_id": 5,
                    "first_name": "Илья",
                    "last_name": "Перекопский",
                    "photo": "https://sun7-8.userapi.com/c846416/v846416135/197457/FmfBmTiwTYY.jpg?ava=1"
                },
                "description": "Очень надо",
                "__v": 0
            },
            {
                "_id": "5d8f03abfb3ed803346f23b7",
                "title": "ОБслуживание футбольного матча",
                "author": {
                    "user_id": 7,
                    "first_name": "Алексей",
                    "last_name": "Кобылянский",
                    "photo": "https://sun9-19.userapi.com/c844616/v844616442/cdacc/Ysa9cZZoLoQ.jpg?ava=1"
                },
                "description": "Необходимо обеспечить организацию и порядок футбольного матча.",
                "__v": 0
            },
            {
                "_id": "5d8f03abfb3ed33803346f23b7",
                "title": "ОБслуживание футбольного матча",
                "author": {
                    "user_id": 7,
                    "first_name": "Алексей",
                    "last_name": "Кобылянский",
                    "photo": "https://sun9-19.userapi.com/c844616/v844616442/cdacc/Ysa9cZZoLoQ.jpg?ava=1"
                },
                "description": "Необходимо обеспечить организацию и порядок футбольного матча.",
                "__v": 0
            }
        ];

        /* Filter only users events. */
        if (onlyUserEvents && fetchedUser) {
            eventsData = eventsData.filter((eventItem) => {
                return eventItem.author.user_id === fetchedUser.id;
            });
        }

        const eventsList = eventsData.map(eventItem => {
            return (<Cell before={<Avatar src={eventItem.author.photo} />}
                          key={eventItem._id}
                          expandable={true}
                          description={eventItem.description}>
                {eventItem.title}
            </Cell>)
        });

        return(
            <Root id={id} activeView={this.state.activeView}>
                <View id={'feed'} activePanel={'feed-list'}>
                    <Panel id={'feed-list'}>
                        <PanelHeader
                            left={<HeaderButton onClick={this.OpenCreateWindow}>{<Icon24Add />}</HeaderButton>}
                        >
                            <PanelHeaderContent onClick={this.ToggleFilterContext} aside={<Icon16Dropdown />}>
                                События
                            </PanelHeaderContent>
                        </PanelHeader>

                        {/* Header context for filter of events feed. Users only event or all. */}
                        <HeaderContext opened={this.state.filterContextOpened} onClose={this.ToggleFilterContext}>
                            <List>
                                <Cell onClick={() => {this.ApplyFilter(false)}} asideContent={!onlyUserEvents && <Icon24Done fill={"var(--accent)"} />}>Все события</Cell>
                                <Cell onClick={() => {this.ApplyFilter(true)}} asideContent={onlyUserEvents && <Icon24Done fill={"var(--accent)"} />}>Только мои</Cell>
                            </List>
                        </HeaderContext>

                        {/* Render all available events. */}
                        <PullToRefresh onRefresh={this.UpdateEventsList} isFetching={this.state.fetching}>
                            <Group>
                                {
                                    eventsList.length <= 0 &&
                                    <Div>
                                        <Footer>Не найдено ни одного события.</Footer>
                                    </Div>
                                }
                                <List>
                                    {eventsList}
                                </List>
                            </Group>
                            <Footer>{eventsList.length} {this.NumberToString(eventsList.length, ['событие', 'события', 'событий'])}</Footer>
                        </PullToRefresh>
                    </Panel>
                </View>
                <View id={'create-event'} activePanel={'base-panel'}>
                    <Panel id={'base-panel'}>
                        <PanelHeader
                            left={<HeaderButton onClick={this.CloseCreateWindow}>Отмена</HeaderButton>}
                        >Новое событие</PanelHeader>
                    </Panel>
                </View>
            </Root>
        )
    }
}

EventsFeed.propTypes = {
    OnCreateBegins: PropTypes.func.isRequired,
    OnCreateEnds: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        id: PropTypes.any,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    })
};

 export default EventsFeed;