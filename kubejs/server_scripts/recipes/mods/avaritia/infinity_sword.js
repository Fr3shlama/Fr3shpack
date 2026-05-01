// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/avaritia/infinity_sword.js
// Description: Redefine the Avaritia infinity sword recipe.

ServerEvents.recipes(event => {
  event.remove({ output: 'avaritia:infinity_sword' })

  event.custom({
    type: 'avaritia:extreme_shaped',
    result: {
      id: 'avaritia:infinity_sword'
    },
    pattern: [
      '       II',
      '      ILI',
      '     IFI ',
      '    IJI  ',
      ' C III   ',
      '  CII    ',
      '  NC     ',
      ' N  C    ',
      'X        '
    ],
    key: {
      N: { item: 'avaritia:neutronium_ingot' },
      I: { item: 'avaritia:infinity_ingot' },
      C: { item: 'avaritia:crystal_matrix_ingot' },
      X: { item: 'avaritia:infinity_catalyst' },

      L: { item: 'fdbosses:lightning_core' },
      F: { item: 'fdbosses:fire_and_ice_core' },
      J: { item: 'fdbosses:justice_core' }
    }
  })
})