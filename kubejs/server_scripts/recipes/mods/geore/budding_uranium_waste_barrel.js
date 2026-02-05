// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/geore/budding_uranium_waste_barrel.js
// Description: Turns uranium geores into budding ones if enough radiation is present.

const IRadiationManager = Java.loadClass('mekanism.api.radiation.IRadiationManager')
const THRESHOLD_SV = 5e-5


BlockEvents.rightClicked(event => {
  if (event.level.isClientSide()) return

  const block = event.block
  if (block.id !== 'geore:uranium_block') return

  const player = event.player
  const level = event.level

  const pos = player.blockPosition()
  const radiationSv = IRadiationManager.INSTANCE.getRadiationLevel(level, pos)

  if (radiationSv >= THRESHOLD_SV) {
    block.set('geore:budding_uranium')
  } else {

  }
})
