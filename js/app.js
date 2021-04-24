// =======================
// The Alert box
// =======================
const alertBanner = document.querySelector('#alert');

alertBanner.innerHTML = `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
`;
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alert.style.display = "none";
    }
});

// =======================
// The Traffic Graph
// =======================
const trafficCanvas = document.querySelector('#traffic-chart');
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
        data: [
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
        ],
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