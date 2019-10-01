exports.list = function (req, res) {
    res.json([
        {
            id: 1,
            name: 'Business is business',
            description: "For those who don't wear a uniform to work, you need to find an outfit that will make a good impression at the office - and we don't mean one with excessive (ulterior) motifs!",
            dilemma: [
                'From bed to work in one minute flat',
                'Date night',
                'I have a tricky day ahead',
                'Asking for a raise',
                'From office to nightclub',
            ],
            items: [ 1, 2, 3, 4, 5 ],
        },

        {
            id: 2,
            name: 'Family affairs',
            description: "Between dinner with your current boyfriend, a date with a potential one and a day at the park with the kids, it's important not to get your looks mixed up.",
            dilemma: [
                'I want to look like Tinderella, not Barbarella',
                'Date night',
                "I'm meeting my future in-laws; I want to look like a catch, not bait",
                "I'm meeting his best friend",
                'At the courthouse for my divorce',
                'My ex has invited me to dinner',
                "I'm auditioning for stepmother",
                "I'm having lunch with my great-aunt who hasn't read a fashion magazine since 1970",
                'In the sandbox',
                'Model mom',
            ],
            items: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],
        },

        {
            id: 3,
            name: 'Key pieces',
            description: "There are clothes and accessories that can create a whole look in themselves - or break it, if you don't know how to wear them. Fringe, leopard prints and sailor shirts may abound, but there's no need to get on your high horse, pull out your claws, or rock the boat to create your look.",
            dilemma: [
                'Calamity (not plain) Jane',
                "Coachella, even though it's Shakespeare in the Park",
                'Which way to the sea?',
                'The Love Boat',
                'Garden party, without going full bloom',
                'Me Jane, you Tarzan',
                "I love leather and rock'n'roll",
                'Say it with flowers',
            ],
            items: [ 16, 17, 18, 19, 20, 21, 22, 23 ],
        },

        {
            id: 4,
            name: 'Evening wear',
            description: "The LBD is, of course, our go-to garment for any evening event. But if you want to stray a little from the beaten path, what should you wear at night to look festive (but not decked out in your Sunday best)?",
            dilemma: [
                'Cocktail arty',
                'My cousin Audrey',
                'Dinner in a hip restaurant',
                'Dinner at home with friends',
                'A dinner with no dress code',
                "A friend's birthday party",
                "Girls' night out",
                'Saturday Night Fever',
                'Dinner on the dunes',
                "It's Christmas!",
                "New Year's Eve - it's showtime"
            ],
            items: [ 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34 ],
        },

        {
            id: 5,
            name: 'Vacation Time',
            description: "Whether you're off for a weekend in the country or a vacation by the sea, you need to pack the right ingredients in your suitcase.",
            dilemma: [
                "Next stop: the airport!",
                "The beach is the new red carpet",
                "Country chic on Saturday",
                "Down-to-earth rustic on Sunday",
                "Sunny day BBQ",
                "Beach party",
                "A Passage to India",
                "A dinner in the mountains without going off-piste",
                "Visiting the Eiffel Tower",
            ],
            items: [ 35, 36, 37, 38, 39, 40, 41, 42, 43 ],
        },

        {
            id: 6,
            name: 'Extra-special occasions',
            description: "There will be times when you really have no idea what to wear, when simply peering into your closet makes you want to go back to bed. Especially if it's raining outside. Don't despair - even in these moments, there is a solution.",
            dilemma: [
                "Normcore with a sparkle",
                "Very, very simple",
                "Effortless chic",
                "For hardcore shopping",
                "Singing in the rain",
                "Oh baby it's cold out there",
                "Museum buff",
            ],
            items: [ 44, 45, 46, 47, 48, 49, 50 ],
        },
    ]);
};
