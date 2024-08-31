const dictionary = {
    "B3 B3 B3": "Good Morning",
    "B3 B4": "I Love You",
    "B3 B1 B3": "Give Me a Kiss",
    "B3 B1 B1": "How Are You?",
    "B3 B3 B1": "I'm Thinking of You",
    "B3 B1 B3 B1": "Good Night",
    "B3 B3 B1 B1": "I Miss You",
    "B3 B3 B3 B1": "I'm Happy",
    "B3 B1 B1 B3": "Thank You",
    "B3 B1 B1 B1": "Sorry",
    "B3 B1 B3 B1 B3": "I'm Hungry",
    "B3 B3 B1 B3 B1": "You're My Everything",
    "B3 B3 B3 B1 B1": "Hold My Hand",
    "B3 B1 B1 B3 B3": "Let's Dance",
    "B3 B1 B3 B3 B1": "I'm Always with You"
};

function translate() {
    const input = document.getElementById("inputText").value.trim();
    const result = dictionary[input] || "Translation not found";
    document.getElementById("result").innerText = result;
}
