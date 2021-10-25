const whatToDoForLunch = function(hungry, availableTime) {
  

if(!hungry){

console.log('get back to work')


}


if (hungry === true && availableTime <20){

  console.log("I'm hungry and I have less =than 20 minutes for lunch.");

}else if(hungry === true && (availableTime >=20 && availableTime<=30)){

  console.log("I'm hungry and I have 20 to 30 minutes for lunch.");  

}else if (hungry === true && availableTime > 30)

console.log("we want to remind ourselves that we're in a bootcamp and that we should reconsider how much time we actually have to spare")



}

whatToDoForLunch(true, 20);
