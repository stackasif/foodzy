
import React, { useContext } from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Marquee from '../Components/Marquee'
import CategoriesPage from '../Components/CategoriesPage'
import Category2 from '../Components/Category2'
import About from './About'
import Menu from './Menu'
import Offer from '../Components/Offer'
import FastFood from '../Components/FastFood'
import ChefSection from './ChefSection'
import OpenTime from '../Components/OpenTime'
import ContactSection from '../Components/ContactSection'
import Footer from './Footer'
import { dataContext } from '../context/UserContext'
import CartSection from '../Components/CartSection'

function Home() {
  const { cate, input } = useContext(dataContext)

  return (
    <div className="min-h-screen bg-[#fffaf4]">
      <Nav />
      
      {!input && (
        <>
          <main className="w-full max-w-[1280px] mx-auto">
            <Hero />
          </main>

          <Marquee />

          <div className="w-full max-w-[1280px] mx-auto" data-aos="fade-up">
            <CategoriesPage />
          </div>

          <About />

          <div className="w-full max-w-[1280px] mx-auto gap-5 py-8">
            <div className="flex flex-col justify-center items-center text-center ">
              <Category2 />
            </div>
          </div>
        </>
      )}

      
      <div className=" w-full max-w-[1280px] mx-auto flex flex-wrap items-center justify-center gap-5 py-3 " id="menu">
        {cate.map((item) => (
          <Menu
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            description={item.food_description}
            category={item.food_category}
            type={item.food_type}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>

      <Offer />

     

      <FastFood />
      <ChefSection />
      <OpenTime />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
