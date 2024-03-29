import IStrategy from "../../interface/IConcreteStrategy";
import Unit from "../unit/Unit";
export default class HealerStrategy implements IStrategy {
  public doAlgorithm(
    atackingUnit: number,
    target: number,
    targets: number[],
    battleField: Array<Unit>,
    HP: number[],
    protection: undefined,
    support: string
  ): number[] {
    console.log("Healer strategy ");
    console.log("atacking unit", atackingUnit);
    console.log("chosen target", target);
    console.log("array of targets", targets);
    console.log("battlefield", battleField);
    console.log("HPs", HP);
    const copyHP: number[] = [...HP];
    const { _damage } = battleField[atackingUnit];
    const heal: number = _damage * -1;
    const maxHP = battleField[target]._maxHP;
    let currentHP = copyHP[target];
    console.log("Hp before heal",currentHP)
    
      battleField[target].doHPreduce(heal);
      copyHP[target] = battleField[target].doHPUIReduce(copyHP[target], heal);
    

    return copyHP;
  }
  public doTargetSelection(unit: Unit, battleField: Array<Unit>): Array<Unit> {
    console.log(" Healer target selection");

    const copyBattleField = [...battleField];
    if (unit._id >= 6) return copyBattleField.splice(6, 12);
    else return copyBattleField.splice(0, 6);
  }
}
