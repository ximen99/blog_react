import MainCententLayout from "Blog_page/MainCententLayout";

function About() {
  const handleEmailClick = (e) => {
    window.location = "mailto:ximen100@gmail.com?subject=What' Up";
  };
  return (
    <MainCententLayout>
      <div className="shadow-lg shadow-stone-600 bg-stone-700 text-ellipsis overflow-hidden ">
        <div className="flex flex-row py-6 align-middle">
          <img
            src={`${process.env.PUBLIC_URL}/image/profile.jpeg`}
            alt="profile"
            className="hidden md:inline-block w-60 rounded-full ml-8"
          />
          <div className="flex flex-col grow m-auto">
            <h3 className="text-4xl font-semibold py-3 flex justify-center">
              Cheng Ximen
            </h3>
            <ul className="flex flex-wrap justify-around py-5 md:pt-10 px-3 md:flex-row">
              <li>
                <i className="fa-solid fa-location-dot text-sky-600" />{" "}
                Vancouver, BC
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cheng-ximen/">
                  <i className="fa-brands fa-linkedin text-sky-600" /> Linkedin
                  Profile
                </a>
              </li>
              <li onClick={handleEmailClick} className="hover:cursor-pointer">
                <i className="fa-solid fa-envelope text-sky-600" />{" "}
                ximen100@gmail.com
              </li>

              <li>
                <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
                  <i className="fa-solid fa-file-lines text-sky-600" /> resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="px-12 pb-12">
          I come from a finance background. Through the years doing analytical
          work, I grew a strong interest in leveraging technology to build
          something cool and also the great amount of fun in the problem solving
          process itself!
          <br />
          <br />
          I'm currently working as a financial analyst at ACC360, mainly
          covering the merchandising side data analysis. I use python, SQL and
          VBA for the ETL and modeling process; DAX and PowerBI for
          visualization.
        </p>
      </div>
      <div className="my-10 shadow-lg shadow-stone-600 bg-stone-700">
        <h3 className="text-3xl font-semibold p-8 text-[#6B8490]">
          About This Site
        </h3>
        <p className="px-12 pb-12">
          I've been learning web development stack for a while. As internet has
          been a pretty major channel of how we exchange information nowadays,
          I'd love to get to the bottom of how it works and also it's been a
          nice getaway for me to just get immersed in coding and problem
          solving, which make me feel like
          <img
            src={`${process.env.PUBLIC_URL}/image/icon-home.png`}
            className="inline"
            alt="iron man icon"
          />
          <br />
          <br />
          This site is just a fun project for me to put what I've learned to use
          and showcase my work. It's done in React and formatted with Tailwind
          css. The blog section is some of the data science projects I did when
          I first landed in Vancouver, settling down and job searching. The game
          section is a simple car game I developed based on an old 2D mobile
          game i used to play in school. I thought it might be fun to recreate a
          3D version with React-Three-Fiber.
        </p>
      </div>
    </MainCententLayout>
  );
}

export default About;
