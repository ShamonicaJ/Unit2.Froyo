function countFroyoFlavors() {
    // Pre-load example input
    const userInput = 'vanilla,vanilla,vanilla,strawberry,coffee,coffee';
}

function handleButtonClick() {
    // Prompt the user for a comma-separated list of froyo flavors
    const userInput = prompt(
        "Enter a list of comma-separated froyo flavors:",
        "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
    );

    // Check if the user canceled the prompt or entered nothing
    if (userInput === null || userInput.trim() === "") {
        return;
    }

    // Split the user input into an array of flavors
    const flavors = userInput.split(",");

    // Create an object to track the quantity of each flavor
    const flavorCount = {};

    // Iterate through the array of flavors and update the flavorCount object
    flavors.forEach(function (flavor) {
        const trimmedFlavor = flavor.trim(); // Remove leading/trailing spaces or if user uses "and" while entering flavors it wont get counted as a flavor
        if (flavorCount[trimmedFlavor]) {
            flavorCount[trimmedFlavor]++;
        } else {
            flavorCount[trimmedFlavor] = 1;
        }
    });

    // Log the flavor counts to the console as a table
    console.table({ flavorCount });
}

countButton.addEventListener("click", handleButtonClick);