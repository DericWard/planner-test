// MUST use JQUERY and MOMENT.JS
// let btnID;

let plannerEntries = ['','','','','','','','',''];
plannerEntries.length = 9;

function displayTest(plannerEntries) {
    for(let i = 0; i < 9; i++) {
        console.log("[i]: " + plannerEntries[i]);
        let textAreaDisplay = $(`plannerEntries.${i}`);
        textAreaDisplay.val(`${plannerEntries[i]}`);
        };
};

function savePlannerEntry(btnID, textEntry) {
    plannerEntries[btnID-9] = textEntry;
    localStorage.setItem("plannerEntries", JSON.stringify(plannerEntries));
    displayTest(plannerEntries);
};

// function displayFromLocalStorage() {
//     plannerEntries.forEach(function(plannerText) {
//         //
//     });
// };

function getLocalStorage() {
    plannerEntries = JSON.parse(localStorage.getItem("plannerEntries")) || [];
    // console.log("from getlocal storage: " + plannerEntries);
    if(plannerEntries.length > 0) {
        // displayFromLocalStorage(); 
        };
};

function generateTimeBlocks() { 
    let now = moment().format('H');
    for(let i = '09'; i < 18; i++ ) {
        $(".container").append(`<div class="row time-block"><div class="col-2 hour">${i}:00</div><textarea class="col-8 ${i}" id="text${i}"></textarea><button class="col-2 saveBtn" id="${i}">Save</button></div>`);
        if ((i - now) < 0) {
            $("textarea").addClass("future");
        }
        if ((i - now) === 0) {
            $("textarea").addClass("present");
        }
        else $("textarea").addClass("past");
    };
    getLocalStorage();
};

function displayDateAndClock() {
    $("#currentDay").html(moment().format('dddd LL').toString());
    $("#currentDay").append(`<div id="time"></div>`);
    setInterval(function() {
        $("#time").html(moment().format('HH:mm:ss'));
    }, 1000); 
    generateTimeBlocks();
};

displayDateAndClock();

$("button").click(function() {
    let btnID = $(this).attr("id");
    let textEntry = $(`#text${btnID}`).val();
    savePlannerEntry(btnID, textEntry);
});





