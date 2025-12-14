StartupEvents.registry("item", (event) => {
  const item = event.create("infinity_lava_cell", "custom_infinity_cell");
  // TODO: texture and cell model
  item.texture("appliedenergistics2:item/cell_creative");
  item.cellModel("appliedenergistics2:block/drive/cell_creative");

  item.fluidType("minecraft:lava");
});