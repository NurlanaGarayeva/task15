let products = [
    {
      id: 1,
      name: "Iphone 14",
      price: 1200,
    },
    {
      id: 2,
      name: "Samsung A70",
      price: 1800,
    },
    {
      id: 3,
      name: "BMW",
      price: 50000,
      pet: ["cat", "dog"],
    },
    {
      id: 4,
      name: "Iphone 15 Pro Max",
      price: 2000,
    },
  ];
  
  products.sort((a, b) => {
    return a.price - b.price;
});

let product = products.map((a) =>{
console.log(a.name + " " + a.price)
})


 

// let ededler = [];
// for (let i = 0; i <=5; i++) {
//     ededler.push(Math.floor(Math.random() * 100) + 1); 
// }


// let cem = ededler.reduce((a, b) => a + b, 0);

// console.log("Təsadüfi ədədlər:", ededler);
// console.log("Ədədlərin cəmi:", cem);