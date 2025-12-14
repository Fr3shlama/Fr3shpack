ServerEvents.recipes(event => {
  event.recipes.powah.energizing(
    ["extendedae:infinity_cobblestone_cell"], 
    "kubejs:infinity_lava_cell",              
    50000000
  ).id("kubejs:energizing/infinity_lava_cell");
});
