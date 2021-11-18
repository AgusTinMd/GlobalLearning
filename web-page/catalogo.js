window.addEventListener('DOMContentLoaded',() => {
    console.log("Pagina Cargada");

    const orderbutton = document.querySelectorAll('button[data-order]')
    orderbutton.forEach(item => {
        item.addEventListener('click', (event)=> {
             const button=event.currentTarget;
             const container = button.parentNode;
             let order = 
             {
                 title: container.querySelector('.elementinformation').innerText, 
                 price: container.querySelector('.price').innerText,
                 id: button.getAttribute('data-order')
            }
            localStorage.setItem("order", JSON.stringify(order));
            const url = window.location.href.replace("catalogo.html", "order.html");
            window.location.href = url;
        });
    })
   
});
 /*
 
    */