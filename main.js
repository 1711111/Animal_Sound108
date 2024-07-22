function startClassifier(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3hvcwCPO-/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var dog = 0;
var bee = 0;
var bird = 0;
var cat = 0;
var cow = 0;

function gotResults(error, results){
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("Animalnumber").innerHTML = "Detected: Dog: " + dog +"; " + "Cat: " + cat +"; " + "Bee: " + bee +"; " + "Cow: " + cow +"; " + "Bird: " + bird +"; ";
        document.getElementById("Audioclass").innerHTML = results[0].label;

        document.getElementById("Audioclass").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("Animalnumber").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        
        img = document.getElementById("Defaultgif");
        if (results[0].label == "Buzzing") {
            img.src = "Cool_Bee.png";
            bee = bee +1;
        }
        else if (results[0].label == "Mooing") {
            img.src = "Cool_Cow.png";
            cow = cow + 1;
        }
        else if (results[0].label == "Barking") {
            img.src = "Cool_Dog.png";
            dog = dog + 1;
        }
        else if (results[0].label == "Meowing") {
            img.src = "Cool_Cat.png";
            cat = cat + 1;
        }
        else if(results[0].label == "Chirping") {
            img.src = "Cool_Bird.png";
            bird = bird + 1;
        }
        else {
            img.src = "LoadingEar.gif";
        }
    }
}