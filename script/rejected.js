function setRejected(cardId) {

  const card  = document.getElementById(cardId);
  const badge = document.getElementById("badge" + cardId.slice(4)); //{card-1 start sliceing after -}

  if (card.dataset.status === "rejected") {
    card.dataset.status = "not-applied";
    badge.innerText     = "NOT APPLIED";
    badge.className     = "status-badge badge py-4 bg-primary-content text-[#002c5c]";

  } else {
    card.dataset.status = "rejected";
    badge.innerText     = "REJECTED";
    badge.className     = "status-badge badge py-4 bg-red-600 text-white border-0 shadow-lg shadow-red-500/50";
  }

  filterCards(activeFilter);

}

