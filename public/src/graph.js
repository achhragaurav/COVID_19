google.charts.load("current", { packages: ["corechart"] });

export function drawChart(data, month) {
  var data = google.visualization.arrayToDataTable([
    ["Month", "Cases"],
    [month[0], data[0]],
    [month[1], data[1]],
    [month[2], data[2]],
    [month[3], data[3]],
  ]);

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
