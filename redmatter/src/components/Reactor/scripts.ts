import { Vue, Component, Prop } from "vue-property-decorator";
import { Matter, WhiteMatter, RedMatter, MatterUpdateHandler, UpdateEvent } from "@/scripts/Matter"

@Component({
  name: "reactor-view",
  components: {
  }
})

export default class Reactor extends Vue implements MatterUpdateHandler {
  @Prop() public name = "Reactor"
  @Prop() growthRate = 20
  public matters: Matter[]
  private timer: number

  constructor() {
    super()
    this.matters = [new WhiteMatter(), new RedMatter()]
    this.matters[0].amount = 1
    for (const matter in this.matters) {
      this.matters[matter].assignUpdateHandler(this)
    }
    this.timer = setInterval(() => {
      for (const matter in this.matters) {
        console.log(this.growthRate)
        this.matters[matter].update(this.growthRate / 100)
      }
    }, 1000);
  }

  handleMatterUpdate(updates: UpdateEvent[]): void {
    for (const update in updates) {
      for (const matter in this.matters) {
        if (this.matters[matter].id == updates[update].id) {
          if (this.matters[matter].amount + updates[update].amount > 0)
            this.matters[matter].amount += updates[update].amount
        }
      }
    }
  }
}
