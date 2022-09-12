/* javascript */

console.log("Hello this is a console message");
console.log("Please enlarge your console window to see the message completely.");

fetch('assets/text/ascii-art-color.txt').then(response => response.text()).then(text => console.log(text)).then(endPrint).then(flowersLeft);

function endPrint() {
    console.log("A flower for you!")
    console.log("Welcome to my website.");
    console.log("Glad you were able to find this image.");
    console.log("This is just a simple image of me that you might not see at first.")
    console.log("Keep this a secret! I'll run out of flowers!")

}
