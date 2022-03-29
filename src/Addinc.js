(function () {


    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    // let selectYear = document.getElementById("year");
    // let selectMonth = document.getElementById("month");
    let selectedDay = "";

    let calenderPrev = document.getElementsByClassName("main-calender-prev")[0];
    let calenderNext = document.getElementsByClassName("main-calender-next")[0];

    let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let monthAndYear = document.getElementById("monthAndYear");
    showCalendar(currentMonth, currentYear);

    const next = () => {
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        showCalendar(currentMonth, currentYear);
    }

    const previous = () =>  {
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        showCalendar(currentMonth, currentYear);
    }

    calenderNext.addEventListener("click", next);
    calenderPrev.addEventListener("click", previous);

    const showCalendar= (month, year) => {

        let firstDay = (new Date(year, month)).getDay();

        tbl = document.getElementById("calendar-body"); // body of the calendar

        // clearing all previous cells
        tbl.innerHTML = "";

        // filing data about month and in the page via DOM.
        monthAndYear.innerHTML = months[month] + " " + year;
        // selectYear.value = year;
        // selectMonth.value = month;

        // creating all cells
        let date = 1;
        for (let i = 0; i < 6; i++) {
            // creates a table row
            let row = document.createElement("tr");

            //creating individual cells, filing them up with data.
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    cell = document.createElement("td");
                    cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else if (date > daysInMonth(month, year)) {
                    break;
                } else {
                    cell = document.createElement("td");
                    cellText = document.createTextNode(date);
                    if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                        cell.classList.add("bg-info");
                    } // color today's date
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    date++;
                }
            }
            tbl.appendChild(row); // appending each row into calendar body.
        }

        let selectDay = document.getElementsByTagName("td");
        for(let i = 0; i < selectDay.length; i++) {
            selectDay[i].addEventListener("click", () => {
                for(let i = 0; i < selectDay.length; i++) {
                    selectDay[i].style.backgroundColor = "#F1F1F4";
                }
                if(this.innerText !== "") {
                    this.style.backgroundColor = "#7C4CE0";
                    this.style.borderBottom = "20px solid #F1F1F4";
                    selectedDay = (selectedDay.length > 0) ? "" : selectedDay;
                    selectedDay += "" + this.innerText + " " + months[currentMonth] + " " + currentYear;
                }
            });
        }
    }


    // check how many days in a month code from https://dzone.com/articles/determining-number-days-month
    const daysInMonth = (iMonth, iYear) => {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }
})

();

