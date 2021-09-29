import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      👴Rick and Morty API👦
    </span>
  );
};

export default Header;
