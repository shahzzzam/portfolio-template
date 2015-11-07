/* jshint ignore:start */
particlesJS('dos-dots-doe', {
    'particles': {
        'canvas': {
            'w': '100%',
            'h': '400px'
        },
        'number': {
            'value': 70,
            'density': {
                'enable': true,
                'value_area': 800
            }
        },
        'color': {
            'value': '#ffffff'
        },
        'shape': {
            'type': 'circle',
            'stroke': {
                'width': 0,
                'color': '#000000'
            },
            'polygon': {
                'nb_sides': 4
            },
            'image': {
                'src': 'img/github.svg',
                'width': 100,
                'height': 100
            }
        },
        'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {
                'enable': false,
                'speed': 1,
                'opacity_min': 0.1,
                'sync': false
            }
        },
        'size': {
            'value': 2,
            'random': true,
            'anim': {
                'enable': false,
                'speed': 163.22751967257037,
                'size_min': 0.1,
                'sync': false
            }
        },
        'line_linked': {
            'enable': true,
            'distance': 150,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 0.7
        },
        'move': {
            'enable': true,
            'speed': 3,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
                'enable': false,
                'rotateX': 10000,
                'rotateY': 1200
            }
        }
    },
    'interactivity': {
        'detect_on': 'canvas',
        'events': {
            'onhover': {
                'enable': true,
                'mode': 'grab'
            },
            'onclick': {
                'enable': true,
                'mode': 'push'
            },
            'resize': true,
            'onresize': {
                'enable': true,
                'density_auto': true,
                'density_area': 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
            },
        },
        'modes': {
            'grab': {
                'distance': 400,
                'line_linked': {
                    'opacity': 1
                }
            },
            'bubble': {
                'distance': 400,
                'size': 40,
                'duration': 2,
                'opacity': 8,
                'speed': 3
            },
            'repulse': {
                'distance': 200,
                'duration': 0.4
            },
            'push': {
                'particles_nb': 4
            },
            'remove': {
                'particles_nb': 2
            }
        }
    },
    'retina_detect': true
});
/* jshint ignore:end */
