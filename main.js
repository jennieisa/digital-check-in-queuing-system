let luggageQueue =[]; //Skapar en tom lista

let addButton = document.querySelector("#knappLäggTill"); //Hämtar min lägg-till knapp

addButton.addEventListener("click", () => { //Funktion som körs när vi klickar på knappen
     let newName = document.querySelector("#nyPersonNamn"); //Hämtar input-taggen
     let newNameValue = newName.value; //Hämtar värdet från input som kommer från användaren

     if (newName.value === "" || newName.value === " ") { //Om användaren inte har skrivit in något och klickar på knappen ska nedan skrivas ut
          alert("Please type in a name in the text box first");
     }else { //Nedan görs om inte if villkoret uppfylls
          luggageQueue.push(newNameValue); //Lägger in input värdet längst bak i arrayen
          console.log(luggageQueue); //Kollar så det ser rätt ut i konsollen 
          let queue = document.querySelector("#platserKö"); //Hämtar p-tagg
          let liTag = document.createElement("li"); //Skapar li-tagg
          liTag.innerText = luggageQueue.at(-1); //Sätter innerText på li-tagg till det sista elementet i arrayen. 
          let textNoQueue = document.querySelector("#tomKö"); //Hämtar p-tagg
          textNoQueue.style.display = "none"; //Ändrar p-taggens visibility till hidden
          queue.appendChild(liTag); //Lägger till list-tagg.
          newName.value = " "; //Sätter input värdet till ingenting
     }
});

let fastTrackButton = document.querySelector("#knappFastTrack"); //Hämtar min fast track knapp

fastTrackButton.addEventListener("click", () => { //Funktion som körs när vi klickar på knappen
     let newName = document.querySelector("#nyPersonNamn"); //Hämtar input-taggen
     let newNameValue = newName.value; //Hämtar inputvärdet från användaren 

     if (newName.value === "" || newName.value === " ") { //Om användaren inte har skrivit in något och klickar på knappen ska nedan skrivas ut
          alert("Please type in a name in the text box first");
     }else { //Nedan görs om if villkoret inte uppfylls
          luggageQueue.unshift(newNameValue); //Lägger in input värde längst fram i arrayen
          console.log(luggageQueue); //Kollar så allt ser rätt ut i konsollen
          let queue = document.querySelector("#platserKö"); //Hämtar ol-tagg
          let liTag = document.createElement("li"); //Skapar li-tagg
          liTag.innerText = luggageQueue.at(0); //Sätter innertext på li-taggen till det första elementet i arrayen. 
          let textNoQueue = document.querySelector("#tomKö"); //Hämtar p-tagg
          textNoQueue.style.display = "none"; //Sätter p-taggens visibility till hidden.
          queue.insertBefore(liTag, queue.firstChild); //Sätter in list-taggen som första barn till ol-taggen
          newName.value = " "; //Sätter input värdet till ingenting 
     }
});

let checkedInButton = document.querySelector("#knappCheckaIn"); //Hämtar knapp

checkedInButton.addEventListener("click", () => { //Funktion som körs när vi klickar på knappen
     if (luggageQueue.length === 0) { //Om arrayens längd är 0 så skrivs nedan ut 
          alert("There’s currently no people standing in line");
     }else if (luggageQueue.length === 1) { //Om inte if villkoret uppfylls så sker nedan om längden på arrayen är 1 
          luggageQueue.shift(); //Tar bort första elementet i arrayen
          console.log(luggageQueue); //Kollar så det ser rätt ut i konsollen
          let liTag = document.querySelector("li"); //Hämtar den första li-taggen 
          liTag.remove(); //Tar bort den första li-taggen som vi hämtade 
          let textNoQueue = document.querySelector("#tomKö"); //Hämtar p-tagg
          textNoQueue.style.display = "flex";  //gör så att p-tagg visas på webbplats
     }else { //Om inget av ovan villkor uppfylls sker nedan
          luggageQueue.shift(); //Tar bort första elementet i arrayen
          console.log(luggageQueue); //Kollar så det ser rätt ut i konsollen
          let liTag = document.querySelector("li"); //Hämtar den första li-taggen 
          liTag.remove(); //Tar bort den första li-taggen som vi hämtade 
     }
});

