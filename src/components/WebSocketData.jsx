import React,{useEffect,useState} from 'react'


export const WebSocketData = () => {
    let [Data, setData] = useState({});
    // const [AllData,setAllData] = useState();
    let AltData = [];
    useEffect(()=>{
        const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@bookTicker/ethusdt@bookTicker")
        ws.onopen=()=>{
            console.log("Connected!");
        };
        ws.onmessage=(e)=>{
            // console.log(e.data);
            setData(JSON.parse(e.data))
        }
    },[]);
    console.log(AltData.length);
    if (AltData.length<0){
      AltData = Data
  }
  else{
    console.log(AltData);
      let a = AltData.find(f=>f.s===Data.s)
      console.log(a);
      if (a){
          a.b = Data.b
          a.a = Data.a
          a.B = Data.B
          a.A = Data.A
          a.u = Data.u

      }
      else{
          AltData.push(Data)
      }
  }
    // AltData.push(Data)
    // console.log(AltData);
    // useEffect(()=>{
    //     setAllData(AltData)
    // })
  return (
    <div></div>
  )
}
