*NOTES ON THE HTML

- I kept the html file as simple as possible to avoid confusion. I added a button a user input field and a div. I made sure I gave them all id's so I could call them with document.getElementByID in the Javascript.

*NOTES ON THE JS

- I used an async/await function to fetch the Poke API information only when the searchButton element is clicked. the userInput is passed as the variable to the fetchPoke function and returns with the API data. If the API fails to bring back the data, an error message is logged to the console. The .innerhtml for my div then displays various stats and a picture of the pokemon, else {the .innerhtml for the div displays an error message that the pokemon was not found}.

*ISSUES I HAD

- I used a combination of the lesson information, copilot in the console to fix errors, and my own logic to come up with solutions. It took a while to think the logic out in some places, but fun!