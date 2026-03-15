ServerEvents.recipes(event => {
  const miCoke = 'modern_industrialization:coke'
  const cokeTag = '#c:coal_coke'

  /*event.replaceInput(
    {},
    miCoke,
    cokeTag
  )
  */
 
  event.replaceInput(
    {},
    'blocksyouneed_luna:coke',
    'modern_industrialization:coke'
  )

  event.replaceInput(
    {},
    'immersiveengineering:coal_coke',
    'modern_industrialization:coke'
  )
  event.replaceOutput(
    {},
    'blocksyouneed_luna:coke',
    'modern_industrialization:coke'
  )
  event.replaceOutput(
    {},
    'immersiveengineering:coal_coke',
    'modern_industrialization:coke'
  )
})