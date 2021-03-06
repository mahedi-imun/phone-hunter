// get input search input value and dynamic url function 
const getProducts = () => {
    // show spinner
    document.getElementById('spinner').style.display = 'block'
    const inputField = document.getElementById('search-input').value;
    if (inputField == '') {
        // show empty error
        document.getElementById('empty-input-error').style.display = 'block';
        document.getElementById('spinner').style.display = 'none'
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputField}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayProducts(data.data))
        //clear input
        document.getElementById('search-input').value = '';
        // hide empty input error
        document.getElementById('empty-input-error').style.display = 'none';
    }
}
// display phone function 
const displayProducts = (productAll) => {
    const products = productAll.slice(0, 20)
    if (products.length == 0) {
        // show search input error handle 
        document.getElementById('input-error').style.display = "block"
        // hide spinner
        document.getElementById('spinner').style.display = 'none'
    }
    else {
        // hide search input error handle
        document.getElementById('input-error').style.display = "none"
        // get phone section div
        const phonesDiv = document.getElementById('phones');
        // remove old search result
        phonesDiv.textContent = ''
        // get every phone by forEach 
        products?.forEach(product => {
            const div = document.createElement('div')
            // add class div 
            div.classList.add("col-12", "col-lg-4")
            div.innerHTML = `
            <div class="card border-0 shadow p-3 rounded mx-auto" style="width:20rem">
            <img src="${product.image}" class="card-img-top" alt="..." />
                 <div class="card-body">
                    <h5 class="card-title">${product.phone_name}</h5>
                    <p class="card-text">${product.brand} </p>
                    <button onclick="getId('${product.slug}')" class="btn btn-primary">see more</button>
                </div>
            </div>
            `;
            phonesDiv.appendChild(div)
            // hide spinner
            document.getElementById('spinner').style.display = 'none'
        })
    }
};
// get product id dynamic url function
const getId = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.data))

};


// display product details function
const displayDetails = (product) => {
    const detailsDiv = document.getElementById('show-details');
    detailsDiv.textContent = '';
    const div = document.createElement('div');
    div.classList.add("row", "shadow")
    div.innerHTML = `
    <div class="p-3 col-12  col-lg-6 ">
        <h3 class="card-text">${product.name} </h3>
        <h5 class="text-danger">${product.releaseDate ? product.releaseDate : 'release date not found'}</h5>
        <h5 class="card-text"> Brand: ${product.brand} </h5>
        <img src="${product.image}" class="card-img-top" alt=""/>
    </div>
    <div class=" p-3 col-12 col-lg-6 ">
         <ul class="list-group">
            <h5 class="text-center text-info">Main Features</h5>
            <li class="list-group-item"><h6 class="card-text">ChipSet: ${product.mainFeatures.chipSet} </h6></li>
            <li class="list-group-item"><h6 class="card-text">Display: ${product.mainFeatures.displaySize} </h6></li>
            <li class="list-group-item"><h6 class="card-text">Memory: ${product.mainFeatures.memory} </h6></li>
         </ul>
         
         <ul class="list-group">
            <h5 class="text-center text-info">Sensor Information</h5>
            <li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[0] ? product.mainFeatures.sensors[0] : 'sensors not found'} </h6></li>
            <li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[1] ? product.mainFeatures.sensors[1] : 'sensors not found'} </h6></li>
            <li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[2] ? product.mainFeatures.sensors[2] : 'sensors not found'} </h6></li>
            <li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[3] ? product.mainFeatures.sensors[3] : 'sensors not found'} </h6></li>
            <li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[4] ? product.mainFeatures.sensors[4] : 'sensors not found'} </h6></li>
            <li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[5] ? product.mainFeatures.sensors[5] : 'sensors not found'} </h6></li>
         </ul>

         <ul class="list-group">
            <h5 class="text-center text-info"> Others Information </h5>
            <li class="list-group-item"><h6 class="card-text">Bluetooth: ${product.others?.Bluetooth ? product.others.Bluetooth : 'Bluetooth not found'} </h6></li>
            <li class="list-group-item"><h6 class="card-text">GPS: ${product.others?.GPS ? product.others.GPS : 'gps not found'} </h6></li>
            <li class="list-group-item"><h6 class="card-text">Radio: ${product.others?.Radio ? product.others.Radio : 'radio not found'} </h6></li>
            <li class="list-group-item"><h6 class="card-text">USB: ${product.others?.USB ? product.others.USB : 'usb not found'} </h6></li>
            <li class="list-group-item"><h6 class="card-text">WLAN: ${product.others?.WLAN ? product.others.WLAN : 'wlan not found'} </h6></li>
         </ul>
    </div>
    `;
    detailsDiv.appendChild(div);
};