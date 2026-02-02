// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/extendedae/infinity_lava_cell_create.js
// Description: Add create recipe recipe for the infinity lava cell.

ServerEvents.recipes(event => {
  const INCOMPLETE = "kubejs:incomplete_infinity_lava_cell";
  const LOOPS = 10000;

  event.recipes.create.mixing(
    INCOMPLETE,
    [
      "extendedae:infinity_cobblestone_cell",
      "bigger_ae2:digital_singularity_cell_component",
      "minecraft:nether_star"
    ]
  )
  .superheated()
  .id("kubejs:create/mixing/incomplete_infinity_lava_cell");

  event.recipes.create.sequenced_assembly(
    [
      "kubejs:infinity_lava_cell"
    ],
    INCOMPLETE,
    [
      event.recipes.create.filling(
        INCOMPLETE,
        [INCOMPLETE, Fluid.of("minecraft:lava", 1000)]
      )
    ]
  )
  .transitionalItem(INCOMPLETE)
  .loops(LOOPS)
  .id("kubejs:create/sequenced_assembly/infinity_lava_cell");
});
