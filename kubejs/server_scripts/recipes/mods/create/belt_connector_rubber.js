// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/create/belt_connector_rubber.js
// Description: Rebalance Create belt connector recipe using rubber sheets.

ServerEvents.recipes(event => {
  event.remove({ type: 'minecraft:crafting_shaped',   output: 'create:belt_connector' });

  event.shaped(Item.of('create:belt_connector', 16), [
    'SSS'
  ], {
    S: 'modern_industrialization:rubber_sheet'
  }).id('pack:belt_from_rubber_sheets');
});

