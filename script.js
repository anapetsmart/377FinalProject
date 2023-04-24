function showHTML(list){
    console.log('show HTML test')
    const show = document.querySelector('#showHere')
    show.innerHTML = '';
    list.forEach((item) =>{
        const str = `<li>${item.name}</li>`
        show.innerHTML += str
    })
}
function searchList(list, query){
    return list.match((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase())
    })
}
async function mainEvent(){
    const showAll = document.querySelector('.main_form');
    const allData = document.querySelector('#allData');
    const text = document.querySelector('#dogs')
    const searchListButton = document.querySelector('#search')
    // const text = document.querySelector('#dogs')
    let breedList = [];
    allData.addEventListener('click', async(submitevent) => {
        console.log(breedList)
        const showAll= await fetch('https://dog.ceo/api/breeds/list/all');
        breedList = await showAll.json();
        console.table(breedList)
        showHTML(Object.entries(breedList))
    })
    text.addEventListener('input', (event) => {
        console.log('input', event.target.value)
        const textList = searchList(JSON.stringify(breedList), event.target.value);
        console.log(textList)
        showHTML(textList)
    })
    searchListButton.addEventListener('click', (event) =>{
        console.log('search clicked')
        const apiData = new FormData(showAll);
        const apiObj = Object.fromEntries(apiData)
        console.log(showAll)
        const search = searchList(JSON.stringify(breedList), apiObj.dogs)
        console.log(search)
        // showHTML(searchList)
    })
}


document.addEventListener('DOMContentLoaded', async () => mainEvent());