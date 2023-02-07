
const product = [
    {
        id: 0,
        image: 'IMG-4384.jpg',
        title: 'dresses',
        price: 30,
    },
    {
        id: 1,
        image: 'IMG-4388.jpg',
        title: 'dresses',
        price: 50,
    },
    {
        id: 2,
        image: 'IMG-4390.jpg',
        title: 'dresses',
        price: 20,
    },
    {
        id: 3,
        image: 'IMG-4391.jpg',
        title: 'dresses',
        price: 40,
    },
    {
        id: 4,
        image: 'IMG-4392.jpg',
        title: 'dresses',
        price: 50,
    },
    {
        id: 5,
        image: 'IMG-4395.jpg',
        title: 'dresses',
        price: 35,
    },
    {
        id: 6,
        image: 'IMG-4399.jpg',
        title: 'dresses',
        price: 55,
    },
    {
        id: 7,
        image: 'IMG-4403.jpg',
        title: 'dresses',
        price: 25,
    },
    {
        id: 8,
        image: 'IMG-4406.jpg',
        title: 'dresses',
        price: 40,
    },
    {
        id: 9,
        image: 'IMG-4409.jpg',
        title: 'dresses',
        price: 55,
    },
    {
        id: 10,
        image: 'IMG-4409.jpg',
        title: 'dresses',
        price: 35,
    },
    {
        id: 11,
        image: 'IMG-4412.jpg',
        title: 'dresses',
        price: 20,
    },
    {
        id: 12,
        image: 'IMG-4417.jpg',
        title: 'dresses',
        price: 45,
    },
    {
        id: 13,
        image: 'IMG-4419.jpg',
        title: 'dresses',
        price: 60,
    },
    {
        id: 14,
        image: 'IMG-4421.jpg',
        title: 'dresses',
        price: 65,
    }
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
            <h2>$ ${price}.00</h2>` +
            "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
            `</div>
            </div>`
    )
}).join('')

var cart =[];

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a) {
    let j = 0, total = 0;
    if(cart.length==0) {
        document.getElementById('cartItem').innerHTML = "Your Cart is Empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}