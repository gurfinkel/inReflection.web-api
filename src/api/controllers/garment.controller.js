exports.list = function (req, res) {
    res.json(
        [
            {
                id: 1,
                name: 'Pants, jumpsuits and shorts',
                items: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ],
            },

            {
                id: 2,
                name: 'Skirts and dresses',
                items: [ 15, 16, 17, 18, 19, 20 ],
            },

            {
                id: 3,
                name: 'Sweaters, sweatshirts, blouses and other tops',
                items: [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41 ],
            },

            {
                id: 4,
                name: 'Jackets, blazers and coats',
                items: [ 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60 ],
            },

            {
                id: 5,
                name: 'Shoes',
                items: [ 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81 ],
            },

            {
                id: 6,
                name: 'Bags',
                items: [ 82, 83, 84, 85, 86, 87, 88, 89 ],
            },

            {
                id: 7,
                name: 'Jewelry',
                items: [ 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101 ],
            },

            {
                id: 8,
                name: 'Belts',
                items: [ 102, 103, 104 ],
            },

            {
                id: 9,
                name: 'Scarves',
                items: [ 105, 106, 107, 108 ],
            },

            {
                id: 10,
                name: 'Bathing suits and lingerie',
                items: [ 109, 110, 111, 112, 113 ],
            },
        ]
    )
};
