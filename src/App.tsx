import Noise from "./misc/Noise";
import Card from "./components/Card";
import Balance from "./components/Balance";
import {useEffect} from "react";
import bridge from "@vkontakte/vk-bridge";

function App() {
    useEffect(() => {
        bridge.send('VKWebAppInit')
    }, [])

  return (
    <div className={'bg-black min-h-[100vh] flex flex-col items-stretch'}>
        <Noise/>
        <Card/>
        <Balance/>
    </div>
  )
}

export default App
