<<<<<<< HEAD
AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],
  
    init: function () {
      this.el.addEventListener('raycaster-intersection', function () {
        console.log('Player hit something!');
      });
    }
  });
=======
require('aframe');
require('aframe-physics-system');
require('aframe-physics-extras');
require('super-hands');
>>>>>>> ab3d2ba311c48b2d2e67aa3a9f31b731bc19f544
