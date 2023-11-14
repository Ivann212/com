let btn = document.querySelector("button");
btn.addEventListener('click', function(){
    /*création de la div contenant le commentaire + lui ajouter une class +  insertion dans la balise contenant tout les commentaires*/ 
    let commentList = document.getElementById("comment-list");
    let divComm = document.createElement("div");
    let divClass = div.classList.add("flex space-x-4 text-sm text-gray-500");
    divComm.appendChild(divClass);
    commentList.appendChild(divComm);
    console.log(divComm);
    /*création de la div contenant le h3 et la div contenant un p + lui ajouter une class + insertion dans la balise principale*/
    let divComm2 = document.createElement("div");
    let divClass2 = div.classList.add("flex-1 py-10 border-t border-gray-200");
    divComm2.appendChild(divClass2);
    divComm.appendChild(divComm2);
    /*création du h3 et son contenu + création de sa class + insertion dans la div divComm2*/
    let Nom = document.createElement("h3");
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let nomTexte = document.createTextNode(firstName+ lastName);
    Nom.appendChild(nomTexte)
    divComm2.appendChild(Nom);
    /*création de la div contenant le p et de sa class*/
    let divComm3 = document.createElement("div");
    let divClass3 = div.classList.add("prose prose-sm mt-4 max-w-none text-gray-500");
    divComm3.appendChild(divClass3);
    divComm2.appendChild(divComm3);
    /*création du p contenant le message*/
    let msg = document.createElement("p");
    let message = document.getElementById("message");
    let leMessage = document.createTextNode(message);
    msg.appendChild(leMessage);
    divComm3.appendChild(msg);














});