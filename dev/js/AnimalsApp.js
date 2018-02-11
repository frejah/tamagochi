var info = $("#animalInfo");
var textElement = $("<h3></h3>");

info.append(textElement.clone().text("Is animal: " + isAnimal()));
info.append(textElement.clone().text("Name: " + getAnimalName("Laila")));

