// get input search input value and dynamic url function 
const getPhone = () => {
    const inputField = document.getElementById('search-input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputField}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}

// display phone function 
const displayPhone = (phones) => {
    // get html phones section div 
    const phonesDiv = document.getElementById('phones');

    // get every phone by forEach 
    phones.forEach(phone => {
        const div = document.createElement('div')
        // add class div 
        div.classList.add("col-12","col-lg-4")
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

};

const  getId =(id)=>{
    console.log(id)

}