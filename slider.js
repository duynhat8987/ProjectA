

const table = [
  {
image:  "./img/car.png",
heading: "Automotive ",
title: "Accelerate connected vehicle technology by acquiring data from sensors to improve the in-car experiencefleet "
  },
  {
image:  "./img/car.png",
heading: "FinTech",
title: "Apply financial technologies for innovators and Fortune 500 companies to keep up with market demands and changing financial and security regulations"
  },
  {
image:  "./img/retailer.png",
heading: "Retail",
title: "Shape customer behavior and goods consumption by implementing IoT devices to track the customer journey and create personalized offers "
  },
  {
image:  "./img/renewable-energy.png",
heading: "Energy ",
title: "Optimize energy consumption in houses, public buildings, and industrial facilities with custom IoT solutions for managing energy distribution"
  },
  {
image:  "./img/agronomy.png",
heading: "Agriculture ",
title: "Get 24/7 visibility over soil and crop health by monitoring key metrics and implementing machine learning algorithms to predict output"
  },
  {
image:  "./img/sublease.png",
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

  const image = [
      {
          img: "https://d3e3a9wpte0df0.cloudfront.net/wp-content/uploads/2019/11/top-employer.png"
      },
      {
          img: "https://d3e3a9wpte0df0.cloudfront.net/wp-content/uploads/2019/11/clutch.png"
      },
      {
          img: "https://d3e3a9wpte0df0.cloudfront.net/wp-content/uploads/2019/11/Inc-5000.png"
      },
      {
          img: "https://d3e3a9wpte0df0.cloudfront.net/wp-content/uploads/2019/11/GO100_Generic.png"
      },
      {
          img: "https://d3e3a9wpte0df0.cloudfront.net/wp-content/uploads/2019/11/dou.png"
      },
      {
          img: "https://d3e3a9wpte0df0.cloudfront.net/wp-content/uploads/2019/11/gsa.png"
      },
      {
          img: "https://d3e3a9wpte0df0.cloudfront.net/wp-content/uploads/2017/09/clutch-design.png"
      },
      {
          img: "https://d3e3a9wpte0df0.cloudfront.net/wp-content/uploads/2020/09/iso-27001-1.svg.gzip"
      },
      {
          img: "https://d3e3a9wpte0df0.cloudfront.net/wp-content/uploads/2020/09/iso-2001-2015-1.svg.gzip"
      }
  ]

  document.getElementById("logo-block").innerHTML = image.map(
    (a) =>`
      <div class="table-img">
        <img class="table-img-nav" src="${a.img}" alt="">
      </div>`
  ).join("")
 

