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
                    <div class="col-md-1">
                        <p>${land.id}</p>
                    </div>
                    <div class="col-md-4 text-start">
                    <p>${land.address.region}/${land.address.neighbourhood}/${land.address.street}</p>
                    </div>
                    <div class="col-md-2">
                    <p>$${land.price}/ R${rand}</p>
                    </div>
                    <div class="col-md-1">
                    <p>${land.rooms.bedrooms}</p>
                    </div>
                    <div class="col-md-1">
                    <p>${land.rooms.bathrooms}</p>
                    </div>
                    <div class="col-md-1">
                    <p>${land.size}</p>
                    </div>
                    <div class="col-md-2">
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
let ids= 0

function editRecord(id){
    let newland = properties.find(edt => edt.id -1 === id)
    document.querySelector('#region2').value = newland.address.region;
    document.querySelector('#nhood2').value = newland.address.neighbourhood;
    document.querySelector('#street2').value = newland.address.street;
    document.querySelector('#urlimg2').value = newland.image;
    document.querySelector('#bedNumb2').value = newland.rooms.bedrooms;
    document.querySelector('#bathNumb2').value = newland.rooms.bathrooms;
    document.querySelector('#price2').value = newland.price;
    document.querySelector('#landsize2').value = newland.size;
    ids = id;
}

function editAdd(){
    let newProp = JSON.parse(localStorage.getItem('land'));
    let newland = newProp.find(edt => edt.id -1 === ids)
    let region = document.querySelector('#region2').value;
    let neighbour = document.querySelector('#nhood2').value;
    let street = document.querySelector('#street2').value;
    let image = document.querySelector('#urlimg2').value;
    let beds = document.querySelector('#bedNumb2').value;
    let baths = document.querySelector('#bathNumb2').value;
    let price = document.querySelector('#price2').value;
    let landsize = document.querySelector('#landsize2').value;

    // console.log(region);
    // console.log(newProp);
    // console.log(newland);

    newland.address.region = region;
    newland.address.neighbourhood = neighbour;
    newland.address.street = street;
    newland.image = image;
    newland.rooms.bedrooms = beds;
    newland.rooms.bathrooms = baths;
    newland.price = price;
    newland.size = landsize;

    let prop = newland;
    properties[ids] = prop;
    localStorage.setItem('land',JSON.stringify(properties));
    loadData(properties);
}

document.querySelector('#editProperty').addEventListener('click',editAdd);