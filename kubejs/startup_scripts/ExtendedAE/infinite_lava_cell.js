StartupEvents.registry("item", (event) => {
  event.create("infinity_lava_cell", "custom_infinity_cell")
    .texture("kubejs:item/infinity_lava_cell")
    .fluidType("minecraft:lava")
    .cellModel('kubejs:block/infinity_lava_cell')
})
