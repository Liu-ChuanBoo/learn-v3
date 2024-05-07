import { defineStore, createPinia, acceptHMRUpdate } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// pinia persist
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

// if (import.meta.hot) {
//     import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
// }
