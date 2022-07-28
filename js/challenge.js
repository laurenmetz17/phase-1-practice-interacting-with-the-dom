let counting = true;
let counter = document.querySelector("#counter");
let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let like = document.querySelector('#heart');
let likeCounter = {};
let pause = document.querySelector('#pause');
let submit = document.querySelector('#submit');

minus.addEventListener('click', handleMinus);
plus.addEventListener('click', handlePlus);
like.addEventListener('click', handleLike);
pause.addEventListener('click', handlePause);
submit.addEventListener('click', handleSubmit);

//start counting
let counts = setInterval(count,1000);

function count() {
    current = parseInt(counter.textContent,10);
    counter.textContent = current + 1;

}

function handleMinus() {
    if(counting == true) {
        current = parseInt(counter.textContent,10);
        counter.textContent = current - 1;
    }
    else {
        ;
    }
}

function handlePlus() {
    if(counting == true) {
        current = parseInt(counter.textContent,10);
        counter.textContent = current + 1; 
    }
    else {
        ;
    }
}

function handleLike() {
    if(counting == true) {
        let current = counter.textContent;
        let count = 0;
        let newCount = 0;
        if(likeCounter[current] == undefined) {
            likeCounter[current] = {}
            likeCounter[current].count = 1; 
            likeCounter[current].newLike = document.createElement('li');
            likeCounter[current].newLike.textContent = `${current} was liked 1 time`
            document.querySelector('.likes').append(likeCounter[current].newLike);
        }
        else {
            likeCounter[current].count = parseInt(likeCounter[current].count,10) + 1;
            likeCounter[current].newLike.textContent = `${current} was liked ${likeCounter[current].count} times`
        }
    }
    else {
        ;
    }

}
 
function handlePause() {
    if(counting == true) {
        clearInterval(counts);
        counting = false;
        pause.textContent = 'resume'
    }
    else if( counting == false) {
        counts = setInterval(count,1000);
        counting = true;
        pause.textContent = 'pause'
    }

}

function handleSubmit(event) {
    event.preventDefault();
    let comments = document.querySelector('.comments');
    let comment = document.createElement('li');
    comment.textContent = event.target.parentNode.children[0].value;
    event.target.parentNode.children[0].value = ''
    comments.append(comment);

}