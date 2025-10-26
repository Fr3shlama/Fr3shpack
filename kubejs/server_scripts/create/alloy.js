ServerEvents.recipes(event => {

  const ALLOY_ITEM  = 'create:andesite_alloy';
  const ALLOY_BLOCK = 'create:andesite_alloy_block';

  event.remove({ type: 'minecraft:crafting_shaped',   output: ALLOY_ITEM  });
  event.remove({ type: 'minecraft:crafting_shapeless', output: ALLOY_ITEM  });
  event.remove({ type: 'minecraft:crafting_shaped',   output: ALLOY_BLOCK });
  event.remove({ type: 'minecraft:crafting_shapeless', output: ALLOY_BLOCK });
  event.remove({ type: 'create:mixing', output: ALLOY_ITEM });


  event.custom({
    type: 'productivemetalworks:block_casting',
    cast: { item: 'minecraft:andesite' },
    consume_cast: true,
    fluid: { tag: 'c:molten_iron', amount: 180 },
    result: { id: ALLOY_BLOCK, count: 1 }
  }).id('pack:pm_cast_andesite_alloy_block');

  event.shapeless(
    Item.of(ALLOY_ITEM, 9),
    [ALLOY_BLOCK]
  ).id('pack:uncraft_andesite_alloy_block');

});
