let properties = JSON.parse(localStorage.getItem('land'));

document.querySelector('#total').innerHTML = properties.length;

console.table(properties);

function loadData(prop){
    prop.forEach((land)=>{
    let rand = land.price * 15.93
    document.querySelector('#properties').innerHTML += `
            <div>
                <div class="row">
                    <div class="col-1">
                        <p>${land.id}</p>
                    </div>
                    <div class="col-4 text-start">
                    <p>${land.address.region}/${land.address.neighbourhood}/${land.address.street}</p>
                    </div>
                    <div class="col-2">
                    <p>$${land.price}/ R${rand}</p>
                    </div>
                    <div class="col-1">
                    <p>${land.rooms.bedrooms}</p>
                    </div>
                    <div class="col-1">
                    <p>${land.rooms.bathrooms}</p>
                    </div>
                    <div class="col-1">
                    <p>${land.size}</p>
                    </div>
                    <div class="col-2">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
    `
});
}

loadData(properties);