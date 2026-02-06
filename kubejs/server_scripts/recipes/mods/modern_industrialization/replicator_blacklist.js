// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/modern_industrialization/replicator_blacklist.js
// Description: Blacklist certain items from being replicated in MI replicator.


const MODS_TO_BLACKLIST = [
  "avaritia",
  "extendedcrafting",
];

ServerEvents.tags("item", (event) => {
  const TAG = "modern_industrialization:replicator_blacklist";

  const ns = MODS_TO_BLACKLIST.map(m => m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const re = new RegExp(`^(${ns}):`);

  event.add(TAG, re);

  console.log("[MI] Blacklisted items from replicator");
});