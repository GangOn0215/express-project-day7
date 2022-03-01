/**
 * 
 * 1. array 내장 함수인 map() 을 활용하기 위해 날씨 데이터를 가지고 올것이다.
 * 2. 필요한 데이터만 뽑아서 Array.map()을 사용한다.
 * 
 */

import fetch from 'node-fetch';

const key = "38708f5544158a8c68f3556312cc0fa2";
const country = {
  seoul: {
    lat: 37.566536,
    lon: 126.977966
  },
  busan: {
    lat: 35.179554,
    lon: 129.075638
  },
  daegue: {
    lat: 35.868729,
    lon: 128.605026
  },
  gwangju: {
    lat: 35.162441,
    lon: 126.910339
  }
}
const choose = 'seoul';

// const urlOpenWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
// const urlOpenWeather = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${country[choose].lat}&lon=${country[choose].lon}&cnt=7&appid=${key}`;
const urlOpenWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${country[choose].lat}&lon=${country[choose].lon}&appid=${key}&units=metric`;
const urlGithub = 'https://api.github.com/users';

(async ()=> {
  const gitHubData = await fetch(urlGithub);
  const gitHubJSON = await gitHubData.json();

  const weatherData = await fetch(urlOpenWeather);
  const weatherJSON = await weatherData.json();
  // console.log(weatherJSON.list);
  // console.log(weatherJSON);

  const weatherRemappingList = weatherJSON.list.map((weather) => {
    // humidity: 습도
    // temp: 온도
    return {
      time: weather.dt_txt,
      temp: weather.main.temp,
      humidity: weather.main.humidity,
      
    }
  });

  // console.log(weatherRemappingList[0].time.split(" ")[0]);

  let timezon = {};
  weatherRemappingList.forEach(element => {
    let counter = 0;
    let nDateTime = element.time;
    let nDate = nDateTime.split(" ")[0];
    let nTime = nDateTime.split(" ")[1];

    // timezon 안에 nDate 의 날짜가 존재하지 않다면 삽입
    
    if(!Object.keys(timezon).includes(nDate)) {
      timezon[nDate] = {};
    }
    
    console.log(nDate);
    timezon[nDate][nTime.split(":")[0]] = {element};
  });
  
  // console.log(timezon['2022-02-26']['15']);

  // map() 으로 remapping
  const githubUserList = gitHubJSON.map((user) => {
    return {
      id: user.id,
      user_id: user.login,
      url: user.url,
      repos_url: user.repos_url,
      type: user.type,
      site_admin: user.site_admin
    }
  });
  
  let total = {}
  const githubUserListReduce = gitHubJSON.reduce((total, user) => {
    return total += {
      id: user.id,
      user_id: user.login,
      url: user.url,
      repos_url: user.repos_url,
      type: user.type,
      site_admin: user.site_admin
    }
  })

  // console.log(githubUserListReduce);
})()


// console.log(data);
  // console.log(weatherDatas);