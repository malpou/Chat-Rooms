<template>
    <div>
        <user>
            <template #user="{ user }">
                <div v-if="user">
                    <user-profile :user="user"/>
                    <chat-list :uid="user.uid"/>
                </div>
                <login v-else />
            </template>
        </user>
    </div>
</template>

<script>
import Login from './Login';
import User from './User';
import UserProfile from './UserProfile';
import ChatList from './ChatList';

export default {
    name: "Home",
    components: { Login, User, UserProfile, ChatList },
};
</script>
