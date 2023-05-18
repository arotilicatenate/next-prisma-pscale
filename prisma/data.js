const { Prisma } = require('@prisma/client');

const categories =  [
    {
        name: 'Hats',
        description: 'Things you can wear on your head',
    },
    {
        name: 'Socks',
        description: 'Things you can wear on your feet',
    },
    {
        name: 'Shirts',
        description: 'Things you wear on the top half of your body',
    },
];

const users = [
    {
        name: 'John Doe',
        message: '123456789',
        email: 'envkt@example.com'
    }
];
const products = [
    {
        name: 'Sacramento Kings Gray T-Shirt',
        description: 'A nice shirt that you can wear on your body',
        price: new Prisma.Decimal(22.95),
        image: '/images/sacramento-tshirt.jpg',
        category_id: 3,
    },
    {
        name: 'Sacramento Kings Purple T-Shirt',
        description: 'Cool sweatshirt that you can wear on your body',
        price: new Prisma.Decimal(12.95),
        image: '/images/sacramento-tshirt-purple.jpg',
        category_id: 3,
    },
    {
        name: 'Kings Gray Hat',
        description: 'A nice helmet to wear on your head',
        price: new Prisma.Decimal(19.95),
        image: '/images/kings-hat-grey.png',
        category_id: 1,
    },
    {
        name: 'Kings Purple Hat',
        description: 'A nice helmet to wear on your head',
        price: new Prisma.Decimal(19.95),
        image: '/images/kings-hat-purple.png',
        category_id: 1,
    }
    ,
    {
        name: 'Kings Purple Hat 2',
        description: 'A nice helmet to wear on your head',
        price: new Prisma.Decimal(19.95),
        image: '/images/kings-hat-purple.png',
        category_id: 1,
    }
];

module.exports = {
    products,
    categories,
    users
};
