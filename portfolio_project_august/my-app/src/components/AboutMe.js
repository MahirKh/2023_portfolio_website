import author from "../images/Mahir.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5 aboutMe">
      <div className="row">
        <div className="col-lg-4 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-8 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            My name is Mahir Khandaker and I am currently in my fourth year of a
            five-year Electrical and Biomedical Engineering Co-op program at
            McMaster University.
            <br></br>
            <br></br>I am passionate about working with technology and creating
            ways to innovate aspects of any project I participate in. My
            education at McMaster University has enhanced my technical skills
            and my ability to apply my knowledge in communication systems,
            electronic circuits, and object-oriented and embedded systems
            programming in Python, Java, C and C++.
            <br></br>
            <br></br>
            Additionally, outside of my university education I have deepened my
            knowledge in full-stack development. I utilized these skills when
            creating and designing web and android applications which are listed
            down below.
            <br></br>
            <br></br>
            <h4>Technical Skills</h4>
          </p>
          <div className="row">
            <div class="col-md-4 col-sm-12">
              <p>
                Programming Languages
                <ul>
                  <li>C</li>
                  <li>C#</li>
                  <li>C++</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>SQL</li>
                  <li>PostgreSQL</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </p>
            </div>
            <div class="col-md-4 col-sm-12">
              <p>
                Technologies and Frameworks
                <ul>
                  <li>Nodejs</li>
                  <li>React</li>
                  <li>Express.js</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>MongoDB</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Google Cloud</li>
                  <li>Android Studio</li>
                </ul>
              </p>
            </div>
            <div class="col-md-4 col-sm-12">
              <p>
                Tools
                <ul>
                  <li>Visual Studio</li>
                  <li>Visual Studio Code</li>
                  <li>Arduino IDE</li>
                  <li>Cantata</li>
                  <li>Atlassian Development Tools</li>
                </ul>
              </p>
            </div>
          </div>

          <p>
            <h3>Links</h3>
            <b>LinkedIn:</b>{" "}
            <a
              className="hyper-link"
              onClick={() =>
                window.open("https://www.linkedin.com/in/mahir-khandaker/")
              }
            >
              https://www.linkedin.com/in/mahir-khandaker
            </a>
            <br></br>
            <b>GitHub:</b>{" "}
            <a
              className="hyper-link"
              onClick={() => window.open("https://github.com/MahirKh")}
            >
              https://github.com/MahirKh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;