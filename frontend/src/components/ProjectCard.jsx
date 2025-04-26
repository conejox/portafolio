const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;
  
    return (
      <div className={`flex flex-col md:flex-row ${!isEven && 'md:flex-row-reverse'} items-center my-8`}>
        
        {/* Image */}
        <div className="w-full md:w-1/2 p-4">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img 
              src={project.image} 
              alt={project.title} 
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </a>
        </div>
  
        {/* Description */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          {/* Optional: tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
  
      </div>
    );
  };
  
  export default ProjectCard;
  