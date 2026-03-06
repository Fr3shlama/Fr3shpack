ServerEvents.recipes(event => {

  const oil = Fluid.of('modern_industrialization:crude_oil', 1)

  event.replaceInput(
    { mod: 'modern_industrialization' },
    oil,                                
    '#c:crude_oil'                      
  )
  
  // Remove oil drilling rig and use Create oil drill instead
  event.remove({ id: 'modern_industrialization:oil/crude_oil' })
  event.remove({ id: 'modern_industrialization:oil/shale_oil' })
  event.remove({ id: 'modern_industrialization:oil/water' })
  event.remove({ id: 'modern_industrialization:oil_drilling_rig/3' })
})