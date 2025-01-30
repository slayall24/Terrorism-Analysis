// Fetch and visualize historical data
fetch("historical_data.json")
  .then(response => response.json())
  .then(data => {
    const historicalYears = data.years;
    const historicalIncidents = data.incidents;

    const historicalCtx = document.getElementById("historicalChart").getContext("2d");
    new Chart(historicalCtx, {
      type: "bar",
      data: {
        labels: historicalYears,
        datasets: [
          {
            label: "Number of Incidents",
            data: historicalIncidents,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: { title: { display: true, text: "Year" } },
          y: { title: { display: true, text: "Incidents" } },
        },
      },
    });
  });

// Fetch and visualize predicted data
fetch("predicted_data.json")
  .then(response => response.json())
  .then(data => {
    const predictedYears = data.years;
    const predictedIncidents = data.incidents;

    const predictedCtx = document.getElementById("predictedChart").getContext("2d");
    new Chart(predictedCtx, {
      type: "bar",
      data: {
        labels: predictedYears,
        datasets: [
          {
            label: "Predicted Incidents",
            data: predictedIncidents,
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: { title: { display: true, text: "Year" } },
          y: { title: { display: true, text: "Incidents" } },
        },
      },
    });
  });
