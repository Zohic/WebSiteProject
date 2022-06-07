const form = document.getElementById("myForm");
const submitForm = document.getElementById("orderForm");
submitForm.addEventListener('submit', SubmitOrder);

var selectedService = 0;

function SubmitOrder(e) {
    e.preventDefault();
    const inputs = submitForm.getElementsByTagName("input");
     
    const bodyToSend = JSON.stringify({
        "email": inputs[0].value,
        "phone": inputs[1].value,
        "name": inputs[2].value,
        "service": selectedService
    });
    console.log(bodyToSend);

    fetch("/submit-order", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: bodyToSend
    }).then(res => res.text()).then(res => console.log(res));

}

services = [];
servConts = document.getElementsByClassName("service_container");
for (let i = 0; i < servConts.length; i++) {
    const img = servConts[i].getElementsByTagName("img").src
}



function MakeOrder(serviceId) {
    selectedService = serviceId;
    form.style.display = "block";

}

function closeForm() {
    form.style.display = "none";
}

fetch("/get-services", {
    method: "GET",
    headers: {}
}).then(res => res.json()).then(res => console.log(res));