// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import TestHelper from '../../../test/test_helper';
import deepFreezeAndThrowOnMutation from 'mattermost-redux/utils/deep_freeze';
import serviceReducers from 'mattermost-redux/reducers';
import {createReducer} from 'mattermost-redux/store/helpers';

import * as Selectors from './threads';
import {ChannelTypes} from 'mattermost-redux/action_types';

describe('Selectors.Threads.getThreadOrderInCurrentTeam', () => {
    const team1 = TestHelper.fakeTeamWithId();
    const team2 = TestHelper.fakeTeamWithId();
    const post1 = TestHelper.fakePostWithId('');
    const post2 = TestHelper.fakePostWithId('');

    it('should return threads order in current team based on last reply time', () => {
        const user = TestHelper.fakeUserWithId();

        const profiles = {
            [user.id]: user,
        };

        const testState = deepFreezeAndThrowOnMutation({
            entities: {
                general: {
                    config: {
                    },
                },
                preferences: {
                    myPreferences: {
                    },
                },
                users: {
                    currentUserId: user.id,
                    profiles,
                },
                teams: {
                    currentTeamId: team1.id,
                },
                threads: {
                    threads: {
                        a: {last_reply_at: 1, is_following: true, post: post1},
                        b: {last_reply_at: 2, is_following: true, post: post2},
                    },
                    threadsInTeam: {
                        [team1.id]: ['a', 'b'],
                        [team2.id]: ['c', 'd'],
                    },
                },
                channels: {
                    channelsInTeam: {
                        [team1.id]: [post1.channel_id, post2.channel_id],
                    },
                    channels: {
                        [post1.channel_id]: {
                            id: post1.channel_id,
                            name: 'channel-1',
                            display_name: 'channel 1',
                        },
                        [post2.channel_id]: {
                            id: post2.channel_id,
                            name: 'channel-2',
                            display_name: 'channel 2',
                        },
                    },
                    myMembers: {
                        [post1.channel_id]: [user.id],
                        [post2.channel_id]: [user.id],
                    },
                },
            },
        });

        expect(Selectors.getThreadOrderInCurrentTeam(testState)).toEqual(['b', 'a']);
    });
});

describe('Selectors.Threads.getUnreadThreadOrderInCurrentTeam', () => {
    const team1 = TestHelper.fakeTeamWithId();
    const team2 = TestHelper.fakeTeamWithId();
    const post1 = TestHelper.fakePostWithId('');
    const post2 = TestHelper.fakePostWithId('');

    it('should return unread threads order in current team based on last reply time', () => {
        const user = TestHelper.fakeUserWithId();

        const profiles = {
            [user.id]: user,
        };

        const testState = deepFreezeAndThrowOnMutation({
            entities: {
                general: {
                    config: {},
                },
                preferences: {
                    myPreferences: {},
                },
                users: {
                    currentUserId: user.id,
                    profiles,
                },
                teams: {
                    currentTeamId: team1.id,
                },
                threads: {
                    threads: {
                        a: {last_reply_at: 1, is_following: true, unread_replies: 1, post: post1},
                        b: {last_reply_at: 2, is_following: true, unread_replies: 1, post: post2},
                    },
                    threadsInTeam: {},
                    unreadThreadsInTeam: {
                        [team1.id]: ['a', 'b'],
                        [team2.id]: ['c', 'd'],
                    },
                },
                channels: {
                    channelsInTeam: {
                        [team1.id]: [post1.channel_id, post2.channel_id],
                    },
                    channels: {
                        [post1.channel_id]: {
                            id: post1.channel_id,
                            name: 'channel-1',
                            display_name: 'channel 1',
                        },
                        [post2.channel_id]: {
                            id: post2.channel_id,
                            name: 'channel-2',
                            display_name: 'channel 2',
                        },
                    },
                    myMembers: {
                        [post1.channel_id]: [user.id],
                        [post2.channel_id]: [user.id],
                    },
                },
            },
        });

        expect(Selectors.getThreadOrderInCurrentTeam(testState)).toEqual([]);
        expect(Selectors.getUnreadThreadOrderInCurrentTeam(testState)).toEqual(['b', 'a']);
    });
});

describe('Selectors.Threads.getThreadsInCurrentTeam', () => {
    const team1 = TestHelper.fakeTeamWithId();
    const team2 = TestHelper.fakeTeamWithId();

    it('should return threads in current team', () => {
        const user = TestHelper.fakeUserWithId();

        const profiles = {
            [user.id]: user,
        };

        const testState = deepFreezeAndThrowOnMutation({
            entities: {
                users: {
                    currentUserId: user.id,
                    profiles,
                },
                teams: {
                    currentTeamId: team1.id,
                },
                threads: {
                    threads: {
                        a: {},
                        b: {},
                    },
                    threadsInTeam: {
                        [team1.id]: ['a', 'b'],
                        [team2.id]: ['c', 'd'],
                    },
                },
            },
        });

        expect(Selectors.getThreadsInCurrentTeam(testState)).toEqual(['a', 'b']);
    });
});

describe('Selectors.Threads.getThreadsInChannel', () => {
    const team1 = TestHelper.fakeTeamWithId();
    const team2 = TestHelper.fakeTeamWithId();
    const channel1 = TestHelper.fakeChannelWithId('');
    const channel2 = TestHelper.fakeChannelWithId('');
    const channel3 = TestHelper.fakeChannelWithId('');

    it('should return threads in channel', () => {
        const user = TestHelper.fakeUserWithId();

        const profiles = {
            [user.id]: user,
        };

        const testState = deepFreezeAndThrowOnMutation({
            entities: {
                users: {
                    currentUserId: user.id,
                    profiles,
                },
                teams: {
                    currentTeamId: team1.id,
                },
                threads: {
                    threads: {
                        a: {
                            post: {
                                channel_id: channel1.id,
                            },
                        },
                        b: {
                            post: {
                                channel_id: channel1.id,
                            },
                        },
                        c: {
                            post: {
                                channel_id: channel2.id,
                            },
                        },
                        d: {
                            post: {
                                channel_id: channel3.id,
                            },
                        },
                    },
                    threadsInTeam: {
                        [team1.id]: ['a', 'b', 'c'],
                        [team2.id]: ['d'],
                    },
                },
            },
        });

        expect(Selectors.getThreadsInChannel(testState, channel1.id)).toEqual(['a', 'b']);
    });
});

describe('Selectors.Threads.getNewestThreadInTeam', () => {
    const team1 = TestHelper.fakeTeamWithId();
    const team2 = TestHelper.fakeTeamWithId();

    it('should return newest thread in team', () => {
        const user = TestHelper.fakeUserWithId();
        const threadB = {last_reply_at: 2, is_following: true};

        const profiles = {
            [user.id]: user,
        };

        const testState = deepFreezeAndThrowOnMutation({
            entities: {
                users: {
                    currentUserId: user.id,
                    profiles,
                },
                teams: {
                    currentTeamId: team1.id,
                },
                threads: {
                    threads: {
                        a: {last_reply_at: 1, is_following: true},
                        b: threadB,
                    },
                    threadsInTeam: {
                        [team1.id]: ['a', 'b'],
                        [team2.id]: ['c', 'd'],
                    },
                },
            },
        });

        expect(Selectors.getNewestThreadInTeam(testState, team1.id)).toEqual(threadB);
    });
});

describe.only('Selectors.Threads.makeGetThreadsInChannelView', () => {
    const reducer = createReducer(serviceReducers);
    const team1 = TestHelper.fakeTeamWithId();
    const channel1 = TestHelper.fakeChannelWithId(team1.id);

    it('should recompute only when needed', () => {
        const getThreadsInChannelView = Selectors.makeGetThreadsInChannelView();
        const getFollowingThreadsInChannelView = Selectors.makeGetThreadsInChannelView('following');
        const getCreatedThreadsInChannelView = Selectors.makeGetThreadsInChannelView('created');

        let state = reducer(undefined, {type: ''});

        expect(getThreadsInChannelView(state, channel1.id)).toEqual([]);
        expect(getFollowingThreadsInChannelView(state, channel1.id)).toEqual([]);
        expect(getCreatedThreadsInChannelView(state, channel1.id)).toEqual([]);

        expect(getThreadsInChannelView.recomputations()).toBe(1);
        expect(getFollowingThreadsInChannelView.recomputations()).toBe(1);
        expect(getCreatedThreadsInChannelView.recomputations()).toBe(1);

        state = reducer(state, {
            type: ChannelTypes.RECEIVED_CHANNEL_THREADS,
            data: {
                threads: [],
                channel_id: channel1.id,
            },
        });

        expect(getThreadsInChannelView(state, channel1.id)).toEqual([]);
        expect(getFollowingThreadsInChannelView(state, channel1.id)).toEqual([]);
        expect(getCreatedThreadsInChannelView(state, channel1.id)).toEqual([]);

        expect(getThreadsInChannelView.recomputations()).toBe(1);
        expect(getFollowingThreadsInChannelView.recomputations()).toBe(1);
        expect(getCreatedThreadsInChannelView.recomputations()).toBe(1);

        state = reducer(state, {
            type: ChannelTypes.RECEIVED_CHANNEL_THREADS,
            data: {
                threads: [
                    {id: 'a', last_reply_at: 1, is_following: true},
                    {id: 'b', last_reply_at: 2, is_following: false},
                    {id: 'c', last_reply_at: 3, is_following: false},
                    {id: 'd', last_reply_at: 4, is_following: false},
                ],
                channel_id: channel1.id,
            },
        });

        expect(getThreadsInChannelView(state, channel1.id)).toEqual(['d', 'c', 'b', 'a']);
        expect(getFollowingThreadsInChannelView(state, channel1.id)).toEqual([]);
        expect(getCreatedThreadsInChannelView(state, channel1.id)).toEqual([]);

        expect(getThreadsInChannelView.recomputations()).toBe(2);
        expect(getFollowingThreadsInChannelView.recomputations()).toBe(2);
        expect(getCreatedThreadsInChannelView.recomputations()).toBe(2);

        state = reducer(state, {
            type: ChannelTypes.RECEIVED_FOLLOWING_CHANNEL_THREADS,
            data: {
                threads: [
                    {id: 'a', last_reply_at: 1, is_following: true},
                ],
                channel_id: channel1.id,
            },
        });

        expect(getThreadsInChannelView(state, channel1.id)).toEqual(['d', 'c', 'b', 'a']);
        expect(getFollowingThreadsInChannelView(state, channel1.id)).toEqual(['a']);
        expect(getCreatedThreadsInChannelView(state, channel1.id)).toEqual([]);

        expect(getThreadsInChannelView.recomputations()).toBe(2);
        expect(getFollowingThreadsInChannelView.recomputations()).toBe(3);
        expect(getCreatedThreadsInChannelView.recomputations()).toBe(2);

        state = reducer(state, {
            type: ChannelTypes.RECEIVED_CREATED_CHANNEL_THREADS,
            data: {
                threads: [
                    {id: 'c', last_reply_at: 3, is_following: false},
                    {id: 'd', last_reply_at: 4, is_following: false},
                ],
                channel_id: channel1.id,
            },
        });

        expect(getThreadsInChannelView(state, channel1.id)).toEqual(['d', 'c', 'b', 'a']);
        expect(getFollowingThreadsInChannelView(state, channel1.id)).toEqual(['a']);
        expect(getCreatedThreadsInChannelView(state, channel1.id)).toEqual(['d', 'c']);

        expect(getThreadsInChannelView.recomputations()).toBe(2);
        expect(getFollowingThreadsInChannelView.recomputations()).toBe(3);
        expect(getCreatedThreadsInChannelView.recomputations()).toBe(3);
    });
});
