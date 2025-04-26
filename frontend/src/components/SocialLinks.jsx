import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex space-x-6 justify-center items-center p-4">
      {/* GitHub */}
      <a
        href="https://github.com/conejox"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:scale-125 transition-transform duration-300"
      >
        <FaGithub size={40} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/alberto-conejeros-arriagada-b26a82159/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:scale-125 transition-transform duration-300"
      >
        <FaLinkedin size={40} />
      </a>

      {/* HackerRank */}
      <a
        href="https://www.hackerrank.com/profile/albertoconejero1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:scale-125 transition-transform duration-300"
      >
        <FaHackerrank size={40} />
      </a>
    </div>
  );
};

export default SocialLinks;
