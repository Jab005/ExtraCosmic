const gelatinol = extend(Liquid, "gelatinol", {});
const ennogel = extend(Liquid, "ennogel", {});
const ennogen = extend(Liquid, "ennogen", {});
const attherol = extend(Liquid, "attherol", {});
const imbrunol = extend(Liquid, "imbrunol", {});
const xotra = extend(Liquid, "xotra", {});
const chloroine = extend(CellLiquid, "chloroine", {
  colorFrom: Color.valueOf("007c03"),
  colorTo: Color.valueOf("23ed28"),
  cells: 8,
  spreadTarget: Liquids.water,
  maxSpread: 0.1,
  spreadConversion: 1,
  spreadDamage: 0,
  removeScaling: 0.3
});
const electrum = extend(Liquid, "electrum", {
  setStats(){
    this.super$setStats();
    this.stats.addPercent(Stat.charge, 0.8)
  }
});
const ion = extend(Liquid, "ion", {
  setStats(){
    this.super$setStats();
    this.stats.addPercent(Stat.charge, 1.2)
  }
});
const darkEnergy = extend(Liquid, "dark-energy", {
  setStats(){
    this.super$setStats();
    this.stats.addPercent(Stat.charge, 1.85),
    this.stats.addPercent(Stat.radioactivity, 1.6)
  }
});
const frostagen = extend(Liquid, "frostagen", {});
const frosticum = extend(Liquid, "frosticum", {});
const plasma = extend(Liquid, "plasma", {});
const radhix = extend(Liquid, "radhix", {
  setStats(){
    this.super$setStats();
    this.stats.addPercent(Stat.radioactivity, 2.45)
  }
});
const radhigen = extend(Liquid, "radhigen", {
  setStats(){
    this.super$setStats();
    this.stats.addPercent(Stat.radioactivity, 1.8)
  }
});
const celloplasm = extend(CellLiquid, "celloplasm", {
  colorFrom: Color.valueOf("c65fff"),
  colorTo: Color.valueOf("705fff"),
  cells: 12,
  spreadTarget: chloroine,
  maxSpread: 0.9,
  spreadConversion: 1.5,
  spreadDamage: 0.43,
  removeScaling: 0.3
});