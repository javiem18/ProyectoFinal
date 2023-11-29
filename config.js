//exterior del vehículo
document.addEventListener('DOMContentLoaded', function () {
    const carColorOptions = document.getElementsByName('color');
    const wheelTypeOptions = document.getElementsByName('wheelType');
    const carImage = document.getElementById('carImage');
  
    function updateCarImage() {
      let selectedColor;
      let selectedWheelType;
  
      for (const option of carColorOptions) {
        if (option.checked) {
          selectedColor = option.value.toLowerCase();
          break;
        }
      }
  
      for (const option of wheelTypeOptions) {
        if (option.checked) {
          selectedWheelType = option.value.toLowerCase();
          break;
        }
      }
  
      const carImageURLs = {
        rojo: {
          llantas1: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiuWTQy0Naif3E0DynvQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
          llantas2: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiFWTQy0Naif3E0DynvQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
          llantas3: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBicWTQy0Naif3E0DynvQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
        },
        azul: {
          llantas1: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8P7KM86lhQ58D7gfN%25QX0DystQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
          llantas2: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8P7KM86lhQ58DRgfN%25QX0DystQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
          llantas3: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8P7KM86lhQ58DngfN%25QX0DystQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
        },
        negro: {
          llantas1: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3k7KM86lhQ58D7gfN%25QX0DystQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
          llantas2: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3k7KM86lhQ58DRgfN%25QX0DystQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
          llantas3: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3k7KM86lhQ58DngfN%25QX0DystQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
        },
      };
  
      const carImageURL = carImageURLs[selectedColor][selectedWheelType];

      carImage.src = carImageURL;
      carImage.style.width = '800px';
      carImage.style.height = 'auto';
    }
  
    for (const option of carColorOptions) {
      option.addEventListener('change', updateCarImage);
    }
    for (const option of wheelTypeOptions) {
      option.addEventListener('change', updateCarImage);
    }
    
    updateCarImage();
  });


  //interior del vehículo
  document.addEventListener('DOMContentLoaded', function () {
    const carColorOptions = document.getElementsByName('color');
    const interiorTypeOptions = document.getElementsByName('interiorType');
    const carInterior = document.getElementById('carInterior');
  
    function updateCarInterior() {
      let selectedColor;
      let selectedInterior;
  
      for (const option of carColorOptions) {
        if (option.checked) {
          selectedColor = option.value.toLowerCase();
          break;
        }
      }
  
      for (const option of interiorTypeOptions) {
        if (option.checked) {
          selectedInterior = option.value.toLowerCase();
          break;
        }
      }
  
      const carInteriorURLs = {
        rojo: {
          interior1: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBkcWTQy0Naifaa0DynvQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
          interior2: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBkcWTQy0Naifay0DynvQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
          interior3: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBkcWTQy0NaifcP0DystQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
        },
        azul: {
          interior1: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8P7KM86lhQ58rngfN%25QX0Dy00Q9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
          interior2: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8P7KM86lhQ58rngfN%25QX0Dy0%25Q9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
          interior3: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8P7KM86lhQ58rngfN%25QX0DystQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
        },
        negro: {
          interior1: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3k7KM86lhQ58rngfN%25QX0Dy00Q9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
          interior2: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3k7KM86lhQ58rngfN%25QX0Dy0%25Q9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
          interior3: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3k7KM86lhQ58rngfN%25QX0DystQ9%25tlzfIjMREDrs6eWR6kUjGlHbnwFRY40wjEwr1F69swihQXC6%25Il3CgP1Ds',
        },
      };
  
      const carInteriorURL = carInteriorURLs[selectedColor][selectedInterior];
  
      carInterior.src = carInteriorURL;
      carInterior.style.width = '800px';
      carInterior.style.height = 'auto';
    }
  
    for (const option of carColorOptions) {
      option.addEventListener('change', updateCarInterior);
    }
    for (const option of interiorTypeOptions) {
      option.addEventListener('change', updateCarInterior);
    }
    
    updateCarInterior();
  });
  

//formulario de contacto
var button = document.getElementById('contacto');

button.addEventListener('click', function() {
  window.location.href = "contacto.html";
});