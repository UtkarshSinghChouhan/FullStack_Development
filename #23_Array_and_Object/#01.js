let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 1. Add 'Meat' at the beginning if not already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// 2. Add 'Sugar' at the end if not already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// 3. Remove 'Honey' if allergic
const allergicToHoney = true;
if (allergicToHoney) {
    shoppingCart = shoppingCart.filter(item => item !== 'Honey');
}

// 4. Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);