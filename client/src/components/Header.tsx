import './Header.css'
function Header() {
    return (
        <>
            <section className="header">
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                </nav>
                <a href="#" className="header_logo">Playlister</a>
                <h1 className="cart">Cart</h1>
            </section>
        </>
    )
}

export default Header