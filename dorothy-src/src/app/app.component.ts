import { Component, OnInit } from '@angular/core';
import { Message } from '@app/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Welcome to the CyWorld', 'assets/images/bot.png', new Date())
    ];
  }

    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;

    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

    this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#9E392B'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                      width:5,
                      color:'#ffffff'
                    }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
        }
    };
    }

    // config 2

  //   "particles": {
  //     "number": {
  //       "value": 88,
  //       "density": {
  //         "enable": true,
  //         "value_area": 700
  //       }
  //     },
  //     "color": {
  //       "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
  //     },
  //     "shape": {
  //       "type": "circle",
  //       "stroke": {
  //         "width": 0,
  //         "color": "#000000"
  //       },
  //       "polygon": {
  //         "nb_sides": 15
  //       }
  //     },
  //     "opacity": {
  //       "value": 0.5,
  //       "random": false,
  //       "anim": {
  //         "enable": false,
  //         "speed": 1.5,
  //         "opacity_min": 0.15,
  //         "sync": false
  //       }
  //     },
  //     "size": {
  //       "value": 2.5,
  //       "random": false,
  //       "anim": {
  //         "enable": true,
  //         "speed": 2,
  //         "size_min": 0.15,
  //         "sync": false
  //       }
  //     },
  //     "line_linked": {
  //       "enable": true,
  //       "distance": 110,
  //       "color": "#33b1f8",
  //       "opacity": 0.25,
  //       "width": 1
  //     },
  //     "move": {
  //       "enable": true,
  //       "speed": 1.6,
  //       "direction": "none",
  //       "random": false,
  //       "straight": false,
  //       "out_mode": "out",
  //       "bounce": false,
  //       "attract": {
  //         "enable": false,
  //         "rotateX": 600,
  //         "rotateY": 1200
  //       }
  //     }
  //   },
  //   "interactivity": {
  //     "detect_on": "canvas",
  //     "events": {
  //       "onhover": {
  //         "enable": false,
  //         "mode": "repulse"
  //       },
  //       "onclick": {
  //         "enable": false,
  //         "mode": "push"
  //       },
  //       "resize": true
  //     },
  //     "modes": {
  //       "grab": {
  //         "distance": 400,
  //         "line_linked": {
  //           "opacity": 1
  //         }
  //       },
  //       "bubble": {
  //         "distance": 400,
  //         "size": 40,
  //         "duration": 2,
  //         "opacity": 8,
  //         "speed": 3
  //       },
  //       "repulse": {
  //         "distance": 200,
  //         "duration": 0.4
  //       },
  //       "push": {
  //         "particles_nb": 4
  //       },
  //       "remove": {
  //         "particles_nb": 2
  //       }
  //     }
  //   },
  //   "retina_detect": true
  // });
