// get input search input value and dynamic url function 
const getPhone = () => {
    const inputField = document.getElementById('search-input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputField}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
    document.getElementById('search-input').value = '';

}

// display phone function 
const displayPhone = (phones) => {
    // search input error handle 
    if (phones.length == 0) {
        document.getElementById('input-error').style.display = "block"
    }

    else {
        document.getElementById('input-error').style.display = "none"
        const phonesDiv = document.getElementById('phones');
        // remove old search result
        phonesDiv.textContent = ''

        // get every phone by forEach 
        phones?.forEach(phone => {
            // console.log(phone)
            const div = document.createElement('div')
            // add class div 
            div.classList.add("col-12", "col-lg-4")
            div.innerHTML = `
                        <div class="card border-0 shadow p-3 rounded mx-auto" style="width:20rem">
                        <img src="${phone.image}" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">${phone.brand} </p>
                            <button onclick="getId('${phone.slug}')" class="btn btn-primary">see more</button>
                            </div>
                        </div>
                        `;
            phonesDiv.appendChild(div)

        })
    }


};

const getId = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayDetails(data.data))

};
const displayDetails =(product)=>{
    console.log(product);
    const detailsDiv = document.getElementById('show-details');
    const div = document.createElement('div');
    div.innerHTML =`
    <div class="card border-0 shadow p-3 rounded mx-auto">
    <img src="${product.image}" class="card-img-top w-50" alt="..." />
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.brand} </p>
        </div>
    </div>
    `;
    
    detailsDiv.appendChild(div)
}