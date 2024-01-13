const mainDiv = document.querySelector(".box");
// Array of Definitions
const def = [
    {
        id: 1,
        title: "Algorithm",
        txt: `An algorithm is a finite sequence of well-defined instructions typically used to solve a class of specific problems or to perform a computation.`,
        category: "defs",
    },
    {
        id: 2,
        title: "A heuristic in coding",
        txt: `A heuristic is an approach to problem-solving that may not be fully specified or may not guarantee correct, especially in problem domains where there is no well-defined correct or optimal result.`,
        category: "defs",
    },
    {
        id: 3,
        title: "Randomized algorithm",
        txt: `A randomized algorithm is an algorithm that employs a degree of randomness as part of its logic or procedure. For example, in Randomized Quick Sort, we use random number to pick the next pivot (or we randomly shuffle the array). Typically, this randomness is used to reduce time complexity or space complexity in other standard algorithms.`,
        category: "defs",
    },
    {
        id: 4,
        title: "Iteration",
        txt: `In computing, iteration is the technique marking out of a block of statements within a computer program for a defined number of repetitions.`,
        category: "defs",
    },
    {
        id: 5,
        title: "Turing-complete",
        txt: `In computability theory aka (recursion theory), a system of data-manipulation rules is said to be Turing-complete or computationally universal if it can be used to simulate any Turing machine. This means that this system is able to recognize or decide other data-manipulation rule sets. Wikipedia.`,
        category: "defs",
    },
    {
        id: 6,
        title: "Pseudocode",
        txt: `In computer science, pseudocode is a plain language description of the steps in an algorithm or another system, it uses structural conventions of a normal programming language, but is intended for human reading rather than machine reading.`,
        category: "defs",
    },
    {
        id: 7,
        title: "Programming language",
        txt: `A programming language is any set of rules that converts strings, or graphical program elements in the case of visual programming language, to various kinds of machine code output.`,
        category: "defs",
    },
    {
        id: 8,
        title: "Dynamic programming",
        txt: `Dynamic programming is both a mathematical optimization method and a computer programming method. The method was developed by Richard Bellman in the 1950s and has found applications in numerous fields, from aerospace engineering to economics.`,
        category: "defs",
    },
]
window.addEventListener("DOMContentLoaded", function () {
    let displayDef = def.map((item) => {
        return `
        <div class="box">
            <h1 class="title"><i>${item.title}</i></h1>
            <p class="txt">
                ${item.txt}
            </p>
        </div>`;
    });
    displayDef = displayDef.join("");
    mainDiv.innerHTML = displayDef;
});

// Sections
const section1 = document.querySelector(".s1");
const section2 = document.querySelector(".s2");
const section3 = document.querySelector(".s3");
// buttons
const btn0 = document.querySelector("#s1_btn");
const btn1 = document.querySelector("#s2_btn");
const btn2 = document.querySelector("#s3_btn");
// // adding events
// btn0.addEventListener("click", showS1Page());
// btn1.addEventListener("click", showS2Page());
// btn2.addEventListener("click", showS3Page());

// function showS1Page() {
//     section1.style.display = "block";
//     section2.style.display = "none";
//     section3.style.display = "none";
// }
// function showS2Page() {
//     section1.style.display = "none";
//     section2.style.display = "block";
//     section3.style.display = "none";
// }
// function showS3Page() {
//     section1.style.display = "none";
//     section2.style.display = "none";
//     section3.style.display = "block";
// }