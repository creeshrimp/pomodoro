// Utilities
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinan = createPinia()

pinan.use(piniaPluginPersistedstate)

export default pinan
