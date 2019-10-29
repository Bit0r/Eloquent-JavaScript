let journal = [
    {
        events: ["work", "touched tree", "pizza",
            "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
        squirrel: true
    },
    /* and so on... */
];

let journol_JSON=JSON.stringify(journal);

console.log(journol_JSON);
console.log(JSON.parse(journol_JSON).forEach(l=>console.log(l)));