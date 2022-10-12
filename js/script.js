// const students = ["Marco", "Sara", "Carlos"];
// console.log(students);
// console.log(students[2]);
// students[2] = "Carlo";
// console.log(students);

// const userWord = "studente";
// console.log(userWord);
// // for (let i = 0; i < userWord.length; i++) {
// //     console.log(userWord[i]);
// // }
// 
// for ( let i = userWord.length - 1; i >= 0; i-- ) {
//     console.log(userWord[i]);
// }

// const students = ["Marco", "Sara", "Carlo"];
// // console.log(students.at(-2));
// // const isFound = students.includes("Olga");
// // if(students.includes("Sara")) {
// //     console.log("ok");
// // }
// // console.log(students.includes("Olga"));
// // console.log(students.indexOf("Marco"));
// // 
// // console.log(students.join("; "));
// 
// console.log(students.sort());
// console.log(students);

// Array bidimensionali
// 3 turni di squat,ciascuno di 10 ripetizioni

// for (let turno = 1; turno <= 3; turno++) {
//     console.log("TURNO", turno);
//     for (let i = 1; i <= 10; i++) {
//         console.log("Squat", i);
//     }
// }
// 
// const classes = [
//     ["Alessandro", "Benito", "Serena"],
//     ["Andrea", "Chiara", "Alberto", "Antonio"],
//     ["Andrea", "Chiara"]
// ];
// 
// 
// for (let i = 0; i < classes.length; i++) {
//     const thisClass = classes[i]; // Array
//     console.log("CLASSE", i);
//     
//     for (let j = 0; j < thisClass.length; j++) {
//         const thisStudent = thisClass[j];
//         console.log(thisStudent);
//     }
// 
// }

const itemsList = document.querySelectorAll(".item");
console.log(itemsList);
for (let i = 0; i < itemsList.length; i++) {
    const thisItem = itemsList[i];
    thisItem.innerHTML = `Numero ${i + 1}`;
}