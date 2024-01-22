import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { axiosPublic } from "@/common/axiosPublic";
import axiosPrivate from "@/common/axiosPrivate";
import router from "@/router";

export const useAuthStore = defineStore("auth", () => {
  const errors = ref(null);
  const loading = ref(false);
  const user = ref(null);
  const isAuthenticated = ref(false);

  async function login(credentials) {
    try {
      loading.value = true;
      const response = await axiosPublic.post("/auth/login", credentials);

      localStorage.setItem(
        "session",
        JSON.stringify(response.data.authorisation)
      );
      await me();
      router.push({ name: "home" });
    } catch (e) {
      console.log(e);
      const status = e.response.status;
      if (status === 401) {
        errors.value = {
          message: ["อีเมลผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง"],
        };
      } else if (status === 422) {
        errors.value = e.response.data.errors;
      }
    } finally {
      loading.value = false;
    }
  }

  async function register(credentials) {
    try {
      loading.value = true;
      const response = await axiosPublic.post("/auth/register", credentials);

      localStorage.setItem(
        "session",
        JSON.stringify(response.data.authorisation)
      );
      await me();
      router.push({ name: "home" });
    } catch (e) {
      console.log(e);
      const status = e.response.status;
      if (status === 401) {
        errors.value = {
          message: ["อีเมลผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง"],
        };
      } else if (status === 422) {
        errors.value = e.response.data.errors;
      }
    } finally {
      loading.value = false;
    }
  }

  async function logout() {
    try {
      const response = await axiosPrivate.post("/auth/logout");
      console.log(response);
      user.value = null;
      isAuthenticated.value = false;
      localStorage.removeItem("user");
      localStorage.removeItem("session");
      router.push({ name: "login" });
    } catch (e) {
      console.log(e);
    }
  }

  async function me() {
    try {
      const response = await axiosPrivate.post("/auth/me");
      user.value = response.data;
      localStorage.setItem("user", JSON.stringify(response.data));
      isAuthenticated.value = true;
    } catch (e) {
      user.value = null;
      isAuthenticated.value = false;
      localStorage.removeItem("user");
      localStorage.removeItem("session");
    }
  }

  return { login,register, me, logout, loading, user, isAuthenticated, errors };
});
