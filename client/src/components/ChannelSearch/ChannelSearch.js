import React, { useEffect, useState } from 'react';
import { useChatContext } from 'stream-chat-react';
import search from '../../assets/images/search.png';
import ResultsDropdown from '../ResultsDropdown /ResultsDropdown ';
import './ChannelSearch.css'

const ChannelSearch = ({ setToggleContainer }) => {
    const { client, setActiveChannel } = useChatContext();
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [teamChannels, setTeamChannels] = useState([])
    const [directChannels, setDirectChannels] = useState([])

    useEffect(() => {
        if(!query) {
            setTeamChannels([]);
            setDirectChannels([]);
        }
    }, [query])


    const getChannels = async (text) => {
        try {
            const channelResponse = client.queryChannels({
                type: 'team', 
                name: { $autocomplete: text }, 
                members: { $in: [client.userID]}
            });
            const userResponse = client.queryUsers({
                id: { $ne: client.userID },
                name: { $autocomplete: text }
            })

            const [channels, { users }] = await Promise.all([channelResponse, userResponse]);

            if(channels.length) setTeamChannels(channels);
            if(users.length) setDirectChannels(users);

        } catch (error) {
            setQuery('');
            console.log(error)
        }
    }

    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value)
    };

    const setChannel = (channel) => {
        setQuery('');
        setActiveChannel(channel);
    }

    return (
        <div className='channel-search__container'>
            <div className='channel-search__input__wrapper'>
                <div className='channel-search__input__icon' to='/'>
                    <img src={search} alt="search" width='25' />
                </div>
                <input
                    className='channel-search__input__text'
                    onChange={onSearch}
                    placeholder='search'
                    type='search'
                    value={query}
                    
                >


                </input>
            </div>
            { query && (
                <ResultsDropdown 
                    teamChannels={teamChannels}
                    directChannels={directChannels}
                    loading={loading}
                    setChannel={setChannel}
                    setQuery={setQuery}
                    setToggleContainer={setToggleContainer}
                />
            )}
        </div>
    )
}

export default ChannelSearch
