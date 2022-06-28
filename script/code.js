let properties = [
    {
    id: 1,
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
}
];

properties.forEach((land,index)=>{
    localStorage.setItem('land',JSON.stringify(properties));
    console.table(index);
    let rand = land.price * 15.93
    document.querySelector('#properties').innerHTML += `
            <div>
                <div class="card">
                    <img src="../assets/${index}.jpg" class="card-img-top" alt="...">
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

(function addData(){
    localStorage.setItem('land',JSON.stringify(properties));
})();