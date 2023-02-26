// **** MUST use JQUERY and MOMENT.JS **** \\
let plannerEntries = [];

function displayFromLocalStorage() {    // get from LS, if not empty write contents to textarea(s) using array index and textarea index
    plannerEntries = JSON.parse(localStorage.getItem("plannerEntries")) || [];
    if(plannerEntries.length > 0) {
        for(let i = 0; i < 9; i++) {
            if((plannerEntries[i] == null) || (plannerEntries[i] == undefined)) { // prevent 'null' or 'undefined' being displayed on first load
                $('textarea').eq(i).val("");
            }
            else {
                let textAreaDisplay = $('textarea').eq(i);
                textAreaDisplay.val(`${plannerEntries[i]}`);
            };
        };
    };
};

function savePlannerEntry(btnID, textEntry) {   // use the button-ID to determine the index for the text to be stored
    plannerEntries[btnID-9] = textEntry;
    localStorage.setItem("plannerEntries", JSON.stringify(plannerEntries));
};

function generateTimeBlocks() {     // create time-block sections, label the hour, and make buttons. Colour the block according to the time
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
    displayFromLocalStorage();
};

function displayDateAndClock() {    // create a reali time clock that updates every second
    $("#currentDay").html(moment().format('dddd LL').toString());
    $("#currentDay").append(`<div id="time"></div>`);
    setInterval(function() {
        $("#time").html(moment().format('HH:mm:ss'));
    }, 1000); 
    generateTimeBlocks();
};

displayDateAndClock();  // call the clock and get the process of drawing the page started

$("button").click(function() {  // listen for any buttons to be clicked, obtain the ID and the text from the textarea referenced by the button ID
    let btnID = $(this).attr("id");
    let textEntry = $(`#text${btnID}`).val();
    savePlannerEntry(btnID, textEntry);
});





