// assignment no 15
let guestlist:string[] = ["Ambreen", "Bilquis", "Abid"];

// print the name not invited for dinner
let unableAttends:string | undefined = guestlist.splice(2,1)[0];

console.log(`${unableAttends} not invited for dinner`);

// push

guestlist.push("Sakina");

// print a message

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited`);
    
});