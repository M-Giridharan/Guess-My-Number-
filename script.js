let secretNumber = 10;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.fieldnumber').value);

    if(!guess){
        document.querySelector('.result').textContent = 'Oops,There is no Number 😪';
    }

    else if(guess === secretNumber){
        document.querySelector('.result').textContent = '🎉Correct Number';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30em';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;   
        }
    }

    else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.result').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.result').textContent = '😑You lost the game';
            document.querySelector('.score').textContent = 0;
        }
        
    }

    else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.result').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.result').textContent = '😑You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.result').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('number').style.width = '15em';
});