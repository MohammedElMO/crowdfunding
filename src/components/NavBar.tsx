import FundingLogo from "./FundingLogo"

function NavBar() {
  return (
    <nav className=" flex justify-between px-44 font-commiss">
      <FundingLogo />
      <ul className=" flex h-full  items-center justify-end   text-base font-extralight  text-white ">
        <li className="point mx-10 cursor-pointer ">About</li>
        <li className="point mx-10 cursor-pointer">Discover</li>
        <li className="point mx-10 cursor-pointer">Get Started</li>
      </ul>
    </nav>
  )
}

export default NavBar
