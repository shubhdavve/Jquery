   // SHOW MENU

   const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
    
    toggle.addEventListener('click', () => {
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')
      // Add show-icon to show and hide menu icon
      toggle.classList.toggle('show-icon')
    })
  }
  
  showMenu('nav-toggle', 'nav-menu')
  
  const hamburgerMenu = document.getElementById("hamburger-icon");
  const link = document.querySelectorAll(".link");
  const closeBtn = document.getElementById("close");
  
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  
  // Menu
  hamburgerMenu.addEventListener("click", function () {
    const sidebar = document.getElementById("sidebars");
    sidebar.classList.toggle("toggle");
  });
  
  //   close icon
  function closeNav() {
    const sidebar = document.getElementById("sidebars");
    sidebar.classList.toggle("toggle");
  }







  $(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-countto");
    countDuration = parseInt($this.attr("data-duration"));
    $({ counter: $this.text() }).animate(
      {
        counter: countTo
      },
      {
        duration: countDuration,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.counter));
        },
        complete: function () {
          $this.text(this.counter);
        }
      }
    );
  });
  





  var options = {
    series: [
      {
        name: "55+",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 6, 9, 2, 10, 5]
      },
      {
        name: "All Ages",
        data: [5, 8, 4, 5, 7, 11, 3, 4, 6, 4, 7, 9, 12, 9, 4]
      }
    ],
    colors: ["#23a0bc", "#84bf41", "#9C27B0"],
    chart: {
      type: "bar",
      height: 350,
      stacked: true
    },
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    title: {
      text: "2020 Sales Year-to-Date"
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      labels: {
        formatter: function (val) {
          return "Week " + val;
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      }
    },
    tooltip: {
      // y: {
      // 	formatter: function (val) {
      // 		return val + "K";
      // 	}
      // }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: "top",
      // horizontalAlign: "left",
      offsetX: 40,
      onItemHover: {
        highlightDataSeries: false
      }
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  





  