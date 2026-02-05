StartupEvents.registry("item", event => {
  const METALS = [
    "iron","gold","copper","tin","lead","zinc","aluminum","nickel","silver"
  ];

  METALS.forEach(m => {
    event.create(`incomplete_budding_${m}`)
      .displayName(`Incomplete Budding ${m}`);
  });
});
