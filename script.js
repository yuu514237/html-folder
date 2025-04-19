const getTotalPrice = (price,quantity) => price * quantity;

const addTax = total =>  * 1.1;

const total = getTotalPrice(1000, 2); // → 2000

console.log(　"税金金額は${total}円です");

const  = addTax(total);     // → 2200

console.log(`税込金額は${taxedTotal}円です`);
