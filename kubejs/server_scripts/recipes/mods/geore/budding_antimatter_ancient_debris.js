// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/geore/budding_antimatter_ancient_debris.js
// Description: Add Mekanism nucleosynthesizing recipe to create GeOre budding ancient debris using antimatter.


ServerEvents.recipes(event => {
  event.custom({
    type: "mekanism:nucleosynthesizing",

    item_input: {
      item: "geore:ancient_debris_block",
      amount: 1
    },

    chemical_input: {
      chemical: "mekanism:antimatter",
      amount: 1000
    },

    output: {
      id: "geore:budding_ancient_debris",
      count: 1
    },

    duration: 6000,
    per_tick_usage: false
  }).id("pack:geore/budding_antimatter/ancient_debris");
});
