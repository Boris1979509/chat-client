import { createApp } from 'vue'
import i18n from '@/plugins/i18n'
import '@/assets/css/index.css'
import App from '@/App.vue'
import '@/plugins/firebase'
import router from '@/router'
import store from '@/store'
import components from '@/components/ui'
import directives from '@/directives'
import filters from '@/filters'
import Socketio from '@/plugins/socket'

const app = createApp(App)

app.use(i18n)
    .use(router)
    .use(store)
    .use(Socketio, {
        connection: import.meta.env.VITE_SOCKET_URL,
        options: {
            // Your Socket.io options here
        },
    })

/** Global directives */
directives.forEach((directive) => {
    app.directive(directive.name, directive)
})

/** Global filters */
app.config.globalProperties.$filters = filters

// load components UI
components.forEach((component) => {
    app.component(component.name, component)
})

app.mount('#app')
