var frdName = ["Zulqarnain", "Sadat", "Ilyas", "Mubarak", "Rahat"];
var unavailable_guest = "Rahat";
var new_invitee = "Ali";
console.log("\t" + frdName[4] + "Who can't make it.\n");
frdName.pop();
frdName.push(new_invitee);
for (var i = 0; i < frdName.length; i++) {
    console.log("Mr." + frdName[i] + " you are invited for dinner in my home!");
}
