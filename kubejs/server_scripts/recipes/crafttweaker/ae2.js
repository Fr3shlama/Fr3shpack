ServerEvents.recipes(event => {
  event.remove({ output: 'aeinfinitybooster:infinity_card' });
  event.shaped('aeinfinitybooster:infinity_card', [
    'ABA',
    'BCB',
    'DDD'
  ], {
    A: 'avaritia:endest_pearl',
    B: 'ae2:wireless_booster',
    C: 'minecraft:nether_star',
    D: '#c:ingots/netherite'
  }).id('kubejs:aeinfinitybooster/infinity_card');

  event.remove({ output: 'ae2:controller' });
  event.shaped('ae2:controller', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'ae2:smooth_sky_stone_block',
    B: 'ae2:fluix_crystal',
    C: 'mekanism:advanced_control_circuit'
  }).id('kubejs:ae2/controller');
});
