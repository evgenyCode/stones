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
    const response = await fetch('https://64e3a69ebac46e480e790ddd.mockapi.io/stones/2');
    const stone = await response.json();

    console.log(stone);
    addStoneToScreen(stone);
};
getStone();