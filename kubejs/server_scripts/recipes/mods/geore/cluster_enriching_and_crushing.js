// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/geore/cluster_enriching_and_crushing.js
// Description: Add Mekanism enriching/crushing recipes for GeOre clusters.

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
      Item.of(`geore:${material}_shard`, 2),
      `geore:${material}_cluster`
    ).id(`pack:enrich_${material}_cluster_to_shards`);
  });

  event.recipes.mekanism.crushing('mekanism:dust_coal','geore:coal_shard')
});


