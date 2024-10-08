function rollDice() {

    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages  = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++)
    {
        const val = Math.trunc(Math.random() * 6 + 1);
        values.push(val);
        images.push(`<img src="images/${val}.PNG" alt ='Dice ${val}'> `);
    }
    diceResult.textContent = ` dice : ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');
}

