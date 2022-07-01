let properties = JSON.parse(localStorage.getItem('land')); 

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