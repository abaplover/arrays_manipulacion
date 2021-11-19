const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const myProducts = [];

  console.log("Products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));

  const productIndex = products.findIndex(item => item.id === '🌭')

  if (productIndex !== -1) {
      myProducts.push(products[productIndex]);
      products.splice(productIndex, 1);
    }


    console.log("Products", products);
    console.log("myProducts", myProducts);
    console.log("-".repeat(10));


// Updates
const products2 = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const update = {
    id: "🥞",
    changes : {
        price: 200,
        description: 'Delicous'
    }
}
const index = products2.findIndex(item => item.id === update.id);
products2[index] = {
    ...products2[index],
    ...update.changes,
};

console.log(products2);