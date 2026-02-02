// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/fluxnetworks/flux_dust_compacting.js
// Description: Add Create compacting recipe for Flux Networks dust.

ServerEvents.recipes(event => {
  event.recipes.create.compacting('fluxnetworks:flux_dust', 'minecraft:redstone').heated()
})

