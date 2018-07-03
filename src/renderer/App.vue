<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'floattube',

        created() {
            document.title = 'FloatTube';
        }
    }
</script>

<style>
    body {
        margin: 0;
        background: black;
    }
</style>
