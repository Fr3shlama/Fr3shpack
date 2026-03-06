ServerEvents.recipes(event => {
  const ID = 'tfmg:item_application/steel_casing'
  event.remove({ id: ID })
  event.custom({
    type: "create:item_application",
    ingredients: [
      {
        tag: "immersiveengineering:treated_wood"
      },
      {
        tag: "c:ingots/steel"
      }
    ],
    results: [
      {
        id: "tfmg:steel_casing"
      }
    ]
  }).id(ID)
})