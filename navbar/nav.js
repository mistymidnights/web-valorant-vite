import "./style.css";

const headerContent = document.querySelector("#header");
const logo = "https://img.icons8.com/color/12x/valorant.png";

const getNavBarTemplate = () => `
    <header>
        <nav>
            <ul>
                <li><a href="../index.html">Agents</a></li>
                <li><a href="https://web-valorant-vite.vercel.app/maps/maps.html">Maps</a></li>
                <li><a href="../weapons/weapons.html">Weapons</a></li>
                <li><a href="../ranks/ranks.html">Rank</a></li>
            </ul>
        </nav>
        <div class="logo-container"><img src="${logo}" alt="valorant"></div>
    </header>

`;

headerContent.innerHTML += getNavBarTemplate();
