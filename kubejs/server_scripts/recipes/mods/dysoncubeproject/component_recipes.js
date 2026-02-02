// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/dysoncubeproject/component_recipes.js
// Description: Adjust Dyson Sphere Project component recipes.

ServerEvents.recipes(event => {
  event.remove({ output: 'dysoncubeproject:em_railejector_controller' });
  event.shaped('dysoncubeproject:em_railejector_controller', [
    'ABC',
    'BDC',
    'EEE'
  ], {
    A: 'mekanism_turrets:ultimate_laser_turret',
    B: 'modern_industrialization:advanced_motor',
    C: 'dysoncubeproject:beam',
    D: 'mekanism_extras:cosmic_control_circuit',
    E: 'minecraft:smooth_stone_slab'
  }).id('kubejs:dysoncubeproject/em_railejector_controller');

  event.remove({ output: 'dysoncubeproject:ray_receiver_controller' });
  event.shaped('dysoncubeproject:ray_receiver_controller', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'extended_industrialization:tesla_receiver',
    B: 'minecraft:smooth_stone_slab',
    C: 'dysoncubeproject:beam',
    D: '#c:storage_blocks/iron',
    E: 'mekanism_extras:cosmic_control_circuit'
  }).id('kubejs:dysoncubeproject/ray_receiver_controller');

  event.remove({ output: 'dysoncubeproject:solar_sail' });
  event.shaped('dysoncubeproject:solar_sail', [
    'ABA',
    'ABA',
    'CBC'
  ], {
    A: '#c:glass_panes/colorless',
    B: 'mekanismgenerators:solar_panel',
    C: 'createaddition:large_connector'
  }).id('kubejs:dysoncubeproject/solar_sail');

  event.remove({ output: 'dysoncubeproject:beam_package' });
  event.shaped('dysoncubeproject:beam_package', [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'dysoncubeproject:beam',
    B: 'modern_industrialization:platinum_wire'
  }).id('kubejs:dysoncubeproject/beam_package');

  event.remove({ output: 'dysoncubeproject:solar_sail_package' });
  event.shaped('dysoncubeproject:solar_sail_package', [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'dysoncubeproject:solar_sail',
    B: 'modern_industrialization:platinum_wire'
  }).id('kubejs:dysoncubeproject/solar_sail_package');
});
