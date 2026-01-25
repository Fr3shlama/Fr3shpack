// Fr3shlama (TM) | File: kubejs/server_scripts/tweaks/loot/remove_maps.js
// Description: Replace map loot with paper in chest loot.

LootJS.lootTables((event) => {
	event.modifyLootTables(LootType.CHEST).replaceItem("minecraft:map", "minecraft:paper")
})

LootJS.modifiers((event) => {
	event.addTableModifier(LootType.CHEST).removeLoot("minecraft:filled_map")
})
