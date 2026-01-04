ServerEvents.recipes(event => {
  event.remove({ output: 'pipez:basic_upgrade' });
  event.shaped('pipez:basic_upgrade', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: '#c:ingots/iron',
    B: '#c:nuggets/iron',
    C: 'mekanism:alloy_infused'
  }).id('kubejs:pipez/basic_upgrade');
});
