import { NavLink } from "react-router";

function NavBar() {
  const menus = [
    { id: 1, menu: "Log In", path: "/" },
    { id: 2, menu: "Register", path: "/register" },
    { id: 3, menu: "My Todo", path: "/mytodo" },
  ];

  return (
    <nav className="h-13 bg-gray-600 text-white flex justify-center items-center gap-6">
      {menus.map((item) => (
        <NavLink
          key={item.id}
          className={"cursor-pointer hover:underline"}
          to={item.path}
        >
          {item.menu}
        </NavLink>
      ))}
    </nav>
  );
}
export default NavBar;
