// =======================
// The Alert box
// =======================
let alertBanner = document.querySelector('#alert');

alertBanner.innerHTML = `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
`;
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});

// =======================
// The Traffic Graph
// =======================
let trafficCanvas = document.querySelector('#traffic-chart');
let numbers = [
    750,
    1250,
    1000,
    2000,
    1500,
    1750,
    1250,
    1850,
    2250,
    1500,
    2500
];
let trafficData = {
    labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31"
    ],
    datasets: [{
        data: numbers,
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1
    }]
};
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// =======================
// The Bar Graph
// =======================
const dailyCanvas = document.querySelector('#daily-chart');
const dailyData = {
    labels: [
        "M",
        "T",
        "W",
        "T",
        "F",
        "S",
        "S"
    ],
    datasets: [{
        label: '# of Hits',
        data: [
            75,
            115,
            175,
            125,
            225,
            200,
            100
        ],
        backgroundColor: '#7477bf',
        borderWidth: 1
    }]
};
const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// =======================
// The Doughnut Graph
// =======================
const mobileCanvas = document.querySelector('#mobile-chart');
const mobileData = {
    labels: [
        "Desktop",
        "Tablet",
        "Phones"
    ],
    datasets: [{
        label: '# of Users',
        data: [
            2000,
            550,
            500
        ],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '51B6C8'
        ]
    }]
};
const mobileOptions = {
    plugins: {
        legend: {
            position: "right",
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// =======================
// The Messaging Section
// =======================
const user = document.querySelector('#userField');
const message = document.querySelector('#messageField');
const send = document.querySelector('#send');

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message sent successfully to ${user.value}`);
    }
});

// =======================
// The Bell Messages
// =======================
let notificationsBell = document.querySelector('#notifications');
let bellContainer = document.querySelector('#bell-container');

bellContainer.addEventListener('click', e => {
    let element = e.target;
    notificationsBell.innerHTML = `
    <div class="notifications-banner" id="message1">
        <p>Please set your timezone</p>
        <p class="notifications-banner-close">x</p>
    </div>
    <div class="notifications-banner" id="message2">
        <p>Please turn on Email Notifications</p>
        <p class="notifications-banner-close">x</p>
    </div>
    `;
    if (element.classList.contains("notifications-banner-close")) {
        notificationsBell.style.display = "none";
    }
});

// ======================================
// The Traffic Graph Time-Frame Selection
// ======================================

let trafficNav = document.querySelector('ul');

trafficNav.addEventListener('click', e => {
    let element = e.target;
    let li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = '#fff';
        li[i].style.color = '#000'
    }
    if (element.innerHTML === "Hourly") {
        element.style.backgroundColor = '#81c98f';
        element.style.color = '#fff';
        trafficChart.destroy();
        numbers = [
            750,
            1250,
            1000,
            2000,
            1500,
            1750,
            1250,
            1850,
            2250,
            1500,
            2500
        ];
        trafficData = {
            labels: [
                "16-22",
                "23-29",
                "30-5",
                "6-12",
                "13-19",
                "20-26",
                "27-3",
                "4-10",
                "11-17",
                "18-24",
                "25-31"
            ],
            datasets: [{
                data: numbers,
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1
            }]
        };
        trafficOptions = {
            aspectRatio: 2.5,
            animation: {
                duration: 0
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        };
        trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
        });
    }
    if (element.innerHTML === "Daily") {
        element.style.backgroundColor = '#81c98f';
        element.style.color = '#fff';
        trafficChart.destroy();
        numbers = [
            800,
            900,
            1000,
            500,
            400,
            800,
            1000,
            850,
            800,
            850,
            900
        ];
        trafficData = {
            labels: [
                "16-22",
                "23-29",
                "30-5",
                "6-12",
                "13-19",
                "20-26",
                "27-3",
                "4-10",
                "11-17",
                "18-24",
                "25-31"
            ],
            datasets: [{
                data: numbers,
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1
            }]
        };
        trafficOptions = {
            aspectRatio: 2.5,
            animation: {
                duration: 0
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        };
        trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
        });
    }
    if (element.innerHTML === "Weekly") {
        element.style.backgroundColor = '#81c98f';
        element.style.color = '#fff';
        trafficChart.destroy();
        numbers = [
            500,
            600,
            1200,
            1250,
            900,
            700,
            1000,
            850,
            600,
            550,
            500
        ];
        trafficData = {
            labels: [
                "16-22",
                "23-29",
                "30-5",
                "6-12",
                "13-19",
                "20-26",
                "27-3",
                "4-10",
                "11-17",
                "18-24",
                "25-31"
            ],
            datasets: [{
                data: numbers,
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1
            }]
        };
        trafficOptions = {
            aspectRatio: 2.5,
            animation: {
                duration: 0
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        };
        trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
        });
    }
    if (element.innerHTML === "Monthly") {
        element.style.backgroundColor = '#81c98f';
        element.style.color = '#fff';
        trafficChart.destroy();
        numbers = [
            750,
            800,
            900,
            1050,
            1400,
            700,
            500,
            350,
            400,
            600,
            500
        ];
        trafficData = {
            labels: [
                "16-22",
                "23-29",
                "30-5",
                "6-12",
                "13-19",
                "20-26",
                "27-3",
                "4-10",
                "11-17",
                "18-24",
                "25-31"
            ],
            datasets: [{
                data: numbers,
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1
            }]
        };
        trafficOptions = {
            aspectRatio: 2.5,
            animation: {
                duration: 0
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        };
        trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
        });
    }
});

// ======================================
// The Autocomplete Functionality from:
// https://dev.to/michaelburrows/create-an-autocomplete-textbox-using-vanilla-javascript-37n0
// ======================================

const data = [
    "Victoria Cambers",
    "Dale Byrd",
    "Dawn Wood",
    "Dan Oliver"
];
const autocomplete = document.getElementById("userField");
const resultsHTML = document.getElementById("results");

autocomplete.oninput = function () {
    let results = [];
    const userInput = this.value;
    resultsHTML.innerHTML = "";
    if (userInput.length > 0) {
      results = getResults(userInput);
      resultsHTML.style.display = "block";
      for (i = 0; i < results.length; i++) {
        resultsHTML.innerHTML += "<li>" + results[i] + "</li>";
      }
    }
  };
  function getResults(input) {
    const results = [];
    for (i = 0; i < data.length; i++) {
      if (input === data[i].slice(0, input.length)) {
        results.push(data[i]);
      }
    }
    return results;
  }
  resultsHTML.onclick = function (event) {
  const setValue = event.target.innerText;
  autocomplete.value = setValue;
  this.innerHTML = "";
};



// ======================================
// The Local Storage functionality
// ======================================
let settings = document.querySelector('#settings');

// Get Value from toggle Bar
// https://developer.tizen.org/community/code-snippet/web-code-snippet/how-save-checkbox-status-localstorage
function save1() {	
	let checkbox = document.getElementById("checkbox1");
    localStorage.setItem("checkbox1", checkbox.checked);	
}
function save2() {	
	let checkbox = document.getElementById("checkbox2");
    localStorage.setItem("checkbox2", checkbox.checked);	
}
// Get Value from select menu
// https://mkyong.com/javascript/javascript-get-selected-value-from-dropdown-list/
let timezone = document.getElementById("timezone");
let timezoneIndex = timezone.selectedIndex;

function save3() {	
    timezoneIndex = timezone.selectedIndex;
	localStorage.setItem("timezone", timezoneIndex);
    timezoneSelect = JSON.parse(localStorage.getItem("timezone"))
}

// If someone saves or cancels
settings.addEventListener('click', e => {
    let element = e.target;
    if (element.id === "save") {
        save1();
        save2();
        save3();
    } else if (element.id === "cancel") {
        localStorage.removeItem("checkbox1");
        localStorage.removeItem("checkbox2");
        localStorage.removeItem("timezone");
    }
});

//for loading
let checked1 = JSON.parse(localStorage.getItem("checkbox1"));
let checked2 = JSON.parse(localStorage.getItem("checkbox2"));
let timezoneSelect = JSON.parse(localStorage.getItem("timezone"));

if (checked1) {
    document.getElementById("checkbox1").checked = checked1;
}
if (checked2) {
    document.getElementById("checkbox2").checked = checked2;
}  
if (timezoneSelect) {
    timezone.selectedIndex = timezoneSelect;
} 


