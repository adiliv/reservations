var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var reservatioNamesObj = {};

for (var nameToChange in reservations){
  reservatioNamesObj[nameToChange.toLowerCase()] = reservations[nameToChange];
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function (name) {
  name = name.toLowerCase();
  if(!reservatioNamesObj[name]){
    alert("sorry, no reservation under this name"); 
    makeReservation(name); 
  }
 else if(reservatioNamesObj[name].claimed === false){
   alert("welcome!");
 }
 else { 
   alert("this reservation is already claimed");
 }
}
claimReservation(name);

function makeReservation(name){
  reservations[name] = { claimed: true };
  alert("wait, we have an open table for you!");
}
