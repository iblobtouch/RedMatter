export class UpdateEvent {
  public id: number
  public amount: number

  constructor(id_: number, amount_: number) {
    this.id = id_
    this.amount = amount_
  }
}

export interface MatterUpdateHandler {
  handleMatterUpdate(updates: UpdateEvent[]): void;
}

export abstract class Matter {
  public name: string
  public id = 0
  public colour: string
  public amount = 0
  growthRate: number
  updateHandler?: MatterUpdateHandler

  constructor(name_: string, colour_: string, growthRate_: number) {
    this.name = name_
    this.colour = colour_
    this.growthRate = growthRate_
  }

  public assignUpdateHandler(updateHandler_: MatterUpdateHandler) {
    this.updateHandler = updateHandler_
  }

  public abstract update(growthLevel: number): void
}

export class WhiteMatter extends Matter {
  constructor() {
    super("White Matter", "grey", 1.05)
    this.id = 1
  }

  public update(growthLevel: number) {
    if (this.updateHandler) this.updateHandler.handleMatterUpdate([new UpdateEvent(2, (this.amount * this.growthRate) / 10)])
    this.amount += this.amount * this.growthRate * growthLevel
  }
}

export class RedMatter extends Matter {
  constructor() {
    super("Red Matter", "red", 1)
    this.id = 2
  }

  public update(growthLevel: number) {
    this.amount *= 0.9
    if (this.updateHandler) this.updateHandler.handleMatterUpdate([new UpdateEvent(1, this.amount * -1)])
  }
}