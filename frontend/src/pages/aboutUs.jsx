import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl bg-white bg-opacity-95 rounded-lg shadow-lg p-10">
        <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to our project! I built this website to provide a seamless, interactive
          platform for users to access and explore a variety of machine learning models.
          For the models themselves, Zahra Bukhari and I collaborated on the creation of multiple data science repositories, which you can discover at our&nbsp;
          <a 
            href="https://github.com/KishanYern/Data-Science-Repository" 
            className="text-blue-600 font-semibold hover:underline" 
            target="_blank" 
            rel="noopener noreferrer">
            Data Science Repository
          </a>.
        </p>
        <p className="text-lg mb-6">
          My goal was to bring these powerful models to life by developing a user-friendly front-end.
          Using <span className="font-bold">ReactJS</span> and <span className="font-bold">Tailwind CSS</span>, 
          I designed and built this website so that you can easily interact with the models and see their predictions in action.
        </p>
        <p className="text-lg mb-6">
          The backend of this project leverages Flask API calls to communicate with the models. While the website itself was entirely created by me,
          Zahra played a key role in building the machine learning models behind the scenes. Together, our work
          bridges the gap between advanced data science and an accessible user interface.
        </p>
        <p className="text-lg mb-6">
          For a closer look at how this project came together, please explore the GitHub repository for the website at&nbsp;
          <a 
            href="https://github.com/KishanYern/AI-Website" 
            className="text-blue-600 font-semibold hover:underline" 
            target="_blank" 
            rel="noopener noreferrer">
            AI-Website
          </a>.
          You can also check out the Data Science Repository for more information on the models and data that power these predictions.
        </p>
        <p className="text-lg mb-6">
          Our aim is to democratize access to advanced machine learning by making it as intuitive as possible
          for anyone to experiment with these models. Thank you for visiting, and I hope you enjoy exploring the AI showcase.
        </p>
        <p className="text-lg">
          With warm regards,<br />
          Kishan Yerneni.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
