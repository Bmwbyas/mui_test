export const getData = async () => {
    let response = await fetch('https://rickandmortyapi.com/api/character/?page=1');

    if (response.ok) {
        let json = await response.json();
        return json.results.map((el: any) => {
            return {id: el.id, name: el.name, image: el.image}
        })
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}