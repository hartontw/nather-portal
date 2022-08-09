import './Projects.css';
import Project from "./Project/Project";
import thumbnail from "../../../images/avatar.png";

function Projects() {
  return (
    <div className="projects">
      <Project title="Matanza" image={thumbnail} text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam magni doloremque dolorum suscipit pariatur perspiciatis optio? Molestias unde fugit laborum cumque neque libero deserunt, qui repudiandae tenetur. Sequi, provident." />
      <Project title="Muerte" image={thumbnail} text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam magni doloremque dolorum suscipit pariatur perspiciatis optio? Molestias unde fugit laborum cumque neque libero deserunt, qui repudiandae tenetur. Sequi, provident." />
    </div>
  )
}

export default Projects;