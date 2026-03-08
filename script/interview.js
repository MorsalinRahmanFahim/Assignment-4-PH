
    function setInterview(cardId) {

     const card  = document.getElementById(cardId);
     const badge = document.getElementById("badge" + cardId.slice(4));

    if (card.dataset.status === "interview") {
    card.dataset.status = "not-applied";
    badge.innerText     = "NOT APPLIED";
    badge.className     = "status-badge badge py-4 bg-primary-content text-[#002c5c]";

     } else {
    card.dataset.status = "interview";
    badge.innerText     = "INTERVIEW";
    badge.className     = "status-badge badge  py-4 bg-green-500 border-0 shadow-lg shadow-green-300/50 text-white";
    }

    filterCards(activeFilter);
    }