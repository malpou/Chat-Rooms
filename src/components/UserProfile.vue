<template>
  <div>
    <p>Logged in as {{ user.uid }}</p>

    <button class="button" @click="auth.signOut()">Sign Out</button>
    <hr>
  </div>
</template>

<script>
import { auth } from "../firebase";

export default {
  name: "UserProfile",
  data() { return { auth } },
  props: ['user']
}
</script>
