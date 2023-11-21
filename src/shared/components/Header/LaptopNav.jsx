import { NavLink, Link } from "react-router-dom"

const LaptopNav = () => {
  return (
    <>
      {/* Laptop Nav */}
      <section>
        <div className="hidden md:block pt-6 px-20 pr-40 shadow-xl pb-4">
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <p className="text-2xl font-bold">Share Places</p>
              <p>Share Experience</p>
            </Link>
            <div className="flex justify-center items-center gap-x-10 font-bold text-center">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/users"}>All Users</NavLink>
              <NavLink to={"/user/u1/places"}>My Places</NavLink>
              <NavLink to={"/place/new"}>Add Palce</NavLink>
              <NavLink to={"/auth"}>Authenticate</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LaptopNav
