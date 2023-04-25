function showHTML(list){
    console.log('show HTML test')
    const target = document.querySelector('#showHere')
    target.innerHTML = '';
    if (list.length > 0){
        list.forEach((item) =>{
        const str = `<li>${item}</li>`;
        target.innerHTML += str
        })}
    // })} else {
        // target.innerHTML = list
    //     const target = document.querySelector('#showHere')
    //     target.innerHTML = list.indexOf(list)
    }
// }
function searchList(list, query){
    return list.findIndex((item) => {
        return item.includesAll(query)
    })
}
async function mainEvent(){
    const showAll = document.querySelector('.main_form');
    const allData = document.querySelector('#allData');
    const text = document.querySelector('#dogs')
    const searchListButton = document.querySelector('#search')
    let breedList = [];
    // const text = document.querySelector('#dogs')
    allData.addEventListener('click', async(submitevent) => {
        // const {breed} = item.message
        const showAll= await fetch('https://dog.ceo/api/breeds/list/all');
        breedList = await showAll.json();
        console.table(breedList)
        const arrayConvert = Object.values(breedList)[0]
        console.log(arrayConvert)
        const array = Object.keys(arrayConvert)
        const list = array[0]
        console.log(array.length)
        breedList = new Array()
        array.forEach((item) =>{
            breedList.push(item)
        })
        console.log(breedList)
        // console.log(breedList.innerHTML)
        // console.log(array[0])
        showHTML(breedList)
    })
    text.addEventListener('input', (event) => {
        console.log('input', event.target.value)
        // console.log(breedList)
        const textList = searchList(breedList, event.target.value);
        console.log(breedList.at(textList))
        // showHTML(breedList.at(textList))
    })
    searchListButton.addEventListener('click', (event) =>{
        console.log('search clicked')
        const apiData = new FormData(showAll);
        const apiObj = Object.fromEntries(apiData)
        console.log(showAll)
        const search = searchList(breedList, apiObj.dogs)
        console.log(search)
        // showHTML(searchList)
    })
}


document.addEventListener('DOMContentLoaded', async () => mainEvent());