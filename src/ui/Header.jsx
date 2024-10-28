import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="bg-yellow-400 px-4 py-3 uppercase border-b border-stone-500 sm:px-6 flex items-center justify-between">
      <Link to="/" className="tracking-widest">
        Fast React Fast Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
