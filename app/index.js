const dice = document.getElementById('dice');
let adviceNumber = document.getElementById('adviceNumber');
let adviceMessage = document.getElementById('adviceMessage');


function getFetch() {
    fetch('https://api.adviceslip.com/advice')
        .then(res =>  {
            
            if(!res.ok) {
                throw Error('Error');
            }
            return res.json()
        })
        .then(data => {
            adviceNumber.innerHTML = data.slip.id;
            adviceMessage.innerHTML = data.slip.advice;
        }).catch(err => {
            console.log(err)
        });

    
}

getFetch();

dice.onclick = function() {
    getFetch();
}