// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/geore/budding_quartz_crystal_fixer.js
// Description: Add Extended AE2 crystal fixer recipe to create GeOre budding quartz block.

ServerEvents.recipes(event => {
  event.custom({
    type: "extendedae:crystal_fixer",
    chance: 7500,

    fuel: {
      ingredient: { item: "modern_industrialization:quartz_crushed_dust" }
    },

    input:  { id: "geore:quartz_block", count: 1 },
    output: { id: "geore:budding_quartz", count: 1 }
  }).id("pack:geore/budding/quartz_crystal_fixer");
});
