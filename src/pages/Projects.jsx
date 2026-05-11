import { useLoaderData } from "react-router";


const Projects = () => {
    const projects = useLoaderData();
    console.log(projects);
    return (
        <div>
            
        </div>
    );
};

export default Projects;