
const totalCount=document.getElementById('total-count');
const interviewCount =document.getElementById('interview-count');
const rejectCount=document.getElementById('reject-count');
const selectedCount =document.getElementById('selected-count');
const noJobs= document.getElementById('no-jobs');


const btnAll =  document.getElementById("filter-all");
const btnInterview  =document.getElementById("filter-interview");
const btnRejected  =document.getElementById("filter-rejected");

let activeFilter ='all';

function refreshCounters(){
    const cards =document.querySelectorAll(".card");
    let total= 0;
    let interview= 0;
    let rejected= 0;
    let visible= 0;

    for (let card of cards){
            total++;
         if(card.dataset.status === "interview"){
             interview++;} 
         if(card.dataset.status === "rejected") {
             rejected++;
            } 
         if(!card.hidden){
             visible++;
    } 
 }

    totalCount.innerText = total;     
    interviewCount.innerText = interview; 
    rejectCount.innerText = rejected;   
    if (activeFilter==='all'){
    selectedCount.innerText = visible;
    }
     else {
    selectedCount.innerText = visible + " of " + total;
    }

    if(visible===0){
        noJobs.classList.remove("hidden");
    }
    else{
        noJobs.classList.add("hidden");
    }
 }
 function filterCards(filter){
    activeFilter = filter;

    const cards = document.querySelectorAll(".card");
    for (let card of cards){
        if(filter==='all'|| card.dataset.status === filter ){
            card.hidden = false;
        }
        else{
            card.hidden = true;
        }
    }

    const allFilterBtns = [btnAll, btnInterview, btnRejected];
    for(let btn of allFilterBtns){
        btn.className = "btn bg-white gray-font w-[80px]";
    }
    if (filter === "all") btnAll.className = "btn btn-primary w-[80px]";
    if (filter === "interview") btnInterview.className = "btn btn-primary w-[80px]";
    if (filter === "rejected")  btnRejected.className  = "btn btn-primary w-[80px]";

    refreshCounters();

}

    btnAll.addEventListener("click",function(){ filterCards("all"); });
    btnInterview.addEventListener("click",function(){ filterCards("interview"); });
    btnRejected.addEventListener("click",  function(){ filterCards("rejected"); });
 
    
 