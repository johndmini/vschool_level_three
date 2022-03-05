const rootDiv = document.getElementById('root')

const nav = (
    <nav>
        <h1>
            My Awesome Website with ReactDOM
        </h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(nav, rootDiv)