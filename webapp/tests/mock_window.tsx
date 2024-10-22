export const mockMMStore = {
    getState: () => ({
        entities: {
            channels: {
                currentChannelId: 'current_channel_id',
                myMembers: {
                    current_channel_id: {
                        channel_id: 'current_channel_id',
                        user_id: 'current_user_id',
                        roles: 'channel_role',
                        mention_count: 1,
                        msg_count: 9,
                    },
                },
                channels: {
                    current_channel_id: {
                        id: 'current_channel_id',
                        name: 'default-name',
                        display_name: 'Default',
                        delete_at: 0,
                        type: 'O',
                        team_id: 'team_id',
                    },
                    current_user_id__existingId: {
                        id: 'current_user_id__existingId',
                        name: 'current_user_id__existingId',
                        display_name: 'Default',
                        delete_at: 0,
                        type: 'D',
                        team_id: 'team_id',
                    },
                },
                channelsInTeam: {
                    'team-id': new Set(['current_channel_id']),
                },
                messageCounts: {
                    current_channel_id: {total: 10},
                    current_user_id__existingId: {total: 0},
                },
            },
            teams: {
                currentTeamId: 'team-id',
                teams: {
                    'team-id': {
                        id: 'team_id',
                        name: 'team-1',
                        display_name: 'Team 1',
                    },
                },
                myMembers: {
                    'team-id': {roles: 'team_role'},
                },
            },
            users: {
                currentUserId: 'current_user_id',
                profiles: {
                    current_user_id: {roles: 'system_role'},
                },
            },
            groups: {
                groups: {},
                syncables: {},
                myGroups: [],
                stats: {},
            },
            emojis: {customEmoji: {}},
            preferences: {
                myPreferences: {
                    'display_settings--name_format': {
                        category: 'display_settings',
                        name: 'name_format',
                        user_id: 'current_user_id',
                        value: 'username',
                    },
                },
            },
            roles: {
                roles: {
                    system_role: {
                        permissions: [],
                    },
                    team_role: {
                        permissions: [],
                    },
                    channel_role: {
                        permissions: [],
                    },
                },
            },
            general: {
                license: {IsLicensed: 'false'},
                serverVersion: '5.4.0',
                config: {PostEditTimeLimit: '-1'},
            },
        },
    }),
}
