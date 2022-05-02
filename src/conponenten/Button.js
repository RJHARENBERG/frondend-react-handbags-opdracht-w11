/*[] Maak nu een custom `Button`-component die alle benodigde data kan ontvangen,
    zodat hij voor alle drie de huidige uitvoeringen te gebruiken is.
    Vervang de huidige buttons door jouw custom component en geef de juiste
    informatie mee.

    Stappen plan uit de les:
// Aanpak voor het maken van een component
// [v] Maak een components-map aan in de src
// [v] Maak een JavaScript bestandje aan (met hoofdletter!) volgens de naam van jouw component
// [v] Schrijf een functie (met hoofdletter!) die wat HTML returned
// [v] Schrijf direct de "export regel" voor die functie
// [v] Importeer jouw eigen component in App.js en geef deze weer als component
// [v] Werkt het? Top! Dan kun je verder!
// [] Plak de originele HTML in jouw custom component
// [] Bekijk welke data dynamisch moet zijn en bedenk daar property-namen voor. Voeg die ook toe bovenaan de functie.
// [] Geef de informatie door via App.js onder de juiste benamingen!
    */
import React from 'react';

function Button({consoleDescription,description}){
    return(
        <button
            onClick={() => console.log({consoleDescription})}
            type="button"
        >{description}</button>
    )
}

export default Button;