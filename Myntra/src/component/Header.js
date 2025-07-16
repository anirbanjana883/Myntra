function Header() {
    return (
        <div className="header-container">
            <div className="header-left">
                <img 
                    src="https://www.myntra.com/favicon.ico" 
                    alt="Myntra Logo" 
                    className="logo" 
                />
                <div className="nav-options">   
                    <button className="nav-button">MEN</button>
                    <button className="nav-button">WOMEN</button>
                    <button className="nav-button">KIDS</button>
                    <button className="nav-button">HOME & LIVING</button>
                    <button className="nav-button">STUDIO</button>
                </div>
            </div>
            <input 
                placeholder="Search for products brand and more" 
                className="search-input"
            />
            <div className="header-right">
                <button className="nav-button">Profile</button>
                <button className="nav-button">Wishlist</button>
                <button className="nav-button">Bag</button>
            </div>
        </div>
    );
}

export default Header;