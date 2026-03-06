ServerEvents.recipes(event => {
  const miCoke = 'modern_industrialization:coke'
  const cokeTag = '#c:coal_coke'

  event.replaceInput(
    {},
    miCoke,
    cokeTag
  )
  event.replaceInput(
    {},
    'blocksyouneed_luna:coke',
    cokeTag
  )

  event.replaceInput(
    {},
    'immersiveengineering:coal_coke',
    cokeTag
  )
  event.replaceOutput(
    {},
    'blocksyouneed_luna:coke',
    miCoke
  )
  event.replaceOutput(
    {},
    'immersiveengineering:coal_coke',
    miCoke
  )
})