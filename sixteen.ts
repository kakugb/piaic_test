var frdName = ["Zulqarnain", "Sadat", "Ilyas", "Mubarak", "Rahat"];

for (var i = 0; i < frdName.length; i++) {
    console.log("Mr." + frdName[i]+"these are First Guests");
}
frdName.push("Yasir");
frdName.push("Ibrahim");
frdName.push("Akmal");
for (var i = 0; i < frdName.length; i++) {
    console.log("Mr." + frdName[i]+" these are First Guests after add three more!");
}