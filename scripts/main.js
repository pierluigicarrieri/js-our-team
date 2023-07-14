"use strict"

//Variable for html card container
const cardContainer = document.getElementById("card_container");

//Array of objects, each object is a member of the team.
const teamMembers = [
    {
        firstName : "Wayne",
        lastName : "Barnett",
        position : "Founder & CEO",
        profilePic : "wayne-barnett-founder-ceo.jpg"
    },
    {
        firstName : "Angela",
        lastName : "Caroll",
        position : "Chief Editor",
        profilePic : "angela-caroll-chief-editor.jpg"
    },
    {
        firstName : "Walter",
        lastName : "Gordon",
        position : "Office Manager",
        profilePic : "walter-gordon-office-manager.jpg"
    },
    {
        firstName : "Angela",
        lastName : "Lopez",
        position : "Social Media Manager",
        profilePic : "angela-lopez-social-media-manager.jpg"
    },
    {
        firstName : "Scott",
        lastName : "Estrada",
        position : "Developer",
        profilePic : "scott-estrada-developer.jpg"
    },
    {
        firstName : "Barbara",
        lastName : "Ramos",
        position : "Graphic Designer",
        profilePic : "barbara-ramos-graphic-designer.jpg"
    },
];

//Views "teamMembers"
console.log(teamMembers);

//"For" cycle views each object/member of the team
for (let i = 0; i < teamMembers.length; i++) {

    console.log(teamMembers[i]);

}

/*"For" cycle creates "teamMember" variable for each object, then adds 
to "cardContainer" the html "col" element with a card, with each "teamMember" 
properties in the right card place*/
for (let i = 0; i < teamMembers.length; i++) {

    const teamMember = teamMembers[i];

    cardContainer.innerHTML += `<div class="col-4"><div class="card" style="flex-basis: calc(100%/3)"><img src="/img/${teamMember.profilePic}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${teamMember.firstName} ${teamMember.lastName}</h5><p class="card-text">${teamMember.position}</p></div></div></div>`

}
