// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/geore/budding_diamond_implosion.js
// Description: Implosion compressor recipe to create GeOre budding diamond blocks using coal blocks as compressive material.


ServerEvents.recipes(event => {
  event.custom({
    type: "modern_industrialization:implosion_compressor",

    eu: 512,
    duration: 600,
    item_inputs: [
      { item: "geore:diamond_block" },
      { amount: 64, item: "allthecompressed:coal_block_5x" },
      { item: "modern_industrialization:nuke"}
    ],

    item_outputs: [
      { item: "geore:budding_diamond" }
    ]
  }).id("pack:geore/budding/diamond_implosion");
});
