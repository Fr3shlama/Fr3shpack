// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/geore/budding_lapis_slicer.js
// Description: SliceNDice recipe for Budding Lapis using EnderIO Slicer

ServerEvents.recipes(event => {
  event.custom({
    type: "enderio:slicing",
    energy: 50000,

    inputs: [
      { item: "minecraft:blue_dye" },
      { item: "geore:lapis_block" },
      { item: "minecraft:blue_dye" },
      { item: "minecraft:prismarine" },
      { item: "minecraft:prismarine" },
      { item: "minecraft:prismarine" }
    ],

    output: {
      id: "geore:budding_lapis",
      count: 1
    }
  }).id("pack:geore/budding/lapis_slicer");
});
