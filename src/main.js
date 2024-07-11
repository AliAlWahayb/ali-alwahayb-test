import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createI18n } from 'vue-i18n'
import EN from './locale/en.json'
import AR from './locale/ar.json'

const app = createApp(App)

const i18n = createI18n({
    locale: 'EN',
    messages: {
        EN: EN,
        AR: AR
    }
})

app.use(i18n)
app.use(router)
app.mount('#app')
