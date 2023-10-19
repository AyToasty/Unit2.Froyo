const availableFlavors = ['vanilla', 'chocolate', 'strawberry', 'coffee', 'cookie dough', 'mint', 'butter pecan']

function flavorsOrderedCount (orders) {
  const flavorCounts = {};
  const splitOrder = orders.split(",");
  for (const order of splitOrder) {
    const trimmedOrder = order.trim().toLowerCase();
    if (availableFlavors.includes(trimmedOrder)) {
    flavorCounts[trimmedOrder] = (flavorCounts[trimmedOrder] || 0) + 1;
  } else {
    alert(`Sorry, ${trimmedOrder} is not available.`);
  }
}
  return flavorCounts;
}

const orders = prompt(  
  "Please enter some flavors separated by commas.",
  "Vanilla, Vanilla, Vanilla, Strawberry, Chocolate, Coffee"
);

const orderedFlavors = flavorsOrderedCount(orders);

console.table(orderedFlavors);

console.log('Available Flavors:', availableFlavors.join(', '));