async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}

async function getChefBirthday(id) {
    let birthday = "";
    const urlRicetta = "https://dummyjson.com/recipes/";
    const urlChef = "https://dummyjson.com/users/";

    let ricetta;

    try {
        ricetta = await fetchJson(urlRicetta + id);
    } catch (error) {
        throw new Error(`Non posso recuperare la ricetta con id ${id}`);
    }

    if (ricetta.message) {
        throw new Error(ricetta.message);
    }

    let chef;

    try {
        chef = await fetchJson(urlChef + ricetta.userId);
    } catch (error) {
        throw new Error(
            `Non posso recuperare lo chef con id ${ricetta.userId}`
        );
    }

    if (chef.message) {
        throw new Error(chef.message);
    }

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
