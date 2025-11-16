<template>
  <div class="authbar">
    <div class="left">
      <span v-if="user">{{ user.displayName || user.email }}</span>
      <span v-else>未登录</span>
      <span v-if="isAdmin" class="admin">管理员</span>
    </div>
    <div class="right" v-if="!user">
      <button class="primary" @click="loginGoogle">Google 登录</button>
      <div class="email-box">
        <input v-model="email" placeholder="邮箱" />
        <input v-model="password" type="password" placeholder="密码" />
        <button class="primary" @click="loginEmail">邮箱登录</button>
        <button @click="registerEmail">注册</button>
      </div>
    </div>
    <div class="right" v-else>
      <button class="danger" @click="logout">退出</button>
    </div>
    <div v-if="err" class="error">{{ err }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import authService from '../services/authService.js'
import { analytics } from '../firebase.js'
import { logEvent } from 'firebase/analytics'

const user = ref(null)
const isAdmin = ref(false)
const email = ref('')
const password = ref('')
const err = ref('')

onMounted(()=>{
  console.log('[AuthBar] mounted')
  authService.onUserChanged(async u=>{
    console.log('[AuthBar] onUserChanged user=', u)
    user.value = u
    isAdmin.value = await authService.isAdmin()
    console.log('[AuthBar] isAdmin=', isAdmin.value)
  })
})

async function loginGoogle(){
  err.value=''
  try{
    console.log('[AuthBar] loginGoogle click')
    await authService.login()
    isAdmin.value = await authService.isAdmin()
    if (analytics) logEvent(analytics, 'login_success')
  }catch(e){ err.value = e.message || '登录失败' }
}

async function loginEmail(){
  err.value=''
  try{
    console.log('[AuthBar] loginEmail click email=', email.value)
    await authService.loginWithEmail(email.value, password.value)
    isAdmin.value = await authService.isAdmin()
    if (analytics) logEvent(analytics, 'login_success_email')
  }catch(e){ err.value = e.message || '登录失败' }
}

async function registerEmail(){
  err.value=''
  try{
    console.log('[AuthBar] registerEmail click email=', email.value)
    await authService.registerWithEmail(email.value, password.value)
    if (analytics) logEvent(analytics, 'register_email')
  }catch(e){ err.value = e.message || '注册失败' }
}

async function logout(){
  console.log('[AuthBar] logout click')
  await authService.logout()
  if (analytics) logEvent(analytics, 'logout')
}
</script>

<style>
.authbar{display:flex;flex-direction:column;gap:12px;padding:12px 0}
.left{display:flex;align-items:center;gap:8px;color:#333}
.right{display:flex;align-items:center;gap:8px}
.email-box{display:flex;align-items:center;gap:8px}
.primary{background:#3b82f6;color:#fff;border:none;border-radius:6px;padding:6px 10px;cursor:pointer}
.danger{background:#ef4444;color:#fff;border:none;border-radius:6px;padding:6px 10px;cursor:pointer}
.admin{background:#f59e0b;color:#fff;border-radius:12px;padding:2px 8px;font-size:12px}
.error{color:#ef4444}
</style>