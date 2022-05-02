/*
[] Maak nu een custom `Product`-component die alle benodigde data kan ontvangen,
    zodat hij voor alle vier de huidige uitvoeringen te gebruiken is. Vervang dan de
    huidige product-blokken door jouw custom component en geef je juiste informatie mee.

    Stappen plan uit de les:
// Aanpak voor het maken van een component
// [] Maak een components-map aan in de src
// [] Maak een JavaScript bestandje aan (met hoofdletter!) volgens de naam van jouw component
// [] Schrijf een functie (met hoofdletter!) die wat HTML returned
// [] Schrijf direct de "export regel" voor die functie
// [] Importeer jouw eigen component in App.js en geef deze weer als component
// [] Werkt het? Top! Dan kun je verder!
// [] Plak de originele HTML in jouw custom component
// [] Bekijk welke data dynamisch moet zijn en bedenk daar property-namen voor. Voeg die ook toe bovenaan de functie.
// [] Geef de informatie door via App.js onder de juiste benamingen!
    */

import React from 'react';

function Product({status,photo,title,nameBag, price}){
    return(
        <article>
            <span>{status}</span>
            <img scr={photo} alt={title} />
            <p>{nameBag}</p>
            <h4>€{price},-</h4>
        </article>
    )
}

export default Product;