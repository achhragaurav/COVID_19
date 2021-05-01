google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Month", "Cases"],
    ["June", 2000],
    ["July", 4000],
    ["Aug", 6000],
    ["Sept", 3000],
  ]);

  var options = {
    title: "Company Performance",
    legend: { position: "bottom" },
  };
  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, {
    titleTextStyle: {
      color: "#afafaf",
    },
    series: {
      0: { color: "rgb(255, 208, 0)" },
    },
    curveType: "function",
    backgroundColor: "#1c1f22",

    hAxis: {
      //   gridLines: { display: "none" },
      textStyle: {
        color: "#afafaf",
      },
      titleTextStyle: {
        color: "#afafaf",
      },
    },
    vAxis: {
      gridlines: {
        color: "#1c1f22",
      },
      textStyle: {
        color: "#afafaf",
      },
      titleTextStyle: {
        color: "#afafaf",
      },
    },
    legend: {
      position: "none",
      textStyle: {
        color: "red",
      },
    },
  });
}
