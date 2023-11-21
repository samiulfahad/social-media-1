import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"

const MobileNav = () => {
  const [isOpen, seIsOpen] = useState(false)
  const MobileMenuH = () => {
    seIsOpen((old) => !isOpen)
  }

  const menuOpen = "block hamburger open"
  const menuClosed = "block hamburger"

  return (
    <>
      <section className="block md:hidden">
        <header className="flex justify-between md:hidden mt-8 px-8">
          <Link to={"/"}>
            <p className="text-lg font-bold">City Public School, Durgapur</p>
            <p>Jemua, Durgapur, WB, India</p>
          </Link>
          
          <button className={isOpen ? menuOpen : menuClosed} onClick={MobileMenuH}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </header>

        {isOpen && (
          <nav className="bg-indigo-600 rounded-xl opacity-99 mx-auto mt-24 my-20 inset-0 z-10 absolute">
            <div className="flex gap-y-4 flex-col justify-center items-center pt-10 text-lg font-bold text-white ">
              <NavLink to={"/"}>
                <p onClick={MobileMenuH}>Home</p>
              </NavLink>
              <hr className="border-2 w-2/3 mx-4"></hr>
              <NavLink to={"/"}>
                <p onClick={MobileMenuH}>All Users</p>
              </NavLink>
              <hr className="border-2 w-2/3 mx-4"></hr>
              <NavLink to={"/u1/places"}>
                <p onClick={MobileMenuH}>My Places</p>
              </NavLink>
              <hr className="border-2 w-2/3 mx-4"></hr>
              <NavLink to={"/places/new"}>
                <p onClick={MobileMenuH}>Add Place</p>
              </NavLink>
              <hr className="border-2 w-2/3 mx-4"></hr>
              <NavLink to={"/auth"}>
                <p onClick={MobileMenuH}>Authenticate</p>
              </NavLink>
            </div>
            <div className="text-sm  text-gray-200 w-full flex flex-col justify-center items-center absolute bottom-10">
              <p>ysir@gmail.com</p>
              <p>+91-XXXXX-XXXXX</p>
              <p>City Public School, Durgapur</p>
            </div>
          </nav>
        )}
      </section>
    </>
  )
}

export default MobileNav
