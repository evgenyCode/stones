const stoneFormButton = document.getElementById('stones-button');

stoneFormButton.addEventListener ("click", async ()=>{
    const stoneTitle = document.getElementById('stone-title').value;
    const stonePrice = document.getElementById('stone-price').value;
    const stoneDescription = document.getElementById('stone-description').value;
    const stoneImage = document.getElementById('stone-image').value;


    if (!stoneTitle || isNaN(stonePrice) || !stoneDescription || !stoneImage) {
        const messageWrapper = document.getElementById('response-message');
        messageWrapper.innerHTML = "All fields must be filled.";
        return;
    }


    
    
    const stone = {
        "title": stoneTitle,
        "price": stonePrice,
        "description": stoneDescription,
        "img_url": stoneImage,
       }

       try{
       const response = await fetch('https://64e3a69ebac46e480e790ddd.mockapi.io/stones',{
    method: 'POST',
    headers:{
        Accept: "application/json",
         "Content-Type": "application/json"
    },
    body: JSON.stringify(stone)
})
const data = await response.json();

if(data){

const messageWrapper = document.getElementById('response-message');
messageWrapper.innerHTML = "Stone was inserted"

    setTimeout(()=>{window.location.replace("index.html")

    },3000)
}


       }
       catch(err) {
       console.log('err', err)
       const messageWrapper = document.getElementById('response-message');
messageWrapper.innerHTML = "ERROR!!!"
       }

})
