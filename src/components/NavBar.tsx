import FundingLogo from "./FundingLogo"

function NavBar() {
  return (
    <nav className=" font-commiss flex justify-between px-44">
      <FundingLogo />
      <ul className=" flex h-full  items-center justify-end bg-black  text-base font-extralight  text-white ">
        <li className="point mx-10 cursor-pointer ">About</li>
        <li className="point mx-10 cursor-pointer">Discover</li>
        <li className="point mx-10 cursor-pointer">Get Started</li>
      </ul>
    </nav>
  )
}

export default NavBar
