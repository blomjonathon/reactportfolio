import React from 'react';
import resume from '../assets/resume.pdf'

export default function Resume() {
  return (
    <div>
      <div className='resume'>
      <a href={resume} download="resume.pdf">
        <h4>Download Resume</h4>
      </a>
        <h3>Front End</h3>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>React</li>
          <li>Handlebars.js</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Some TypeScript knowledge</li>
        </ul>
        <h3>Back End</h3>
        <ul>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Express</li>
          <li>Node.js</li>
        </ul>
        <p>Familiar with Github and Agile methodologies.</p>
      </div>
    </div>
  );
}
