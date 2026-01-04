ServerEvents.recipes(event => {
  event.remove({ output: 'tempad:tempad' });
  event.shaped('tempad:tempad', [
    'AAA',
    'BCD',
    'EFE'
  ], {
    A: '#c:glass_blocks/tinted',
    B: '#c:gems/quartz',
    C: 'avaritia:endest_pearl',
    D: 'minecraft:redstone_lamp',
    E: 'tempad:time_steel',
    F: 'tempad:chronon_battery'
  }).id('kubejs:tempad/tempad');
});
