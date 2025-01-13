import mobileImage from "../images/mobile/image-header.jpg";
import desktopImage from "../images/desktop/image-header.jpg";
import photographyImage from "../images/desktop/image-photography.jpg";
import graphicImage from "../images/desktop/image-graphic-design.jpg";
import ReactIcon from "../images/React.png";
import css from "../images/css.png";
import Html from "../images/html.png";
import mapula from "../images/mapula.png";
import Java from "../images/java.png";
import Tailwind from "../images/Tailwind.png";
import Node from "../images/node.png";
import db from "../images/db.png";
import Github from "../images/github.png";
import rect from "../images/rect.png";
import weather2 from "../images/weather2.png";

export default function Article() {
  const screenWidth: string = window.innerWidth > 768 ? "desktop" : "mobile";

  return (
    <article>
      <section className="relative pt-10 md:pt-20">
        <div className="absolute top-[250px] w-full px-6 md:px-16">
          <h1 className="text-center text-3xl md:text-5xl font-serif leading-tight">
            Hey there, my name is Mapula. I am your full-stack developer. I have been working on web development for 2 years,
             and I can help you create a website for your business.
          </h1>
        </div>
        
        <img
          src={mapula}
          alt="Mapula"
          className="md:hidden w-full mt-6"
        />
        <img
          src={mapula}
          alt="Mapula"
          className="hidden md:block w-full mt-[-220px]"
        />
      </section>

      <section className="px-6 md:px-16 py-16">
        <div className="md:flex md:flex-row-reverse md:space-x-8">
          <img
            src={Java}
            alt="Transform"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="text-container-1 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">github</h2>
            <p className="text-black font-serif mb-4">
            used GitHub to host my project's code, manage different versions, and collaborate with team members. I created a repository, set up branches for feature development and bug fixes, and used pull requests to review and merge code changes. I also utilized GitHub Issues to track bugs and feature requests, and assigned tasks to team members using the project management tools. Additionally, I took advantage of GitHub's continuous integration and deployment (CI/CD) features to automate testing and deployment of my project.
            </p>
            <a
              href="#"
              className="text-yellow-500 hover:text-yellow-700 font-semibold"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="md:flex mt-12">
          <img
            src={rect}
            alt="Stand Out"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="text-container-1 md:w-1/2 flex flex-col justify-center md:ml-8">
            <h2 className="text-3xl font-bold mb-4">React js</h2>
            <p className="article-paragraph-1 mb-4">
            React Native is a powerful framework for building native mobile applications using JavaScript and React. With its cross-platform compatibility, developers can build apps for both Android and iOS platforms using a single codebase. React Native leverages native components, such as UI components, to create apps that feel native to the platform. 
            Its hot reloading feature allows developers to see changes in real-time, without having to rebuild or 
            restart the app. 
            </p>
            <a
              href="#"
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-24 px-6 md:pt-24 md:pb-32 text-center">
        <h3 className="text-3xl font-black uppercase tracking-widest text-gray-700 mb-8">
          Tech Stack
        </h3>
        <div className="md:flex md:justify-center md:gap-8">
          <div className="clients text-center mb-8 md:mb-0">
            <img
              src={ReactIcon}
              alt="React"
              className="w-24 h-24 mx-auto mb-4"
            />
            <div className="text-lg font-semibold">React</div>
          </div>
          <div className="clients text-center mb-8 md:mb-0">
            <img
              src={css}
              alt="CSS"
              className="w-24 h-24 mx-auto mb-4"
            />
            <div className="text-lg font-semibold">CSS</div>
          </div>
          <div className="clients text-center">
            <img
              src={db}
              alt="Database"
              className="w-24 h-24 mx-auto mb-4"
            />
            <div className="text-lg font-semibold">Database</div>
          </div>
        </div>
      </section>

      <section className="md:flex md:gap-4 px-6 md:px-16">
  {/* Left Side: To-Do Cards */}
  <div className="flex flex-col gap-4 mb-8 md:w-1/2">
    {/* Card 1 */}
    <div className="bg-white rounded-lg shadow-lg p-6 flex gap-4 items-center">
      <img
        src={weather2} // Replace with your actual image
        alt="Task 1 Image"
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">Weather App</h3>
        <p className="text-gray-600">This was my first project. It shows hourly and daily forecasts by detecting the location.</p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/pulemashile/whetherapp.git" // 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-semibold hover:text-blue-600"
          >
            View Repository
          </a>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-lg shadow-lg p-6 flex gap-4 items-center">
      <img
        src={Github} 
        alt="Task 2 Image"
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">Native shopping</h3>
        <p className="text-gray-600">Used GitHub to host and manage my project's code, collaborate, and track issues.</p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/pulemashile/nativeshopping.git" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-semibold hover:text-blue-600"
          >
            View Repository
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Right Side: To-Do Cards */}
  <div className="flex flex-col gap-4 mb-8 md:w-1/2">
    {/* Card 3 */}
    <div className="bg-white rounded-lg shadow-lg p-6 flex gap-4 items-center">
      <img
        src={ReactIcon} // Replace with your actual image
        alt="Task 3 Image"
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">birthday app</h3>
        <p className="text-gray-600">Create API routes for the backend to handle requests.</p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/pulemashile/native-birthday-app.git" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-semibold hover:text-blue-600"
          >
            View Repository
          </a>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-lg shadow-lg p-6 flex gap-4 items-center">
      <img
        src={Node} // Replace with your actual image
        alt="Task 4 Image"
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">skincare</h3>
        <p className="text-gray-600">Write tests to verify that your components and API routes work properly.</p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/pulemashile/skincare.git" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-semibold hover:text-blue-600"
          >
            View Repository
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </article>
  );
}
