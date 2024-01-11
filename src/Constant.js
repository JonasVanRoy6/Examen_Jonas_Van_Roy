export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter



export const recipeList = [
	{
		id: "01",
		name: "mojito",
		image: require("../assets/images/mojito.png"),
		rating: "4.2",
		ingredients: ["Fresh mint leaves", "2 teaspoons of sugar", "1 lime, cut into wedges", "60 ml white rum"],
		time: "15 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#006A4E",
		description:
			"A Mojito is a classic Cuban cocktail known for its refreshing blend of fresh mint, lime, and white rum. Muddled mint and sugar, combined with lime wedges, create a sweet and tart base. The mixture is poured over ice, topped with club soda, and stirred for a cool and invigorating drink. Garnished with lime and mint, the Mojito is a visually appealing and timeless cocktail, perfect for warm weather or any occasion.",
		steps: [
			"Place the mint leaves and sugar in a glass.",
			"Squeeze the lime wedges into the glass and add them to the mint and sugar. Use a muddler to gently muddle the mint leaves, releasing their flavors.",
			"Add the white rum to the glass.",
			"Drizzle lime juice Pour the club soda over the ingredients.over the mixture and gently toss.",
			"Stir gently to mix all the ingredients.",
		],
	},
	{
		id: "02",
		name: "Blue lagoon",
		image: require("../assets/images/BlueLagoon.png"),
		rating: "3.6",
		ingredients: [
			"50 ml wodka",
			"25 ml blue curaçao",
			"200 ml lemon-lime soda",
			"Ice cubes",
		],
		time: "10 mins",
		difficulty: "Easy",
		calories: "100 cal",
		color: "#f39c12",
		description:
			"The Blue Lagoon is a vibrant tropical cocktail that captures attention with its stunning blue hue. This refreshing drink combines vodka and blue curaçao with a splash of lemon-lime soda over ice. With its visually striking appearance and a citrusy kick, the Blue Lagoon is a delightful and refreshing choice for those seeking a taste of the tropics. Garnish with an orange slice or a cherry for an extra touch of flair.",
		steps: [
			"Fill a glass with ice cubes.",
			"Pour the vodka over the ice.",
			"Add the blue curaçao to the glass.",
			"Pour the lemon-lime soda over the ingredients.",
			"Gently stir to mix the ingredients.",
		],
	},
	{
		id: "03",
		name: "Bloody mary",
		image: require("../assets/images/bloody-mary.png"),
		rating: "4.6",
		ingredients: ["50 ml vodka", "150 ml tomato juice", "15 ml lemon juice", "A few dashes of hot sauce (e.g., Tabasco)", "A few dashes of Worcestershire sauce"],
		time: "20 mins",
		difficulty: "Hard",
		calories: "320 cal",
		color: "#FF0000",
		// description, steps to prepare
		description:
			"The Bloody Mary is a classic cocktail known for its bold and savory profile. It combines vodka with tomato juice, lemon juice, hot sauce, Worcestershire sauce, salt, and black pepper. Shaken and poured over ice, it's garnished with a celery stalk and lemon wedge. Optional additions like a pickle spear or olives enhance its flavorful appeal, making it a popular choice, especially during brunch.",
		steps: [
			"Fill a shaker with vodka, tomato juice, lemon juice, hot sauce, Worcestershire sauce, salt, and black pepper.",
			"Shake well to combine the ingredients.",
			"Strain the mixture into a glass filled with ice cubes.",
			"Garnish with a celery stalk and a lemon wedge.",
		],
	},
	{
		id: "04",
		name: "Long island",
		image: require("../assets/images/long-island.png"),
		rating: "3.6",
		ingredients: ["15 ml vodka", "15 ml gin", "15 ml rum", "15 ml tequila", "15 ml triple sec", "25 ml lemon juice", "20 ml simple syrup"],
		time: "5 mins",
		difficulty: "Easy",
		calories: "120 cal",
		color: "#d35400",
		description:
			"The Long Island Iced Tea is a robust cocktail blending vodka, gin, rum, tequila, triple sec, lemon juice, and simple syrup. Shaken over ice, it's strained into a glass with fresh ice, topped with cola, and garnished with a lemon slice. Deceptively smooth, it carries a strong kick. Drink responsibly!",
		steps: [
			"Fill a shaker with vodka, gin, rum, tequila, triple sec, lemon juice, and simple syrup.",
			"Add ice cubes to the shaker.",
			"Shake the ingredients vigorously.",
			"Strain the mixture into a glass filled with ice cubes.",
			"Top it off with cola.",
		],
	},
	{
		id: "05",
		name: "Tequila sunrise",
		image: require("../assets/images/tequilasunrise.png"),
		rating: "3.2",
		ingredients: ["60 ml tequila", "120 ml orange juice", "15 ml grenadine", "Ice cubes", "Orange slice and maraschino cherry "],
		time: "17 mins",
		difficulty: "Medium",
		calories: "230 cal",
		color: "#8d4004",
		description:
			"The Tequila Sunrise is a visually striking cocktail that mimics the colors of a sunrise. Mix 60 ml of tequila and 120 ml of orange juice in a glass with ice. Slowly pour 15 ml of grenadine for a gradient effect. Garnish with an orange slice and a cherry. Refreshing and visually appealing, it's a delightful choice for a burst of flavor. Cheers!",
		steps: [
			"Fill a highball glass with ice cubes.",
			"Pour tequila and orange juice into the glass.",
			"Stir well to combine.",
			"Slowly pour the grenadine over the back of a spoon or by drizzling it down the side of the glass, allowing it to settle at the bottom.",
			"Garnish with an orange slice and a maraschino cherry.",
			"Optionally, stir gently before drinking to create a sunrise effect.",
		],
	},
	{
		id: "06",
		name: "sex on the beach",
		image: require("../assets/images/sexonthebeach.png"),
		rating: "5.0",
		ingredients: ["45 ml vodka", "15 ml peach liqueur", "45 ml cranberry juice", "45 ml orange juice"],
		time: "10 mins",
		difficulty: "Medium",
		calories: "200 cal",
		description:
			
			"Sex on the Beach is a fruity and tropical cocktail. Shake 45 ml vodka, 15 ml peach liqueur, 45 ml cranberry juice, and 45 ml orange juice with ice. Strain into a glass with ice and garnish with an orange slice and/or cherry. Enjoy the refreshing taste of this beach-inspired drink!",
		steps: [
			"Fill a shaker with vodka, peach liqueur, cranberry juice, and orange juice.",
			"Add ice cubes to the shaker.",
			"Shake the ingredients vigorously.",
			"Strain the mixture into a glass filled with ice cubes.",
			"Garnish with an orange slice and/or cherry.",
			
		],
	},
	{
		id: "07",
		name: "Cuba libre",
		image: require("../assets/images/cubalibre.png"),
		rating: "4.8",
		ingredients: ["50 ml white rum", "Cola", "Lime wedge", "Ice cubes"],
		time: "5 mins",
		difficulty: "Easy",
		calories: "550 cal",
		color: "#d35400",

		description:
			"The Cuba Libre is a refreshing cocktail that combines 50 ml of white rum with cola over ice. Gently stir and garnish with a lime wedge. This classic drink is known for its simplicity and tropical appeal, making it a timeless and invigorating choice. Cheers!",
		steps: [
			"Fill a glass with ice cubes.",
			"Pour 50 ml white rum over the ice.",
			"Add cola to the glass, adjusting to taste and glass size.",
			"Gently stir to mix the ingredients.",
			"Garnish with a lime wedge.",
			
		],
	},
	{
		id: "08",
		name: "Caipirinha",
		image: require("../assets/images/Caipirinha.png"),
		rating: "4.2",
		ingredients: ["60 ml cachaça", "1 lime, cut into wedges", "2 teaspoons sugar", "Ice cubes"],
		time: "15 mins",
		difficulty: "Medium",
		calories: "300 cal",
		color: "#f96163",
		description:
			"The Caipirinha, a refreshing Brazilian cocktail, combines 60 ml of cachaça with lime wedges and 2 teaspoons of sugar. Muddle the limes, add ice, and stir gently for a delightful blend of flavors. Enjoy the crisp taste of Brazil!",
		steps: [
			"Place the lime wedges in a glass.",
			"Sprinkle sugar over the lime wedges.",
			"Gently muddle the limes with a muddler to release the juice and incorporate the sugar.",
			"Add the cachaça to the glass.",
			"Add ice cubes to the glass.",
			"Stir gently to mix all the ingredients.",
		],
	},
];
