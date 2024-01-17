
const NavContent = [{
    id: 1,
    title: "Home"
},
{
    id: 2,
    title: "About"
},
{
    id: 1,
    title: "Projects"
},
{
    id: 1,
    title: "Connection"
}]


const NavBar = () => {
    return (
        <>
            <div className=" left-[50%] fixed top-5 translate-x-[-50%]">
                <ul className="flex items-center justify-center h-16 gap-16 px-10 py-6 font-medium uppercase bg-black rounded-full">
                    {NavContent.map((nav) => (
                        <li className="text-[#fff7f7] border border-transparent  border-b-2 hover:border-b-[#fff7f7] hover:scale-105  duration-300 cursor-pointer  tracking-wider " key={nav.id}>{nav.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default NavBar