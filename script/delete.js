   function deleteCard(cardId) {

    const card = document.getElementById(cardId);
    card.remove();

     refreshCounters();
    }

    refreshCounters();