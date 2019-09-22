import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import axios, { AxiosResponse } from 'axios';
import {List, ListItem, Header, Container} from 'semantic-ui-react';
import AppHeaders from './AppHeaders';
import AccountClaimsDashboard from '../features/AccountClaimsDashboard';


interface Iweather{
  date:Date,
  temperatureC:Number,
  temperatureF:Number,
  summary:String

}



const App: React.FC = () => {
 
  const[weatherReports, setweatherReport]= useState<Iweather[]>([]);
  const[count,setCounter]=useState<number>(0);
useEffect(()=> {
  axios.get<Iweather[]>("/WeatherForecast").then(response=>{
setweatherReport(response.data)
  });
},[]);



  return (
    <div>
      <AppHeaders></AppHeaders>
      <Container>
      <AccountClaimsDashboard></AccountClaimsDashboard>
      </Container>
    </div>
  );
}

export default App;
