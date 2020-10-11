window.onload = function() {
  Particles.init({
    selector: '.background',
    color: ['#fc0303', '#ffffff', '0026ff', '#000000'],
    connectParticles: true,
    responsive: [{
      breakpoint: 700,
      options: {
        color: ['#fc0303', '#ffffff', '0026ff', '#000000'],
        maxParticles: 50,
        connectParticles: true,
        speed: .3,
      }
    }]
  });
};
