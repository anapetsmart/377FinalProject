let photoArray = []
let arrayCount = []
let i = 0 
async function showHTML(list){
    // console.log('show HTML test')
    // console.log(list)
    const target = document.querySelector('#showHere')
    target.innerHTML = '';
    let link = '';
    // const result = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    // const resultJson = await result.json()
    // return value
    // let newArray = [];
    // for (var i = 0; i < list.length; i++) {    
    list.forEach((breed) =>{
    // console.log(resultJson)
    // const keys = Object.values(resultJson)
            // const value = (Object.values(resultJson)[0])
            // console.log(value)
            link = getImage(breed)
            // console.log(str)
            // console.log(link)
            // photoArray.push(link)
            // console.log(photoArray)
            // console.log(breed)
            // console.log
            // Promise.all(link)
            // console.log(link)
            // console.log(link)
            // newArray.push(link)
            // console.log(newArray)
            // const str = `<div class='section'><img src = "${link}"/>${breed}</div>`;
            // target.innerHTML += str
        // })
    // })
})
}


async function getImage(breed){
    // console.log(breed)
    const target = document.querySelector('#showHere')
    target.innerHTML = '';
    const result = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    const resultJson = await result.json()
    const value = (Object.values(resultJson)[0])
    const str = `<div class='section'><img src = "${value}"/><span>${breed}</span></div>`;
    photoArray.push(str)
    // arrayCount.push(photoArray[0])
    // console.log(photoArray[i])
    arrayCount.push(photoArray[i])
    // console.log(arrayCount[i])
    // photoArray.splice(",")
    // console.log(photoArray)
    // console.log(str)
    // console.log(photoArray)
    // console.log(photoArray.sort()[0])
    // photoArray.forEach((item) => {
    // target.innerHTML += item
    // console.log(typeof target)
    // console.log(str)
    // console.log(value, breed)
    // const str = `<div class='section'><img src = "${link}"/>${breed}</div>`;
    target.innerHTML += str
    // return value
    // })
    // return str
    i+=1
}
// console.log(photoArray[98])
function searchList(list, query){
    return list.filter((item) => {
        return item.toLowerCase().includes(query.toLowerCase())
    })
}

async function mainEvent(){
    const showAll = document.querySelector('.main_form');
    const allData = document.querySelector('#allData');
    const text = document.querySelector('#dogs')
    const searchListButton = document.querySelector('#search')
    const sortButton = document.querySelector('#sort')
    const reverseButton = document.querySelector('#reverseSort')
    let breedList = [];
    const stored = localStorage.getItem('stored')
    // const text = document.querySelector('#dogs')
    allData.addEventListener('click', async(submitevent) => {
        // const {breed} = item.message
        const showAll= await fetch('https://dog.ceo/api/breeds/list/all');
        breedList = await showAll.json();
        // console.table(breedList)
        const arrayConvert = Object.values(breedList)[0]
        const graph = Object.values(arrayConvert)
        // console.log(graph)
        graph.forEach((item) => {
            // console.log(item)
        })
        // arrayConvert.forEach((item) =>{
        //     console.table(Object.values(breedList)[0].length)
        // })
        // console.log(arrayConvert)
        const array = Object.keys(arrayConvert)
        const list = array[0]
        // console.log(array.length)
        breedList = new Array()
        array.forEach((item) =>{
            breedList.push(item)
        })
        localStorage.setItem('stored', JSON.stringify(breedList));
        // console.log(photoArray)
        // console.log(breedList)
        // console.log(breedList.innerHTML)
        // console.log(array[0])
        showHTML(breedList)
    })
    text.addEventListener('input', (event) => {
        console.log('input', event.target.value)
        // console.log(breedList)
        const textList = searchList(breedList, event.target.value);
        console.log(textList)
        showHTML(textList)
    })
    sortButton.addEventListener('click', (event) =>{
        let sortedArray = breedList.sort()
        console.log(sortedArray)
        showHTML(sortedArray)
    })
    reverseButton.addEventListener('click', (event) =>{
        let reverseArray = breedList.reverse()
        console.log(reverseArray)
        showHTML(reverseArray)
    })
    // searchListButton.addEventListener('click', (event) =>{
    //     console.log('search clicked')
    //     const apiData = new FormData(showAll);
    //     const apiObj = Object.fromEntries(apiData)
    //     console.log(showAll)
    //     const search = searchList(breedList, apiObj.dogs)
    //     console.log(search)
    //     // showHTML(searchList)
    // })
}


document.addEventListener('DOMContentLoaded', async () => mainEvent());