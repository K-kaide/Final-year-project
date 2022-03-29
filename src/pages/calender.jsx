import React from 'react'
import './calender.css'

function calender() {




let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let selectedDay = "";

let calenderPrev = document.getElementsByClassName("main-calender-prev")[0];
let calenderNext = document.getElementsByClassName("main-calender-next")[0];

let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

calenderNext.addEventListener("click", next);
calenderPrev.addEventListener("click", previous);

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();

    // let tbl = document.getElementById("calendar-body");
    let tbl1 = document.querySelector(".calendar-body");

    // clearing all previous cells
    tbl1.innerHTML = "";

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
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        tbl1.appendChild(row); // appending each row into calendar body.
    }

    let selectDay = document.getElementsByTagName("td");
    for(let i = 0; i < selectDay.length; i++) {
        selectDay[i].addEventListener("click", function () {
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
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}


































  

  return (
<main>
        <h2>Add Income</h2>
        <input class="income-input" placeholder="Enter Amount" type="text" name="amount" />
        <section class="main-app">
     <div class="main-calender-app">
        <div class="main-calender-header">
            <span id="monthAndYear" class="main-calender-month"></span>
            <div>
                <span class="calender-button main-calender-prev">&lt;</span>
                <span class="calender-button main-calender-next">&gt;</span>
            </div>
        </div>
        <table>
            <thead>
                <th>Su</th>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
            </thead>
            <tbody className='calendar-body' id="calendar-body">
                <tr class="main-calender-week-one">
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                </tr>
                <tr class="main-calender-week-two">
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                </tr>
                <tr class="main-calender-week-three">
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                </tr>
                <tr class="main-calender-week-four">
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                </tr>
                <tr class="main-calender-week-five"></tr>
            </tbody>
        </table>
     </div>
        </section>
        <button class="btn">Add Income</button>
        
    </main>

  )
}

export default calender