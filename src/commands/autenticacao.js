import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login
    });

    {
      return login;
    }
  }
};
export function loginAutenticado() {
  const $store = useStore();
  console.log($store.state.showcase.login);
  if (this.login !== []) {
    return true;
  } else {
    return false;
  }
}
