import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiFsharp,
  DiJqueryUiLogo
} from 'react-icons/di'

import '../styles/components/technologiesContainer.sass'

const technologiesContainer = [
  {id: "html", name: "HTML5", icon: <DiHtml5/>},
  {id: "css3", name: "css3", icon: <DiCss3/>},
  {id: "js", name: "js", icon: <DiJsBadge/>},
  {id: "react", name: "react", icon: <DiReact/>},
  {id: "fsharp", name: "fsharp", icon: <DiFsharp/>},
  {id: "jquery", name: "jquery", icon: <DiJqueryUiLogo/>},
]

const TecnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologiesContainer.map((tech) => (
          <div className="technologi-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TecnologiesContainer