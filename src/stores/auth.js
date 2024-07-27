import { ref } from 'vue';
import { defineStore } from 'pinia';

import AuthService from '@/services/auth';
const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const user = ref({});
  const logged = ref(false)

  async function setToken(token) {
    user.value = await authService.postUserToken(token);
    logged.value = true;
  }

  function unsetToken() {
    user.value = {};
    logged.value = false;
  }

  return { user, logged, setToken, unsetToken };
});