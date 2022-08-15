import './style.css'
import '../navbar/nav'

const footer = document.querySelector("#footer");

const getNavBarTemplate = () =>`
        <ul>
            <li>@Christine López 2022</li>
            <li><a href="https://github.com/mistymidnights" target="_blank"><img src="https://avatars.githubusercontent.com/u/38913098?v=4" alt="github"></a></li>
            <li><a href="https://www.linkedin.com/in/cristina-l-165a9218a/" target="_blank"><img src="https://media.discordapp.net/attachments/701164137081733201/1008557611647500348/linkedin_copia.png" alt="linkedin"></a></li>
        </ul>

`

footer.innerHTML += getNavBarTemplate();