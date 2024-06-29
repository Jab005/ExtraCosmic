const rheozen = extend(Item, "rheozen", {});
const candrum = extend(Item, "candrum", {});
const antalumite = extend(Item, "antalumite", {});
const carbon = extend(Item, "carbon", {});
const chondrite = extend(Item, "chondrite", {});
const chondust = extend(Item, "chondust", {});
const volomic = extend(Item, "volomic", {
  setStats(){
    this.super$setStats();
    this.stats.add(Stat.abilities, "[#ff]Repairment Essence")
  }
});
const tenzlum = extend(Item, "tenzlum", {});
const caltric = extend(Item, "caltric", {});
const imbrune = extend(Item, "imbrune", {
  setStats(){
    this.super$setStats();
    this.stats.addPercent(Stat.temperature, 0.25)
  }
});
const deltacrone = extend(Item, "deltacrone", {});
const drunze = extend(Item, "drunze", {});
const gellum = extend(Item, "gellum", {});
const ambrium = extend(Item, "ambrium", {});
const graphene = extend(Item, "graphene", {});
const limeBrick = extend(Item, "lime-brick", {});
const chlorem = extend(Item, "chlorem", {});
const electroide = extend(Item, "electroide", {});
const imperionEssence = extend(Item, "imperion-essence", {});
const celesteEssence = extend(Item, "celeste-essence", {});
const deltaCore = extend(Item, "delta-core", {});
const epsilonCore = extend(Item, "epsilon-core", {});
const zetaCore = extend(Item, "zeta-core", {});
const voloid = extend(Item, "voloid", {});
const darkEnergyEssence = extend(Item, "dark-energy-essence", {});
const omegaCore = extend(Item, "omega-core", {});
const radhox = extend(Item, "radhox", {});
const cosmonium = extend(Item, "cosmonium", {});
const techronite = extend(Item, "techronite", {});
const arronium = extend(Item, "arronium", {});
const cellothine = extend(Item, "cellothine", {});
const starFragment = extend(Item, "star-fragment", {});
const starCore = extend(Item, "star-core", {});
const parallelCore = extend(Item, "parallel-core", {
  setStats(){
    this.super$setStats();
    this.stats.remove(Stat.explosiveness);
    this.stats.remove(Stat.flammability);
    this.stats.remove(Stat.radioactivity);
    this.stats.remove(Stat.charge);
    this.stats.add(Stat.abilities, "[accent]Opens the gate of [#ff922c]Parallel [#b54cfc]Universe")
  }
});

const kretenItems = [rheozen, candrum, antalumite, carbon, chondrite, chondust, volomic, tenzlum, caltric, imbrune, deltacrone, drunze, gellum, ambrium, graphene, limeBrick, chlorem, electroide, imperionEssence, celesteEssence, deltaCore, epsilonCore, zetaCore, voloid, darkEnergyEssence, omegaCore, radhox, cosmonium, techronite, arronium, cellothine, starFragment, starCore, parallelCore];

Planets.serpulo.hiddenItems.addAll(kretenItems);
Planets.erekir.hiddenItems.addAll(kretenItems)