import HashMap from "./hashMap.js";

const hashMap = new HashMap();

// const hashCode = hm.hash("Sita");

hashMap.set("Rama", "Rama");
hashMap.set("Sita", "Rama");
hashMap.set("Sita", "Sita");
hashMap.set("Sita", "SitaRama");
hashMap.set("Ram", "Rom");
hashMap.set("Pet", "Dog");
hashMap.set("1", "Num");
hashMap.set("Car", "Car");

console.log(hashMap.buckets);
console.log(hashMap.length());
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
// hashMap.clear();
// console.log(hashMap.buckets);
// console.log(hashMap.length());
// console.log(hashMap.remove("Pet"));
// console.log(hashMap.buckets);
