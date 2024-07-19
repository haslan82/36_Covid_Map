import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const covidUrl =  'https://covid-19-statistics.p.rapidapi.com/reports';

const headers = {
    'x-rapidapi-key': 
    '4881877b7fmsh063d77fae5a42d9p1be6e9jsn8d4ae58e7971',
    'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
  }

const getData = createAsyncThunk("covid/getData",async ({code, query})=>{
  //! console.log(query);
   // api ye gönderilecek parametreleri hazırla
   const params = {iso: code, q: query};
   
    // isocad a göre covid verilerini al 
//! console.log("aksiyon tetiklendi", code)




const req1 = axios.get(covidUrl,{params, headers});
//! console.log(res)
   // isocad a göre ülke verilerini al
   const req2 = axios.get(
    code 
    ? `https://restcountries.com/v3.1/alpha/${code}`
    : `https://restcountries.com/v3.1/name/${query}`

);

//! console.log(res2)

// todo api isteklerini daha iyi at

// her iki api isteğini aynı anda, pareelel olarak atar

const responses = await Promise.all([req1, req2]);
//! console.log(responses)


// region nesnesinde ki değerleri bir üst nesne ile aynı düzüeye çıkardık
const covid = {
    ...responses[0].data.data[0],
    ...responses[0].data.data[0].region,
};

// gereksiz değerleri kaldır

delete covid.cities;
delete covid.region;


//! console.log(covid)


// fonksiyon içerisinde redux thunk aksiyonun payload ını return etmek zorundayız.
    return {covid, country: responses[1].data[0]};
});

export default getData;