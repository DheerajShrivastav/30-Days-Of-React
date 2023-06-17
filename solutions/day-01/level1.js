// 01 Declare an empty array;
let arr = [];
console.log(arr);

// 02  Declare an array with more than 5 number of elements
arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

// 03 Find the length of your array
console.log(arr.length);

// 04 Get the first item, the middle item and the last item of the array
console.log(arr[0]);
console.log(arr[arr.length / 2]);
console.log(arr[arr.length - 1]);

// 05 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [123, "abc", 23.0, [1, 2, 3], 258, "box"];
console.log(mixedDataTypes.length);

// 06 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 07 Print the array using console.log()
console.log(itCompanies);

// 08 Print the number of companies in the array
console.log(itCompanies.length);

// 09 Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// 10 Print out each company
itCompanies.forEach((element) => {
  console.log(element);
});

// 11 Change each company name to uppercase one by one and print them out
itCompanies.forEach((element) => {
  console.log(element.toUpperCase());
});

// 12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  itCompanies.join(","),
  "and",
  itCompanies[itCompanies.length - 1],
  "are big IT companies."
);

// 13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function isExist(company) {
  if (itCompanies.includes(company)) {
    console.log(company);
  } else {
    console.log("company is not found ");
  }
}
let company = "RamBnadhu";
isExist(company);

// 14 Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i].indexOf("o") != itCompanies[i].lastIndexOf("o")) {
    console.log(itCompanies[i]);
  }
}

// 15 Sort the array using sort() method
console.log(itCompanies.sort());

// 16 Reverse the array using reverse() method
console.log(itCompanies.reverse());

// 17 Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// 18 Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// 19 Slice out the middle IT company or companies from the array
let mid = Math.floor(itCompanies.length / 2);
console.log(itCompanies.slice(mid - 1, mid + 1));

// 20 Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// 21 Remove the middle IT company or companies from the array
arr = [itCompanies.slice(0, mid - 1) + "," + itCompanies.slice(mid + 1)];
console.log(arr);

// 22 Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// 23 Remove all IT companies
while ((itCompanies.length = 0)) {
  itCompanies.pop();
}
console.log(itCompanies);
