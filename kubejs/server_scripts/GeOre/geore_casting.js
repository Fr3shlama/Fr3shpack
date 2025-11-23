ServerEvents.recipes(event => {


    /**
     * @param {string} input
     * @param {{tag: string, [amount]: number}} fluid
     * @param {{item: string, [amount]: number}} output
     * @param {boolean} [consumeCast]
     */
    function addCasting(input, fluid, output, consumeCast) {
        event.custom(
            {
                "type": "productivemetalworks:block_casting",
                "cast": {
                    "item": input
                },
                "consume_cast": consumeCast || true,
                "fluid": {
                    "amount": fluid.amount || 900,
                    "tag": fluid.tag
                },
                "result": {
                    "count": output.amount || 1,
                    "id": output.item
                }
            }
        )
    }

    [
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
    ].forEach(material => {
        addCasting('allthecompressed:sand_1x', {tag: `c:molten_${material}`}, {item: `geore:${material}_block`})
    })

    addCasting('allthecompressed:sand_1x', {tag: 'c:molten_carbon'}, {item: 'geore:coal_block'})
    addCasting('allthecompressed:sand_1x', {tag: 'c:molten_amethyst'}, {item: 'minecraft:amethyst_block'})
    addCasting('allthecompressed:red_sand_1x', {tag: 'c:molten_quartz'}, {item: 'geore:black_quartz_block'})

})