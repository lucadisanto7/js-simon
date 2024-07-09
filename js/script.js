document.getElementById('start').addEventListener('click', function() {
    // 1. Generazione dei numeri casuali
    let numeri = [];
    for (let i = 0; i < 5; i++) {
        numeri.push(Math.floor(Math.random() * 100)); // Numeri casuali tra 0 e 99
    }

    // 2. Visualizzazione dei numeri
    document.getElementById('numeri').innerText = numeri.join(', ');

    // 3. Impostazione del timer di 30 secondi
    setTimeout(function() {
        // 4. Rimozione dei numeri
        document.getElementById('numeri').innerText = '';
        
        // 5. Input dell'utente
        let numeriUtente = [];
        for (let i = 0; i < 5; i++) {
            let numero = parseInt(prompt(`Inserisci il numero ${i + 1}`));
            numeriUtente.push(numero);
        }


});