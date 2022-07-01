let properties = JSON.parse(localStorage.getItem('land'));

document.querySelector('#total').innerHTML = properties.length;

console.table(properties);

function loadData(prop){
    document.querySelector('#properties').innerHTML = '';
    prop.forEach((land,index=0)=>{
    let rand = land.price * 15.93
    document.querySelector('#properties').innerHTML += `
            <div id="${index}">
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
                    <i class="fa-solid fa-pen-to-square" onclick="editRecord(${index})" data-bs-toggle="modal" data-bs-target="#Modal2"></i>
                    <i class="fa-solid fa-trash" onclick="deleteRecord(${index})"></i>
                    </div>
                </div>
            </div>
    `
});
}

loadData(properties);

function modalAdd(){
    let region = document.querySelector('#region').value;
    let neighbour = document.querySelector('#nhood').value;
    let street = document.querySelector('#street').value;
    let image = document.querySelector('#urlimg').value;
    let beds = document.querySelector('#bedNumb').value;
    let baths = document.querySelector('#bathNumb').value;
    let price = document.querySelector('#price').value;
    let landsize = document.querySelector('#landsize').value;

    properties.push(
        {
            id: properties.length+1,
            image: image,
            address:{
                region: region,
                neighbourhood: neighbour,
                street: street
            },
            rooms:{
                bedrooms: beds,
                bathrooms: baths
            },
            price: price,
            size: landsize
        }
    )
    localStorage.setItem('land',JSON.stringify(properties));
    loadData(properties);
}

document.querySelector('#addRecord').addEventListener('click',modalAdd);

function editRecord(id){
    let newland = properties.find(edt => edt.id -1 === id)
    let key = prompt('Enter the key value');
    console.log(newland.price);
    console.log(newland[key]);

}