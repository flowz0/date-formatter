const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}/${month}/${year}`;
currentDateParagraph.textContent = `${month}/${day}/${year}`;

// const exampleSentence = "emosewa si yllib".split("").reverse().join("");
// console.log(exampleSentence);

dateOptionsSelectElement.addEventListener("change", () => {
    switch(dateOptionsSelectElement.value) {
        case "mm-dd-yyyy":
            currentDateParagraph.textContent = `${month}-${day}-${year}`;
            break;
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate.split("/").reverse().join("/");
            break;
        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}/${day}/${year} - ${hours} Hours ${minutes} Minutes`;
            break;
        default:
            currentDateParagraph.textContent = formattedDate;
            break;
    }
});