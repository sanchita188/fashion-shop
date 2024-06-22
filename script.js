const product = [
    {
        id:0,
        image: 'dress1.jpeg',
        title: 'Women green printed oversized t-shirt',
        price: 380,
    },
    {
        id: 1,
        image: 'dress2.jpeg.png',
        title: 'Women Pink Pure Cotton Solid A-Line Dress',
        price: 543,
    },
    {
        id:2,
        image: 'dress3.jpeg',
        title: 'Brandit men Vintage Shirt',
        price: 479,
    },
    {
        id: 3,
        image: 'dress4.jpeg.png',
        title: 'Girls Casual Pink Net Frock Dress',
        price: 472,
    },
    {
        id: 4,
        image: 'dress5.jpeg',
        title: 'Women Pure Cotton Cropped Smart Casual Trousers',
        price: 1242,
    },
    {
        id: 5,
        image: 'dress6.jpeg',
        title: 'Henley Neck Short Sleeves Oversized Cotton T-shirt',
        price: 1242,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
            <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')

    var cart =[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }

    function displaycart(a){
        let j=0;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((item)=>
            {
                var {image, title, price} = item;
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>]
                    <h2 style='font-size: 15px;'$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclinc='delElement("+ (j++) +")'></i></div>"
                )
        })
    }
}
