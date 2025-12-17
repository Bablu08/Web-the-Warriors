// browser alert


// nav bar


// card-sliding
const cardContainer = document.getElementById('cardContainer');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

scrollLeft.addEventListener('click', function(){
    cardsContainer.scrollBy({
        left:-320,
        behaviour:'smooth'
    })
})

scrollRight.addEventListener('click', function(){
    cardsContainer.scrollBy({
        left:320,
        behaviour:'smooth'
    })
})

// 