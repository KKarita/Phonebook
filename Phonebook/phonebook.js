var input = require("readline-sync");

// luodaan taulukko, johon jokainen puhelinluettelon henkilö tallennetaan.
let phonebook = [];

/**
 * @param {Array} phonebook: puhelinluettelo-taulukko
 * @param {string} name: nimi, jolla tietoja haetaan luettelosta
 * @returns {string}: palauttaa joko haetut tiedot tai virheilmoituksen
 */

//Funktio puhelinnumeron etsimiseen. Käydään kaikki nimet luettelosta läpi
//ja vertaillaan niitä haettuun nimeen. Jos nimi löytyy palautetaan tämän henkilön tiedot,
//muuten palautetaan virheilmoitus
function findPhoneNum(phonebook, name) {
  for (const person of phonebook) {
    if (person.name === name) {
      return person.phone;
    }
  }
  return "Haettua numeroa ei löytynyt.";
}

//Kysely tietojen lisäämiseen.
//Toistetaan, kunnes käyttäjä painaa ENTER ilman tietojen lisäämistä
while (true) {
  console.log("\n*** LISÄÄ HENKILÖ PUHELINLUETTELOON ***");
  console.log(
    "(kun haluat lopettaa paina [ ENTER ] ilman tietojen lisäämistä)\n"
  );
  let name = input.question("Anna nimi: ");
  if (name === "") break;

  let phone = input.question("Anna puhelinnumero: ");
  phonebook.push({ name: name, phone: phone });

  console.log(`Lisätty: ${name}, numero: ${phone}`);
}

//Kysely tietojen hakemiseen puhelinluettelosta.
//Käyttäjältä kysytään haettavan henkilön nimi,
//jos nimi löytyy luettelosta palautetaan henkilön tiedot,
//muutoin palautetaan virheilmoitus.
//Silmukkaa toistetaan, kunnes annetaan tyhjä syöte.
while (true) {
  console.log("\n*** HAKU PUHELINLUETTELOSTA ***");
  console.log(
    "(kun haluat lopettaa paina [ ENTER ] ilman tietojen lisäämistä)\n"
  );
  let searchedName = input.question("Anna haettava nimi: ");

  if (searchedName === "") {
    console.log("\nHaku on lopetettu, kiitos!");
    break;
  }
  try {
    let result = findPhoneNum(phonebook, searchedName);
    console.log(`Puhelinnumero: ${result}`);
  } catch (e) {
    console.log("Virhe: ", e.message);
  }
}
