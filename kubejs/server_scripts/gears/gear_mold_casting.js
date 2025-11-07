ServerEvents.recipes(event => {
    /**
     * @param {string} input
     * @param {{tag: string, [amount]: number}} fluid
     * @param {{item: string, [amount]: number}} output
     * @param {boolean} [consumeCast]
     */
    function addCasting(input, fluid, output, consumeCast) {
        event.custom({
            type: "productivemetalworks:item_casting",
            cast: { item: input },

            consume_cast: consumeCast ?? true,
            fluid: {
                amount: fluid.amount ?? 900,
                tag: fluid.tag
            },
            result: {
                count: 1,
                id: output.item
            }
        });
    }

    addCasting(
        'hammerlib:gears/wooden',
        { tag: 'c:molten_steel', amount: 360 },
        { item: 'productivemetalworks:gear_cast' },
        true // do consume the cast
    );

});
