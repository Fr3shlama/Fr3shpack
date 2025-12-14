ServerEvents.recipes((event) => {
	// Remove ore processing in Squeezer
	event.remove({ id: /integrateddynamics:squeezer\/ore\/.*/ })
	event.remove({ id: /integrateddynamics:mechanical_squeezer\/ore\/.*/ })
})