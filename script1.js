// let photoArray = [{"affenpinscher": "https://images.dog.ceo/breeds/affenpinscher/n02110627_233.jpg"}, {"african":"https://images.dog.ceo/breeds/african/n02116738_3160.jpg"},
//  {"airedale":"https://images.dog.ceo/breeds/airedale/n02096051_9617.jpg"}, {"akita":"https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg"}, {"appenzeller": "https://images.dog.ceo/breeds/appenzeller/n02107908_1030.jpg"}, 
// {"austrilian shepherd":"https://images.dog.ceo/breeds/australian-shepherd/leroy.jpg"}, {"basenji": "https://images.dog.ceo/breeds/basenji/n02110806_4218.jpg"}, {"beagle": "https://images.dog.ceo/breeds/beagle/n02088364_4527.jpg"}, 
// {"bluetick": "https://images.dog.ceo/breeds/bluetick/n02088632_1541.jpg"},{"borzoi":"https://images.dog.ceo/breeds/borzoi/n02090622_3958.jpg"}, {"bouvier":"https://images.dog.ceo/breeds/bouvier/n02106382_2535.jpg"}, {"boxer":"https://images.dog.ceo/breeds/boxer/n02108089_1159.jpg"}, 
// {}, {}, {} ]
let i = 0 
async function showHTML(list){
    const target = document.querySelector('#showHere')
    target.innerHTML = '';
    let link = '';
    list.forEach((breed) =>{
            link = getImage(breed)
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
    target.innerHTML += str
}

// async function orderedImage(list){
//     const texts = await Promise.all(list.map(async url => {
//         const resp = await fetch(`https://dog.ceo/api/breed/${url}/images/random`);
//         console.log(resp.text());
//       }));
// }
// async function orderedImage(list){
//    let photoArray = []
//    texts = []
//     list.forEach((item) =>{
//         photoArray.push(fetch(`https://dog.ceo/api/breed/${item}/images/random`))
//     })
//     Promise.all(photoArray).then(console.log)
// }
// async function orderedImage(list){
//     let photoArray = []
// await Promise.all(
//     list.map(async (id) => {
//       const response = await fetch(`https://dog.ceo/api/breed/${id}/images/random`)
//       const todo = await response.json()
//       photoArray.push(todo)
//     }
//     )
// )
// }
// async function orderedImage(list){
//     let repsonseArray = []
//     list.forEach((item) =>{
//         let response = fetch(`https://dog.ceo/api/breed/${item}/images/random`)
//         // let resultJson = response.json()
//         repsonseArray.push(response)
//     })
//     Promise.all(repsonseArray.sort()).then(
//         repsonseArray.forEach((item) =>{
//             item.then(
//                 }
//             )
//         })
//     )

// }
// // function attempt4(list){
//     list.forEach((item) =>{
//         const result = await fetch(`https://dog.ceo/api/breed/affenpinscher/images/random`)
//         const resultJson = await result.json()
//         const value = (Object.values(resultJson)[0])
//         const str = `<div class='section'><img src = "${value}"/><span>affenpinscher</span></div>`;
//         target.innerHTML += str
//     })
// }
function chart(){
    const labels = [
        'australian',
        'bunhund',
        'bulldog',
        'bullterrier',
        'cattledog',
        'collie',
        'corgi',
        'dane', 
        'deerhound',
        'elkhound',
        'finnish',
        'frise',
        'greyhound',
        'hound', 
        'mastiff',
        'mountain',
        'ovcharka',
        'pinscher',
        'pointer',
        'poodle',
        'retriever',
        'ridgeback',
        'schnauzer',
        'segugio',
        'setter',
        'sheepdog',
        'spaniel',
        'spitz',
        'springer',
        'terrier',
        'waterdog',
        'wolfhound'

      ];
    
      const data = {
        labels: labels,
        datasets: [{
          label: 'Dogs and the amount of sub-breeds they have',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(248, 152, 128)',
          data: [1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 3, 2, 1, 1, 2, 4, 4, 1, 2, 1, 3, 2, 7, 1, 1, 23, 1, 1],
        }]
      };
    
      const config = {
        type: 'bar',
        data: data,
        options: {}
      };

      return myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
}
function searchList(list, query){
    return list.filter((item) => {
        return item.toLowerCase().includes(query.toLowerCase())
    })
}

async function mainEvent(){
    const chartTarget = document.querySelector('myChart')
    const showAll = document.querySelector('.main_form');
    const allData = document.querySelector('#allData');
    const text = document.querySelector('#dogs')
    const searchListButton = document.querySelector('#search')
    const sortButton = document.querySelector('#sort')
    const reverseButton = document.querySelector('#reverseSort')
    let breedList = [];
    const stored = localStorage.getItem('stored')
    chart(chartTarget)
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
        const array = Object.keys(arrayConvert)
        const list = array[0]
        breedList = new Array()
        array.forEach((item) =>{
            breedList.push(item)
        })
        localStorage.setItem('stored', JSON.stringify(breedList));
        // showHTML(config)
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
        // console.log(sortedArray)
        // showHTML(sortedArray)
        showHTML(sortedArray)
    })
    reverseButton.addEventListener('click', (event) =>{
        let reverseArray = breedList.reverse()
        console.log(reverseArray)
        showHTML(reverseArray)
    })
}


document.addEventListener('DOMContentLoaded', async () => mainEvent());