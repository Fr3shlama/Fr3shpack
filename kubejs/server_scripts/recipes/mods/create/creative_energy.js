// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/create/creative_energy.js
// Description: Remove Create Addition creative energy recipe.

ServerEvents.recipes(event => {
  event.remove({ id: 'createaddition:creative_energy' });
});



