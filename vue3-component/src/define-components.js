import { defineCustomElement } from 'vue';
import vue3Message from './components/vue3-message.vue';

const CustomElement = defineCustomElement(vue3Message);

export { CustomElement };

window.customElements.define('vue3-message', CustomElement);

export function register() {
  window.customElements.define('vue3-message', CustomElement);
}
