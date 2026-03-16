let products = [

{
title:"Wireless Headphones",
owner:"Sony",
price:"$120",
image:"https://pk.hellofaster.com/cdn/shop/files/FASTER-S5-ANC-Over-Ear-Wireless-Headphones-with-Active-Noise.png?v=1769166448&width=1946"
},

{
title:"Smart Watch",
owner:"Samsung",
price:"$95",
image:"https://cdn.shopify.com/s/files/1/0560/1201/3615/files/maxima_480x480.jpg?v=1695193873"
},

{
title:"Gaming Mouse",
owner:"Logitech",
price:"$45",
image:"https://dlcdnwebimgs.asus.com/gain/1F5AFFA6-D3DC-42CA-B37D-03DAAE123012/w750/h470/fwebp"
},

{
title:"Mechanical Keyboard",
owner:"Razer",
price:"$150",
image:"https://c1.neweggimages.com/productimage/nb640/32N-00EG-00002-S01.jpg"
},

{
title:"Bluetooth Speaker",
owner:"JBL",
price:"$70",
image:"https://i.guim.co.uk/img/media/c6af49070512c0a410854a21ccc278910fb23d8b/0_179_5386_3234/master/5386.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=41d3d323639ba9ab3970ca4774b15206"
},

{
title:"Laptop",
owner:"HP",
price:"$800",
image:"https://sm.pcmag.com/pcmag_au/photo/a/asus-proar/asus-proart-p16_wkez.jpg"
}

];

let container = document.getElementById("productContainer");

products.forEach(product => {

container.innerHTML += `

<div class="card">

<img src="${product.image}">

<div class="card-content">

<h2 class="title">${product.title}</h2>

<p class="owner">Owner: ${product.owner}</p>

<p class="price">${product.price}</p>

<button>Buy Now</button>

</div>

</div>

`;

});