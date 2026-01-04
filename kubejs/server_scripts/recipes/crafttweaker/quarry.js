ServerEvents.recipes(event => {
  event.remove({ output: 'quarryplus:quarry' });
  event.remove({ output: 'quarryplus:adv_quarry' });
  event.remove({ output: 'rftoolsbuilder:shape_card_def' });

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
