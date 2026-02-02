// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/quarryplus/quarry_recipes.js
// Description: Rework QuarryPlus quarry recipes.

ServerEvents.recipes(event => {
  event.remove({ output: 'quarryplus:quarry' });
  event.remove({ output: 'quarryplus:adv_quarry' });

  event.shaped('quarryplus:adv_quarry', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: '#c:storage_blocks/diamond',
    B: 'minecraft:dragon_head',
    C: 'quarryplus:quarry',
    D: 'avaritia:infinity_singularity',
    E: '#c:storage_blocks/emerald',
    F: 'avaritia:endest_pearl'
  }).id('kubejs:quarryplus/adv_quarry');

  event.shaped('quarryplus:quarry', [
    'ABA',
    'BCB',
    'DBD'
  ], {
    A: 'minecraft:netherite_pickaxe',
    B: 'alltheores:steel_ingot',
    C: 'create:precision_mechanism',
    D: 'minecraft:redstone_block'
  }).id('kubejs:quarryplus/quarry');
});

