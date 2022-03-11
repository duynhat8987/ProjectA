

const table = [
  {
image:  "./img/agronomy.png",
heading: "Automotive ",
title: "Accelerate connected vehicle technology by acquiring data from sensors to improve the in-car experiencefleet "
  },
  {
image:  "./img/agronomy.png",
heading: "FinTech",
title: "Apply financial technologies for innovators and Fortune 500 companies to keep up with market demands and changing financial and security regulations"
  },
  {
image:  "./img/agronomy.png",
heading: "Retail",
title: "Shape customer behavior and goods consumption by implementing IoT devices to track the customer journey and create personalized offers "
  },
  {
image:  "./img/agronomy.png",
heading: "Energy ",
title: "Optimize energy consumption in houses, public buildings, and industrial facilities with custom IoT solutions for managing energy distribution"
  },
  {
image:  "./img/agronomy.png",
heading: "Agriculture ",
title: "Get 24/7 visibility over soil and crop health by monitoring key metrics and implementing machine learning algorithms to predict output"
  },
  {
image:  "./img/agronomy.png",
heading: "Real estate  ",
title: "Create smarter, more energy-efficient spaces with comprehensive IoT-based facility management solutions powered by advanced data analytics"
  },
  
];

document.getElementById("slider").innerHTML = table.map(
    (user) =>`
      <div class="slider-table">
        <img class="slider-image" src="${user.image}" alt="">
        <h1 class="slider-touch">${user.heading}</h1>
        <p class="slider-heading">${user.title}</p>
      </div>`
  ).join("")
 

