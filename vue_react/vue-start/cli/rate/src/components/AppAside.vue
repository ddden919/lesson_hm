<template>
    <aside class="flx">
       Aside
       <User />
       <User />
       <User />
    </aside>
</template>

<script setup>
import User from './User.vue'
</script>

<style scoped>
aside{
    width: 600px;
    height: 500px;
    background-color: lightgreen;
}
</style>