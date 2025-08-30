import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-[20px] px-[80px] sticky top-0 bg-white z-50">
      <div className="flex items-center gap-3">
        <img
          src="/logo.jpg"
          alt="SwadSeva Logo"
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <span className="text-[1.5rem] font-bold text-[#333]">
          Swad<span className="food text-[orange]">Seva</span>
        </span>
      </div>

      <nav>
        <ul className="flex list-none gap-[30px]">
          <li><Link to="/" className="text-[#333] font-medium">HOME</Link></li>
          <li><Link to="/about" className="text-[#333] font-medium">ABOUT US</Link></li>
          <li><Link to="/menu" className="text-[#333] font-medium">MENU</Link></li>
          <li><Link to="/orders" className="text-[#333] font-medium">ORDERS</Link></li>
          <li><Link to="/contact" className="text-[#333] font-medium">CONTACT</Link></li>
        </ul>
      </nav>

      <form className="new-search flex items-center bg-white rounded-[10px] gap-3 max-w-[500px] p-[10px_90px]">
        <i className="fas fa-map-marker-alt text-[#f26522] text-[18px]"></i>
        <input
          type="text"
          placeholder="Search food near you..."
          className="flex-1 border-none outline-none text-[1rem]"
        />
      </form>

      <div className="auth flex items-center gap-4">
        <Link
          to="/signup"
          className="px-[8px] py-[8px] border-2 border-[orange] rounded text-[orange] font-medium"
        >
          SIGN UP
        </Link>
        <Link
          to="/cart"
          className="px-[8px] py-[8px] border-2 border-[orange] rounded text-[orange]"
        >
          🛒 CART
        </Link>
      </div>
    </header>
  );
}
