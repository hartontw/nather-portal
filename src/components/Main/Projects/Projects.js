import './Projects.css';
import Project from "./Project/Project";
import thumbnail from "../../../images/projects.png";

function Projects() {
  return (
    <div className="projects">
      <Project title="Proyecto A" image={thumbnail}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam magni doloremque dolorum suscipit pariatur perspiciatis optio? Molestias unde fugit laborum cumque neque libero deserunt, qui repudiandae tenetur. Sequi, provident.</Project>
      <Project title="Proyecto B" image={thumbnail}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam magni doloremque dolorum suscipit pariatur perspiciatis optio? Molestias unde fugit laborum cumque neque libero deserunt, qui repudiandae tenetur. Sequi, provident.</Project>
    </div>
  )
}

export default Projects;