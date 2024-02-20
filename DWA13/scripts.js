// EXERCISE 1
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// Outputs each name individually to the console.
names.forEach((item) => {
    console.log(item)
})

// Outputs each name alongside its matching province.
names.forEach((item, index) => {
    console.log(`${item} (${provinces[index]})`)
})

// Converts all province names to uppercase.
const upperCaseArray = provinces.map((province) => province.toUpperCase()) 
console.log(upperCaseArray)

// Outputs the number of characters in each name.
const nameLengthArray = names.map((name) => name.length)
console.log(nameLengthArray)

// Sorts provinces in alphabetical order.
const sortedProvinces = provinces.toSorted()
console.log(sortedProvinces)

// Removes provinces containing "Cape" and outputs the count of the remaining.
const filteredProv = provinces.filter((province) => (!province.includes("Cape")))
console.log(filteredProv.length)

// Indicates whether each name contains the letter 's' or 'S'.
const containsS = names.map(name => name.split('').some(char => char === 's' || char === 'S'))
console.log((containsS))

// Assigns each person a province in an object.
const provinceOfPerson = names.reduce((result, name, index) => {
    result[name] = provinces[index]
    return result
  }, {})
  console.log(provinceOfPerson);


// EXERCISE 2
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// Log each product name only to the console.
console.log(products.forEach(product => console.log(product.product)))

// Filter out all products that have a name longer than 5 characters.
console.log(products.filter(product => (product.product.length > 5)))

// Convert all prices that are strings to numbers, and remove all products from the array that do not have prices.
console.log(products
    .filter(product => parseInt(product.price) && !isNaN(product.price))
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0)
)

// Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee and tea.
console.log(
  products
    .map(product => product.product)
    .reduce((result, name, index, array) => {
      if (index === array.length - 1) {
        return result + 'and ' + name;
      } else {
        return result + name + ', ';
      }
    }, '')
);

// Use reduce to calculate both the highest and lowest-priced items.
console.log(
  (() => {
    const validPrices = products
      .filter(product => parseInt(product.price) && !isNaN(product.price));
      const { highest, lowest } = validPrices.reduce((result, product) => {
      if (result.highest === null || product.price > result.highest.price) {
        result.highest = product;
      }
      if (result.lowest === null || product.price < result.lowest.price) {
        result.lowest = product;
      }
      return result;
    }, { highest: null, lowest: null });

    return `Highest: ${highest.product}. Lowest: ${lowest.product}.`;
  })()
);

// Using only Object.entries and reduce recreate the object with the exact same values but change the keys to 'name' and 'cost'.

console.log(products.reduce((result, obj) => {
  const transformedObj = Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key === 'product' ? 'name' : 'cost'] = value;
    return acc;
  }, {});

  result.push(transformedObj);
  return result;
}, []))
