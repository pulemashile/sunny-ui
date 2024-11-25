import mobileImage from "../images/mobile/image-header.jpg";
import desktopImage from "../images/desktop/image-header.jpg";
import photographyImage from "../images/desktop/image-photography.jpg";
import graphicImage from "../images/desktop/image-graphic-design.jpg";
export default function Article() {
  const screenWidth: string = window.innerWidth > 768 ? "desktop" : "mobile";
  return (
    <article>
        <section className="bg-[#3dbeff] pt-10">

    <div className="absolute top-[250px] w-full  ">
        <h1 className="font-fraunces font-black text-4xl md:text-6xl uppercase text-white text-center tracking-[0.27em] z-50">
      We are creatives
    
      </h1>
      <img
        src="./images/icon-arrow-down.svg"
        alt="Arrow Down Icon"
        className="mt-14 md:mt-24 mx-auto z-50 animate-bounce "
      />

     </div>     
          <img src={mobileImage} alt="sunnyside agency header image" className="md:hidden w-full m-[]"/>
          
          <img src={desktopImage} 
    alt="sunnyside agency header image" className="hidden md:block w-full mt-[-220px]"/></section>


      <section>
        <div className="md:flex md:flex-row-reverse">

          <img
            src={`./images/${screenWidth}/image-transform.jpg`}
            alt="transform"
            className="w-full md:w-1/2"
          />
          <div className="text-container-1 ">
            <h2 className="article-headings">Transform your brand</h2>
            <p className="article-paragraph-1">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a
              href="#"
              className="article-link after:bg-yellow/30 hover:after:bg-yellow"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="md:flex">
          <img
            src={`./images/${screenWidth}/image-stand-out.jpg`}
            alt="Stand Out"
            className="w-full md:w-1/2"
          />
          <div className="text-container-1">
            <h2 className="article-headings">
              Stand out to the right audience
            </h2>
            <p className="article-paragraph-1">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a
              href="#"
              className="article-link after:bg-softRed/30 hover:after:bg-softRed"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="md:flex">
        
      {/* Graphic Design Section */}
      <div
        className="text-container-2 bg-contain bg-no-repeat text-textGraphicDesign"
        style={{ backgroundImage: `url(${graphicImage})` }}
      >
        <h2 className="article-headings text-[1.75rem] text-inherit">
          Graphic Design
        </h2>
        <p className="article-paragraph-2">
          Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
        </p>
      </div>

      {/* Photography Section */}
      <div
        className="text-container-2 bg-contain bg-no-repeat text-textPhotography md:h-200px w-50px justify-center align-center"
        style={{ backgroundImage: `url(${photographyImage})` }}
      >
        <h2 className="article-headings text-[1.75rem] text-inherit">
          Photography
        </h2>
        <p className="article-paragraph-2">
          Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
        </p>
      </div>
        </div>
      </section>

      <section className="pt-[62px] pb-[86px] px-6 md:pt-[11%] md:pb-[11.3%] text-center">
        <h3 className="font-fraunces font-black uppercase tracking-[0.15em] md:tracking-[0.37em] text-grayishBlue">
          Client testimonials
        </h3>
        <div className="md:flex md:justify-center md:gap-9">
          <div className="clients">
            <img
              src="./images/image-emily.jpg"
              alt="Emily R."
              className="client-img"
            />
            <div className="client-p">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </div>
            <div className="client-name">Emily R.</div>
            <div className="client-title">Marketing Director</div>
          </div>
          <div className="clients">
            <img
              src="./images/image-thomas.jpg"
              alt="Thomas S."
              className="client-img"
            />
            <div className="client-p">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </div>
            <div className="client-name">Thomas S.</div>
            <div className="client-title">Chief Operating Officer</div>
          </div>
          <div className="clients">
            <img
              src="./images/image-jennie.jpg"
              alt="Jennie F."
              className="client-img"
            />
            <div className="client-p">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </div>
            <div className="client-name">Jennie F.</div>
            <div className="client-title">Business Owner</div>
          </div>
        </div>
      </section>

      <section className="md:flex">
        <div className="flex">
          <img
            src={`./images/${screenWidth}/image-gallery-milkbottles.jpg`}
            alt="Milk Bottles"
            className="w-1/2"
          />
          <img
            src={`./images/${screenWidth}/image-gallery-orange.jpg`}
            alt="Orange"
            className="w-1/2"
          />
        </div>
        <div className="flex">
          <img
            src={`./images/${screenWidth}/image-gallery-cone.jpg`}
            alt="Cone"
            className="w-1/2"
          />
          <img
            src={`./images/${screenWidth}/image-gallery-sugar-cubes.jpg`}
            alt="Sugar Cubes"
            className="w-1/2"
          />
        </div>
      </section>
    </article>
  );
}
