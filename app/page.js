import Hero from "@/components/Hero";
import Cards from "@/components/Cards"
import WhatsAppButton from "@/components/WhatsAppButton";
import OneCar from "@/components/OneCar";
import Faq from "@/components/Faq"
import Test from "@/components/Test";
import Manager from "@/components/Manager"


export default function HomePage() {
  return (
    <>
    {/* This is Home Page By Default when Website load  */}
    <Hero/>
    <Cards/>
    <WhatsAppButton/>
    <OneCar/>
    <Manager/>
    {/* <Test/> */}
    <Faq/>
   
    </>
  )
}
