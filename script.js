const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () =>{
    let qrvalue = qrInput.value;
    if(!qrvalue) return;        //if the input is empty then return from here
    generateBtn.innerText = "Generating QR Code...";
    // getting a QR code of user entered value using 'qrserver' api and passing the api returned img src to qrImg 
    qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    qrImg.addEventListener("load", () =>{   //Once QR code image loaded
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code"

    });
});

qrInput.addEventListener("keyup", () =>{
    if(!qrInput.value){
         wrapper.classList.remove("active");
    }
});