LootJS.lootTables((event) => {
	event.modifyLootTables(LootType.CHEST).replaceItem("minecraft:map", "minecraft:paper")
})

LootJS.modifiers((event) => {
	event.addTableModifier(LootType.CHEST).removeLoot("minecraft:filled_map")
})