import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'
import Ripple from 'primevue/ripple';

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true });
app.directive('ripple', Ripple);

app.mount('#app')
