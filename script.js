async function getChefBirthday(id) {
    let birthday = "";
    const urlRicetta = "https://dummyjson.com/recipes/";
    const urlChef = "https://dummyjson.com/users/";

    const resRicetta = await fetch(urlRicetta + id);
    const ricetta = await resRicetta.json();

    const resChef = await fetch(urlChef + ricetta.userId);
    const chef = await resChef.json();

    birthday = chef.birthDate;

    return birthday;
}

(async () => {
    try {
        const birthday = await getChefBirthday(1);
        console.log("Data di nascita dello chef:", birthday);
    } catch (error) {
        console.error("Errore:", error);
    }
})();
