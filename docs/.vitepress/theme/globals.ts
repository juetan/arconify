import type { App, Component } from 'vue'
import AudioButton from './components/audio-button.vue'
import Contributors from './components/contributors.vue'
import Demo from './components/demo.vue'
import IconDemo from './components/icon-demo.vue'
import IconifyDemo from './components/iconify-demo.vue'
import InternalIcons from './components/internal-icons.vue'
import InternalPrevIcons from './components/internal-prev-icons.vue'
import TipContainer from './components/tip-container.vue'

export const components: Record<string, Component> = {
  Demo,
  AudioButton,
  IconDemo,
  Contributors,
  TipContainer,
  InternalIcons,
  InternalPrevIcons,
  IconifyDemo
}

export function installGlobals(app: App) {
  for (const name of Object.keys(components)) {
    app.component(name, components[name])
  }
}
