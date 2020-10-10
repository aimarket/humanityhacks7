window.onload = function() {
  Particles.init({
    selector: '.background',
    color: ['#fc0303', '#18fc03', '#03f8fc', '#ff00f2'],
    connectParticles: true,
    responsive: [{
      breakpoint: 700,
      options: {
        color: ['#fc0303', '#18fc03', '#03f8fc', '#ff00f2'],
        maxParticles: 50,
        connectParticles: true,
        speed: .3,
      }
    }]
  });
};

