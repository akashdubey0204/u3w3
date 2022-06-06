
 const api_url ="https://masai-vouchers-api.herokuapp.com/api/vouchers";


async function getapi(url) {
 

 const response = await fetch(url);
 
 
 var data = await response.json();
 console.log(data);
 if (response) {
   hideloader();
 }
 show(data);
}

getapi(api_url);


function hideloader() {
 document.getElementById('loading').style.display = 'none';
}

function show(data) {
 let tab = '';
 

 for (let r of Object.keys(data)) {
   tab += `<div class="voucher">
                       <img src="${r.image}" >
                       <h2>${r.name}</h2>
                       <div class="price">${r.price}</div>
                   </div>`;
 }

 document.getElementById("voucher").innerHTML = tab;
}
