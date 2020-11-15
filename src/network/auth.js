import store from "../store";

export function setToken(token) {
  store.dispatch("setToken", token)
}

export function getToken() {
  return store.getters.getToken;
}

export function removeToken() {
  store.dispatch("setToken", "")
}

export function logout() {
  store.dispatch("logout")
}
