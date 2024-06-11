// assignment no 15
var guestlist = ["Ambreen", "Bilquis", "Abid"];
// print the name not invited for dinner
var unableAttends = guestlist.splice(2, 1)[0];
console.log("".concat(unableAttends, " not invited for dinner"));
// push
guestlist.push("Sakina");
// print a message
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited"));
});
