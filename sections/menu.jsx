import { useState } from "react"
import Section from "../components/Section"
import { RunningText,TitlePage } from "../components/TypingText"
import { Ourmenu } from "../constant"
import CoffeeCard from "../components/CoffeeCard"

const OurMenu = () => {

    const [active, setActive] = useState("coffee3")


  return (
    <Section id="menu">
        <RunningText />
        <TitlePage title="Our main"/>
        <div className="mt-[50px] flex flex-row min-h-[70vh] gap-2">
            {Ourmenu.map((coffee,index)=>(
                 <CoffeeCard key={coffee.id} {...coffee} active={active} handleClick={setActive} />
            ))}
        </div>
    </Section>
  )
}

export default OurMenu