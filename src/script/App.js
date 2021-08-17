
import { useState } from 'react';
import './../App.css';
import Result from './Result';
import Search from './Search';

function App() {
  const [byResult, setByResult] = useState(false);
  const [sales, setSales] = useState(false);
  const [salesValue, setSalesValue] = useState("??");
  const [value, setValue] = useState("");
  var templates = [
    'frame16.png',
    'frame18.png',
    'frame19.png',
    'frame20.png'
  ];

  const changeValue = (e) => {
    setValue(e.target.value)
  }

  const searchArtikul = () => {
    setByResult(true);

    let articul = document.getElementById('art').value;
    let art1part = articul.substr(0, 4);
    let iRand = Math.floor(Math.random() * templates.length);
    console.log(templates[iRand])

    fetch('https://images.wbstatic.net/big/new/' + art1part + '0000/' + articul + '-1.jpg')
      .then(() => {
        console.log("yes");
        document.querySelector("#error-msg").style.display = "none";
        document.querySelector("#template").style.display = "block";
        document.querySelector("#photo-from-wb").style.display = "block";
        document.querySelector('#photo-from-wb').style.background = 'url("https://images.wbstatic.net/big/new/' + art1part + '0000/' + articul + '-1.jpg")'
        document.querySelector('#template').style.background = 'url("https://files.myguru.ru/site-templates/' + templates[iRand] + '") ';
        templates[iRand] === "frame19.png" ? setSales(true) : setSales(false);
      })
      .catch(function (error) {
        setSales(false);
        document.querySelector("#error-msg").style.display = "block";
        document.querySelector("#demo-result").style.display = "block";
        document.querySelector("#template").style.display = "none";
        document.querySelector("#photo-from-wb").style.display = "none";
      });

    const URL = 'https://suppliers-stats.wildberries.ru/api/v1/supplier/stocks?dateFrom=2021-08-15T21%3A00%3A00.000Z&key=5edfe8277ff2a5.941835169784f269a9244f13350db36eedb814d1'

    fetch(URL)
      // .then(function (response) {
      //   // if (!response.ok) {
      //   //   throw Error(response.statusText);
      //   // }
      // })

      .then(response => response.json())
    // setSalesValue(response.sales);
    
    
// var https = require('https');
// var fs = require('fs');

// var options = {
//   'method': 'GET',
//   'hostname': 'local.mpstats.io',
//   'path': 'https://mpstats.io/api/wb/get/category/subcategories?d1=2020-07-13&d2=2020-08-11&path=%D0%96%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0%D0%BC/%D0%9E%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0',
//   'headers': {
//     'X-Mpstats-TOKEN': '5edfe8277ff2a5.941835169784f269a9244f13350db36eedb814d1',
//     'Content-Type': 'application/json'
//   },
//   'maxRedirects': 20
// };

// var req = https.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function (chunk) {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });

//   res.on("error", function (error) {
//     console.error(error);
//   });
// });

// var postData = JSON.stringify({"startRow":0,"endRow":100,"filterModel":{},"sortModel":[{"colId":"revenue","sort":"desc"}]});

// req.write(postData);

// req.end();


  }

  return (
    <div className="App">
      <div id="demo-inf">

        <Search
          onClick={searchArtikul}
          value={value}
          onChange={changeValue}
        />
        {byResult && <Result sales={sales} salesValue={salesValue} />}
      </div>

    </div>
  );  
}

export default App;
