/* Mastering Continue Statements */
console.log("Example 1");
const names = ["Alex", "", "Jordan", "Priya", ""];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "") {
    continue; // Skip empty names - skip evreything below and go to next iteration
  }
  console.log("Hello", names[i]);
}

console.log("Example 2");
const scores = [85, -1, 92, 100, -1, 76];

//Do not print  negative scores

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 0) {
    continue; // Skip negative scores
  }
  console.log("Valid score:", scores[i]);
}

console.log("Example 3");
const students = ["Alex", "Jordan", "Priya", "You", "Sam"];

for (let i = 0; i < students.length; i++) {
  if (students[i]=="You"){
    continue; // Skip calling "You"
  }
  console.log("Calling:", students[i]);
}


/* Mastering Break */
console.log("Example 4");
const numbers = [2, 5, 8, 12, 15, 20];
numberToFind = 12;
for (let i = 0; i < numbers.length; i++) {
  console.log("🔍 Checking:", numbers[i]);  // <— always runs
  if (numbers[i] === 12) {
    console.log("🎯 Found 12!");
    break;  // <— exits loop immediately
  }
  console.log(`Still searching...`);  // <— only runs if not found yet
}

console.log("✅ Search complete!");


console.log("Example 5");
// Sample dataset: files in a folder (some normal, one contains "virus")
const files = [
  "readme.txt",
  "photo1.jpg",
  "report.pdf",
  "notes.txt",
  "suspect_file.exe", // maybe suspicious
  "virus_signature.bin", // <-- the 'virus' marker we will treat as virus
  "more_docs.docx",
  "archive.zip"
];



let foundIndex = -1; //no virus found yet

console.log("🔎 Starting scan of files...");

for (let i = 0; i < files.length; i++) {
  // Always show what we're checking (helps students trace the loop)
  console.log(`Scanning index ${i}: ${files[i]}`);
if (files[i].includes("virus")){
console.log("Virus found, lets get out of here!");
foundIndex=i;
break;
}
  // Only runs when file is clean
  console.log("✅ Clean. Continuing scan...");
}

if (foundIndex === -1) {
  console.log("✅ Scan finished — no virus found.");
} else {
  console.log(`🛑 Scan aborted at index ${foundIndex}. Take action (isolate/delete/quarantine).`);
}


/* REDUCE Function - sum up the scores array*/ //reduces an array to one value Example: sum, multiply, average
// Initial value: Sum = 0 so we don't change the values in the array
// Multiplication = 1 so we don't change array to 0

console.log("Example 6");

// Sum of Numbers
function add(sum,num){
 return sum+num;
 }
 let addition = numbers.reduce(add,0);
 console.log(`Sum of numbers is ${addition}`);

 // Multiply of numbers
 function multiply(prod,num){
  return prod*num
 }
 let product = numbers.reduce(multiply,1);
 console.log(product);



/* OBJECTS */// packaging related data together
let student1Name = "Alex";
let student1Age = 20;
let student1Score = 88;

let student2Name = "Daniel";
let student2Age = 21;
let student2Score = 95;

let student3Name="Jordan";
let student3Age= 19;
let student3Score= 80;

let student1 = {
  id: 1,
  name: "Alex",
  age: 20,
  score: 88
};

let student2 = {
  id: 2,
  name: "Daniel",
  age: 21,
  score: 95
};

let student3 = {
  id: 3,
  name: "Jordan",
  age: 19,
  score: 80
};

console.log(student3.name); // Accessing object property using dot notation

let classlist = [student1, student2, student3];

for(let i=0; i<classlist.length; i++){
  // console.log(classlist[i].name);
  // console.log(classlist[i].age);
  // console.log(classlist[i].score);
  // display users atleast 20 years old
  if (classlist[i].age<20){ //accessing an attribute from an object
    continue;
  }
    console.log(`Name: ${classlist[i].age}, Score: ${classlist[i].score}`);
}

// FOR IN used for arrays
for(let i in classlist){
  console.log(`Name: ${classlist[i].age}, Score: ${classlist[i].score}`);
}

for (let i in names){
  console.log(names[i]);
}