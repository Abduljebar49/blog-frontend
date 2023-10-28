import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {
  isSideMenuOpen: boolean = false;
  isMobile:boolean = false;
  toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
    console.log("isSideMenu : ",this.isSideMenuOpen);
  }

  // @HostListener('window:resize', ['$event'])
  // onWindowResize(event: Event) {
  //   this.checkIfMobile();
  // }
  // ngOnInit() {
  //   this.checkIfMobile();
  // }

  // checkIfMobile() {
  //   this.isMobile = window.innerWidth <= 768; // Adjust the threshold as per your needs
  //   console.log("is Mobile  : ",this.isMobile)
  // }
  closeSideMenu() {
    this.isSideMenuOpen = false
  }
  isNotificationsMenuOpen = false
  toggleNotificationsMenu() {
    this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
  }
  closeNotificationsMenu() {
    this.isNotificationsMenuOpen = false
  }
  isProfileMenuOpen = false
  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen
  }
  closeProfileMenu() {
    this.isProfileMenuOpen = false
  }
  isPagesMenuOpen = false
  togglePagesMenu() {
    this.isPagesMenuOpen = !this.isPagesMenuOpen
  }





  chart = document.querySelector('#chartline')
  options = {
      series: [{
          name: 'TEAM A',
          type: 'area',
          data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
      }, {
          name: 'TEAM B',
          type: 'line',
          data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
      }],
      chart: {
          height: 350,
          type: 'line',
          zoom: {
              enabled: false
          }
      },
      stroke: {
          curve: 'smooth'
      },
      fill: {
          type: 'solid',
          opacity: [0.35, 1],
      },
      labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ',
          'Dec 10', 'Dec 11'
      ],
      markers: {
          size: 0
      },
      yaxis: [{
              title: {
                  text: 'Series A',
              },
          },
          {
              opposite: true,
              title: {
                  text: 'Series B',
              },
          },
      ],
      tooltip: {
          shared: true,
          intersect: false,
          y: {
              formatter: function(y:any) {
                  if (typeof y !== "undefined") {
                      return y.toFixed(0) + " points";
                  }
                  return y;
              }
          }
      }
  };
  // var chart = new ApexCharts(chart, options);
  // chart.render();

}
