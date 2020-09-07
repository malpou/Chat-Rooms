<template>
    <div>
        <h3 v-if="chats.length != 0">{{ chats.length == 1 ? 'Chat Room' : 'Chat Rooms'}}</h3>
        <ul>
            <li v-for="chat of chats" :key="chat.id">
                <router-link :to="{ name: 'chat', params: { id: chat.id } }">
                    {{ chat.id }}
                </router-link>
            </li>
        </ul>

        <button class="button" @click="createChatRoom()">Create New Chat Room</button>
    </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../firebase';

export default {
    data() {
        return {
            chats: [],
        };
    },
    firestore() {
        return {
            chats: db
                .collection('chats')
                .where('owner', '==', this.uid)
                .orderBy('createdAt'),
        };
    },
    methods: {
        async createChatRoom() {
            const newChat = await db.collection('chats').add({
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                owner: this.uid,
                members: [this.uid],
            });
            console.log(newChat);
        },
    },
    props: ['uid'],
};
</script>
