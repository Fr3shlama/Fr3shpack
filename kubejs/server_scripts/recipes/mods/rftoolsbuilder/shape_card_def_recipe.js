// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/rftoolsbuilder/shape_card_def_recipe.js
// Description: Rework the RFTools Builder shape card recipe.

ServerEvents.recipes(event => {
  event.remove({ output: 'rftoolsbuilder:shape_card_def' });

  event.shaped('rftoolsbuilder:shape_card_def', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'mekanism:configuration_card',
    B: 'minecraft:bricks',
    C: '#c:dusts/redstone',
    D: 'create:precision_mechanism'
  }).id('kubejs:rftoolsbuilder/shape_card_def');
});

