const stonesWrapper = document.getElementById('stones-wrapper');

const getAllStones = async () => {
    const response = await fetch('https://64e3a69ebac46e480e790ddd.mockapi.io/stones');
    const stones = await response.json();

    stones.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    return priceA - priceB;
});

stones.forEach(stone => {
    const wrapper = document.createElement('a');
    wrapper.setAttribute('class', 'stone-wrapper');
    wrapper.href = "./stone.html";
    wrapper.addEventListener('click', () => {
        localStorage.setItem('stoneId', stone.id);
    });

    const title = document.createElement('h1');
    title.innerHTML = stone.title;

    const price = document.createElement('h3'); 
    price.innerHTML = stone.price + " €/M2";

    const description = document.createElement('p'); 
    description.innerHTML = stone.description; 

    const image = document.createElement('img');
    image.setAttribute('class', 'stone-image');
    image.src = stone.img_url;

    wrapper.append(image);
    wrapper.append(title);
    wrapper.append(price);
    wrapper.append(description);

    stonesWrapper.append(wrapper);
});
  }
  
  getAllStones();