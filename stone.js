const stoneId = localStorage.getItem('stoneId');
const deleteButton = document.getElementById('delete-button')

console.log('stoneId', stoneId);



const addStoneToScreen = (stone)=>{
    const title = document.getElementById ('stone-title');
    title.innerHTML = stone.title;
    const price = document.getElementById ('stone-price');
    price.innerHTML = stone.price;
    const description = document.getElementById ('stone-description');
    description.innerHTML = stone.description;
    const stoneImage = document.getElementById('stone-page-image');
stoneImage.src = stone.img_url;



}





const getStone = async () => {
    const response = await fetch('https://64e3a69ebac46e480e790ddd.mockapi.io/stones/' + stoneId );
    const stone = await response.json();

    
    addStoneToScreen(stone);
};
getStone();


deleteButton.addEventListener ('click', async()=>{

    try{
    
    const response = await fetch('https://64e3a69ebac46e480e790ddd.mockapi.io/stones/' + stoneId,
    {
    method: 'DELETE',
   
})
const data = await response.json();

if(data){
    const infoMessage = document.getElementById('info-message');
    infoMessage.innerHTML = 'Stone was deleted';
    setTimeout(()=>{window.location.replace("index.html")

    },3000);
}
    }
    catch(err) {
        console.log('err', err)
        const infoMessage = document.getElementById('info-message');
 infoMessage.innerHTML = "ERROR!!! Stone was not deleted"
        }
    });
