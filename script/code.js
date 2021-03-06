let properties = JSON.parse(localStorage.getItem('land')) ?
JSON.parse(localStorage.getItem('land')): 
[
    {
    id: 1,
    image: 'https://i.postimg.cc/bwGzSxWr/0.jpg',
    address:{
        region: 'Hawaii Kai',
        neighbourhood: 'Kalama Valley',
        street: '810 Kiaala Place'
    },
    rooms:{
        bedrooms: 3,
        bathrooms: 2
    },
    price: 1050000,
    size: 4399
},{
    id: 2,
    image: 'https://i.postimg.cc/C14YpmBP/1.jpg',
    address:{
        region: 'Kailua',
        neighbourhood: 'Waimanalo',
        street: '41-157 Nalu Street'
    },
    rooms:{
        bedrooms: 3,
        bathrooms: 2
    },
    price: 399000,
    size: 7618
},{
    id: 3,
    image: 'https://i.postimg.cc/KvWbbKj2/2.jpg',
    address:{
        region: 'Ewa Plain',
        neighbourhood: 'Ewa Gen Terrazza',
        street: '91-191 Makalea Street'
    },
    rooms:{
        bedrooms: 4,
        bathrooms: 2
    },
    price: 818800,
    size: 3417  
},{
    id: 4,
    image: 'https://i.postimg.cc/gjkpz83Y/3.jpg',
    address:{
        region: 'Ewa Plain',
        neighbourhood: 'Ewa Beach',
        street: '91-812 Apoke Place'
    },
    rooms:{
        bedrooms: 3,
        bathrooms: 1
    },
    price: 850000,
    size: 5183   
},{
    id: 5,
    image: 'https://i.postimg.cc/15XSb09B/4.jpg',
    address:{
        region: 'Ewa Plain',
        neighbourhood: 'Ewa Gen Sun Terra',
        street: '91-208 Wahineomao Way'
    },
    rooms:{
        bedrooms: 4,
        bathrooms: 3
    },
    price: 905000,
    size: 3418   
},{
    id: 6,
    image: 'https://i.postimg.cc/6QJN7DCb/5.jpg',
    address:{
        region: 'Makakilo',
        neighbourhood: 'Makakilo-Lower',
        street: '92-356 Akaula Street'
    },
    rooms:{
        bedrooms: 5,
        bathrooms: 3
    },
    price: 975000,
    size: 6405   
},{
    id: 7,
    image: 'https://i.postimg.cc/ZnRktZhn/6.jpg',
    address:{
        region: 'Kaneohe',
        neighbourhood: 'Haiku Knolls',
        street: '46-350 Nahewai Street'
    },
    rooms:{
        bedrooms: 7,
        bathrooms: 6
    },
    price: 3350000,
    size: 20056   
},{
    id: 8,
    image: 'https://i.postimg.cc/3R351mSg/7.jpg',
    address:{
        region: 'Leeward',
        neighbourhood: 'Waianae',
        street: ' '
    },
    rooms:{
        bedrooms: 3,
        bathrooms: 1
    },
    price: 125000,
    size: 1505   
},{
    id: 9,
    image: 'https://i.postimg.cc/VvG8dvFX/8.jpg',
    address:{
        region: 'Leeward',
        neighbourhood: 'Maili',
        street: '87-133 Hila Street'
    },
    rooms:{
        bedrooms: 3,
        bathrooms: 1
    },
    price: 450000,
    size: 5000   
},{
    id: 10,
    image: 'https://i.postimg.cc/1tMxjX2b/9.jpg',
    address:{
        region: 'Metro',
        neighbourhood: 'Nuuanu-Lower',
        street: '1946 Pauoa Road A'
    },
    rooms:{
        bedrooms: 2,
        bathrooms: 1
    },
    price: 460000,
    size: 1001   
}
];

function loadData(prop){
    document.querySelector('#properties').innerHTML = '';
    prop.forEach((land)=>{
    let rand = land.price * 15.93
    document.querySelector('#properties').innerHTML += `
            <div>
                <div class="card">
                    <img src="${land.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${land.address.region}, ${land.address.neighbourhood}, ${land.address.street}</h5>
                        <h6 class="card-text">$${land.price}/ R${rand}</h6>
                        <p class="card-text"><i class="fas fa-bed"></i> Bedrooms: ${land.rooms.bedrooms}</p>
                        <p class="card-text"><i class="fa-solid fa-shower"></i> Bathrooms: ${land.rooms.bathrooms}</p>
                        <p class="card-text"><i class="fa-solid fa-drum-steelpan"></i> Land Size: ${land.size} Sqr Metre</p>
                    </div>
                </div>
            </div>
    `
});
}


function budget(event){
    let newProperties = properties.filter(x => {
        return x.price <= event.target.value
    })
    loadData(newProperties)
}
function beds(event){
    console.log(event);
    let newProperties = properties.filter(x => {
        return x.rooms.bedrooms == event.target.value
    })
    loadData(newProperties)
}
function baths(event){
    let newProperties = properties.filter(x => {
        return x.rooms.bathrooms == event.target.value
    })
    loadData(newProperties)
}
function regions(event){
    let newProperties = properties.filter(x => {
        return x.address.region == event.target.value
    })
    loadData(newProperties)
}

loadData(properties);

document.querySelector('#budgetstuff').addEventListener('change',budget);
document.querySelector('#bedFilter').addEventListener('change',beds);
document.querySelector('#bathFilter').addEventListener('change',baths);
document.querySelector('#region').addEventListener('change',regions);


(function addData(){
    localStorage.setItem('land',JSON.stringify(properties));
})();