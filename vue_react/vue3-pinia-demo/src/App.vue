<script setup>
// import { ref, provide } from 'vue'
import CompaA from './components/CompaA.vue'
import CompaB from './components/CompaB.vue'
import { useUserStore } from './store/user'
import { toRefs } from 'vue'

// const count = ref(0)
// function increment() {
//   count.value++
// }
// const message = ref('Hello Vue')
// provide('message', message)
const userStore = useUserStore()
const { isLogin, userInfo } = toRefs(userStore)
const {toLogin, toLogout, setUserInfo} = userStore

const login = () => {
  toLogin();
  setUserInfo();
}
</script>

<template>
<div>
  <div v-if="isLogin">
    <img :src="userInfo.avatar">
  </div>
  <div v-else>
    <button @click="login">登录</button>
  </div>
  <!-- <CompaA :count="count" @add="increment"/>
  <CompaB :count="count" /> -->
  <CompaA />
  <CompaB />
</div>
</template>

<style scoped>

</style>
