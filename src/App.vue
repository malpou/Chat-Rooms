<template>
    <div id="app">
        <div class="container is-fluid inside">
            <div class="notification">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
};
</script>