import { createApp } from 'vue'
import App from './App.vue'
import './assets/normalize-8.0.1.css'
import './assets/base.css'
import './flexible.ts'
import './assets/svgs.ts'

import SdkIcon from "@/components/global/SdkIcon.vue"
import SdkButton from "@/components/global/SdkButton.vue"

const app = createApp(App)

app.component('SdkIcon', SdkIcon);
app.component('SdkButton', SdkButton);

app.mount('#app')
