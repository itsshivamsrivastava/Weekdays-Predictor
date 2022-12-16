const dateInput = document.getElementById('date');
const button = document.getElementById('button');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    let date = dateInput.value;
    let dateArray = date.split('-');
    let year = dateArray[0];
    lastTwoDigitOfYear = year[2] + year[3];

    let weekdays = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    };

    let monthCode = {
        '01': 0,
        '02': 3,
        '03': 3,
        '04': 6,
        '05': 1,
        '06': 4,
        '07': 6,
        '08': 2,
        '09': 5,
        '10': 0,
        '11': 3,
        '12': 5
    };

    let yearCode = {
        '1600-1699': 6,
        '1700-1799': 4,
        '1800-1899': 2,
        '1900-1999': 0,
        '2000-2099': 6,
        '2100-2199': 4,
        '2200-2299': 2
    };

    let yearChoose = (selectedYear) => {
        if(selectedYear >= 1600 && selectedYear <= 1699) {
            return yearCode['1600-1699'];
        }
        else if(selectedYear >= 1700 && selectedYear <= 1799) {
            return yearCode['1700-1799'];
        }
        else if(selectedYear >= 1800 && selectedYear <= 1899) {
            return yearCode['1800-1899'];
        }
        else if(selectedYear >= 1900 && selectedYear <= 1999) {
            return yearCode['1900-1999'];
        }
        else if(selectedYear >= 2000 && selectedYear <= 2099) {
            return yearCode['2000-2099'];
        }
        else if(selectedYear >= 2100 && selectedYear <= 2199) {
            return yearCode['2100-2199'];
        }
        else if(selectedYear >= 2200 && selectedYear <= 2299) {
            return yearCode['2200-2299'];
        }
    };

    let calculationForDay = parseInt(lastTwoDigitOfYear) + parseInt(lastTwoDigitOfYear/4) + parseInt(dateArray[2]) + monthCode[dateArray[1]] + yearChoose(dateArray[0]);
    let day = calculationForDay % 7;

    if(parseInt(year) < 1600){
        result.innerHTML = 'Please enter the year greater than 1600';
    }
    else if(parseInt(year) >= 2300){
        result.innerHTML = 'Please enter the year less than 2299';
        // result.innerHTML = 'Please enter the date between 1600 and 2299';
    }
    else if(parseInt(year) >= 1600 && parseInt(year) <=2299){
        result.innerHTML = `The day is ${weekdays[day]}`;
    }
});

function clrscr(){
    document.getElementById("result").innerHTML="Your result will display here";
    document.getElementById("date").value="";
}