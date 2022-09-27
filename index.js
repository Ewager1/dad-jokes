// logic for dad jokes

 const dadJokes = [
    "What does a baby computer call its father? Data.",
    "Why do Java programmers have to wear glasses? Because they don't C#.",
    "What do you call a programmer from Finland? Nerdic.",
    "What is the most used language in programming? Profanity.",
    "What is the object-oriented way to become wealthy? Inheritance.",
    "How many programmers does it take to change a light bulb? None. It's a hardware problem.",
]

const generateNewJoke = () => {
    const randomJoke = dadJokes[Math.floor(Math.random() * dadJokes.length)]
    document.getElementById("joke").innerHTML = randomJoke
}




// a button to generate a new dad joke
const newDadJoke = document.getElementById("dadJokeButton");
newDadJoke.addEventListener("click", generateNewJoke);


