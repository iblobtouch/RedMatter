import { Vue, Component} from 'vue-property-decorator'
import Reactor from '@/components/Reactor/index.vue'

@Component({
  name: 'main-window',
  components: {
    'reactor-view': Reactor
  },
})

export default class MainWindow extends Vue {
}
