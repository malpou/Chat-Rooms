<template>
    <div>
        <v-row>
                <!--v-label v-if="chats.length != 0">{{ chats.length == 1 ? 'Chat Room' : 'Chat Rooms' }}</v-label-->
                <v-btn text large color="primary" @click="createChatRoom()">Create New Chat Room</v-btn>
        </v-row>
        
        <v-row v-for="chat of chats" :key="chat.id">
            <v-chip class="ma-2">
                <router-link :to="{ name: 'chat', params: { id: chat.id } }">
                    {{ chat.id }}
                </router-link>
            </v-chip>
        </v-row>
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
