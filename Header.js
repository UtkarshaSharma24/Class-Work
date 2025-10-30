const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img
          className="header-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="logo"
        />
        <h1>Amazon Webpage</h1>
      </div>

      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  );
};

