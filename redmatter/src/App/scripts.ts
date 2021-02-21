import Vue from 'vue'
import Component from 'vue-class-component'
import MainWindow from '@/components/MainWindow/index.vue'

@Component({
  name: 'app',
  components: {
    'main-window': MainWindow
  }
})

export default class App extends Vue {
}
