<!-- vb3s 三段式快捷方式 -->
<template>
     <ul>
        <li v-for="(repo, index) in repos" :key="index">{{repo.name}}</li>
    </ul>
</template>

<script setup>
const repos = [
        {
            id: 1,
            name:"xiaoming"
        },
        {
            id: 2,
            name:"xiaohong"
        },
        {
            id: 3,
            name:"xiaolan"
        }
]
</script>

<style scoped>

</style>