import Hero from "./Sections/Hero"
import Intro from "./Sections/Intro"
import Selection from "./Sections/Selection"
import Statement from "./Sections/Statement"
import CeoMessage from "./Sections/CeoMessage"
import Contact from "./Sections/Contact"

export default function Home() {
  return (
    <div className="home">
     <Hero/>
     <Intro />
     <Selection />
      <Statement />
      <CeoMessage />
      <Contact />
    </div>
  )
}