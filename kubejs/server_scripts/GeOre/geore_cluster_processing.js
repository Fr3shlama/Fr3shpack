ServerEvents.recipes(event => {

  const materials = [
    'emerald',
    'diamond',
    'gold',
    'iron',
    'copper',
    'redstone',
    'lapis',
    'quartz',
    'ancient_debris',
    'aluminum',
    'tin',
    'silver',
    'uranium',
    'platinum',
    'osmium',
    'nickel',
    'lead',
    'zinc',
    'coal'
  ];

  materials.forEach(material => {
    event.recipes.mekanism.enriching(
      Item.of(`geore:${material}_shard`, 5),
      `geore:${material}_cluster`
    ).id(`pack:enrich_${material}_cluster_to_shards`);
  });

  event.recipes.mekanism.crushing('mekanism:dust_coal','geore:coal_shard')
});
