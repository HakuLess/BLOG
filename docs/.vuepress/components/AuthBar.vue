<template>
  <div class="authbar">
    <div class="left">
      <span v-if="user">{{ user.displayName || user.email }}</span>
      <span v-else>未登录</span>
      <span v-if="isAdmin" class="admin">管理员</span>
    </div>
    <div class="right">
      <button class="primary" v-if="!user" @click="login">登录</button>
      <button class="danger" v-if="user" @click="logout">退出</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import authService from '../services/authService.js'
import { analytics } from '../firebase.js'
import { logEvent } from 'firebase/analytics'

const user = ref(null)
const isAdmin = ref(false)

onMounted(()=>{
  authService.onUserChanged(async u=>{
    user.value = u
    isAdmin.value = await authService.isAdmin()
  })
})

async function login(){
  await authService.login()
  isAdmin.value = await authService.isAdmin()
  if (analytics) logEvent(analytics, 'login_success')
}

async function logout(){
  await authService.logout()
  if (analytics) logEvent(analytics, 'logout')
}
</script>

<style>
.authbar{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:8px 0}
.left{display:flex;align-items:center;gap:8px;color:#333}
.right{display:flex;align-items:center;gap:8px}
.primary{background:#3b82f6;color:#fff;border:none;border-radius:6px;padding:6px 10px;cursor:pointer}
.danger{background:#ef4444;color:#fff;border:none;border-radius:6px;padding:6px 10px;cursor:pointer}
.admin{background:#f59e0b;color:#fff;border-radius:12px;padding:2px 8px;font-size:12px}
</style>