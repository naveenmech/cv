"use client";
import { IoMdAttach } from "react-icons/io";

const CoverLetter: React.FC = () => {
  const PDF_FILE_URL: string = "http://localhost:3000/resume.pdf";

  const downloadPdf = (url: string): void => {
    const fileName: string | undefined = url.split("/").pop();
    if (fileName) {
      const aTag: HTMLAnchorElement = document.createElement("a");
      aTag.href = url;
      aTag.setAttribute("download", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 justify-between flex">
          Cover Letter
          <span>
            <button
              className="border-[1px] text-sm p-2 bg-red-500 hover:text-red-500 hover:bg-white hover:border-gray-300 hover:shadow-lg  rounded-md transition delay-150 duration-300  flex items-center gap-1 text-white"
              onClick={() => {
                downloadPdf(PDF_FILE_URL);
              }}
            >
              Resume PDF
              <span className="text-center">
                <IoMdAttach />
              </span>
            </button>
          </span>
        </h1>
        <p className="text-lg mb-4">
          Naveenkumar A
          <br />
          Address: A.Vasanthi,64,Middle street,Goundanpudhur,Minnampalli (po)
          <br />
          Karur(Dt)-639116,Tamilnadu, India.
          <br />
          Email: vas.naveekumar99@gmail.com
          <br />
          Phone Number : +91 9842850819
          <br />
          Date of Birth : 13-10-1999
        </p>

        <p className="text-lg mb-4">Dear Sir/Madam,</p>
        <p className="text-lg mb-4">
          I am writing to express my interest in the Front End Software Engineer
          position at Leventis Software Solutions Private Limited, as
          advertised. With a strong educational background and hands-on
          experience in front-end development, I am eager to leverage my skills
          and contribute to your esteemed organization. My journey in software
          engineering began with a solid foundation in education, culminating in
          a Mechanical Engineering degree from Dr. NGP Institute of
          Technology,Coimbatore. Despite my academic focus, I was drawn to the
          world of technology, leading me to pursue further learning
          opportunities in software development. During my tenure at Leventis
          Software Solutions Private Limited, I spent 1.2 years as a Software
          Engineer, specializing in React.js and Next.js. I actively
          participated in the development of various projects, including an
          E-commerce website and a Todo Dashboard application. These experiences
          allowed me to enhance my proficiency in front-end technologies such as
          React.js, Next.js, and Tailwind CSS, while also gaining practical
          knowledge in Firebase for backend services and authentication
          purposes. Furthermore, I recently completed a React.js course at Qtree
          Technology, Coimbatore, further solidifying my skills and
          understanding of modern web development practices. My expertise also
          extends to HTML5,Tailwind css, CSS3, JavaScript, and Git-GitHub,
          ensuring that I am well-equipped to tackle challenges in the
          fast-paced world of front-end development. I am particularly drawn to
          Leventis Software Solutions Private, because of its reputation for
          fostering innovation and excellence in software engineering. I am
          excited about the prospect of joining your dynamic team and
          contributing to projects that push the boundaries of technology.
          Enclosed is my resume, which provides further details about my
          education, experience, and technical skills. I am keen on the
          opportunity to discuss how my background aligns with the needs of
          Leventis Software Solutions Limited and how I can contribute to your
          success. Thank you for considering my application.
        </p>
        <p className="text-lg mb-4">
          Sincerely,
          <br />
          Naveenkumar A
        </p>
      </div>
    </div>
  );
};

export default CoverLetter;
