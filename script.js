
function calculateLove() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    
    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    // Simple "love percentage" calculation (you can modify this)
    var combinedLength = name1.length + name2.length;
    var lovePercentage = (combinedLength * 2) % 101; // Random calculation for fun!

    // Display result
    var resultText = "You two have a " + lovePercentage + "% love compatibility!";
    document.getElementById("result").innerText = resultText;
}
