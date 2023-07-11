// https://fakestoreapi.com/products
function myFunction(){
    
fetch('https://fakestoreapi.com/products').then((data)=>{
    // console.log(data);
    return data.json();
}).then ((completedData)=>{
    // console.log(completedData[2]);

    let  data1="";
    completedData.map((values)=>{
        data1+=`
        <div id="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} alt="img" class="imgscr">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    })

    document.getElementById('cards').innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})
}

