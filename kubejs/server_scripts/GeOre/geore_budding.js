ServerEvents.recipes(event => {

  const FE_COST = 100000; 

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
    'zinc'
  ];

  materials.forEach(material => {
    event.recipes.powah.energizing(
      [`geore:${material}_block`],      
      `geore:budding_${material}`,       
      FE_COST                            
    ).id(`pack:energize_${material}_budding`);
  });

});
