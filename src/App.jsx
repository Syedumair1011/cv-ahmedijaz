import { useState } from 'react'
import cvlogo from './assets/ahmed-ijaz.png'
import './App.css'
import whatsapp_icon from './assets/WhatsApp_icon.webp'
import lan_icon from './assets/lan.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container-fluid'>
      <div className='toprow'  style={{ background: 'black', top: 0 }}>
        <p>Test App</p>
      </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-8'>
          <div className='row'>
          <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={cvlogo} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top' }} alt="CV Logo" />
            </div>
              <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12' >
                <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Ahmed Ijaz Khawaja
                </h2>
                <h5 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bolder' }}>Innovative | Creative | Energetic</h5>
                <h6 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Incharge Support Center</h6>
              </div>
              </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12' >
            <div className='row align-items-center active'>
              <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' >
              <svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
              </svg>
              </div>
              <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                <h6 className="d-flex justify-content-start"><a href='https://api.whatsapp.com/send?phone=923215927882' target='_blank' style={{color: 'black'}}><img src={whatsapp_icon} height={25} width={25}></img> <span>92 321 5927882 </span></a></h6>
              </div>
            </div>
            <div className='row'>
            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="5 12 3 12 12 3 21 12 19 12" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
              </div>
              <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                <h6 className="d-flex justify-content-start">Al-Dhabab City Al Jubail</h6>
              </div>
            </div>
            <div className='row'>
            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>
              </div>
              <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                <h6 className="d-flex justify-content-start"><a href='mailto:ahmadijazbutt@hotmail.com' style={{color: 'black'}}>ahmadijazbutt@hotmail.com</a></h6>
              </div>
            </div>
            <div className='row'>
            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2" /><line x1="8" y1="11" x2="8" y2="16" /><line x1="8" y1="8" x2="8" y2="8.01" /><line x1="12" y1="16" x2="12" y2="11" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
              </div>
              <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                <h6 className="d-flex justify-content-start"><a href='https://www.linkedin.com/in/ahmed-ijaz-khawaja-b7271a28' target='_blank' style={{color: 'black'}}>Ahmed Ijaz Khawaja</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <section id='education'>
      <div className='container-fluid'>
      <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
      <div className='row'>
      <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
      <img width='30' height='30' src='https://img.icons8.com/ios-filled/50/education.png' alt='education'/>
      </div>
        <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
          <h5 style={{textAlign: 'left', fontWeight: 'bolder'}}>Education</h5>
        </div>
      </div>
      </div>
      </div>
      <hr></hr>
        <table className='table table-striped'>
          <tbody>
          <tr>
            <td>

              <h5>Hajvery University, Lahore</h5>
              <h6 style={{textAlign: 'left', fontWeight: 'bolder'}}>Bachelors</h6>
              <h6>September 2010 - AUGUST 2014</h6>
              <h6>Degree: BSCS (Bachelors in Computer Science)</h6>
              <h6>CGPA: 3.0</h6>
            </td>
            <td>
              <h5>FG Degree College Kharian Cantr</h5>
              <h6 style={{textAlign: 'left', fontWeight: 'bolder'}}>Intermediate</h6>
              <h6>May 2009</h6>
              <h6>Grade: D</h6>
            </td>
            <td>
              <h5>Cantonment Public School Kharian Cantt</h5>
              <h6 style={{textAlign: 'left', fontWeight: 'bolder'}}>Matriculation</h6>
              <h6>March 2005</h6>
              <h6>Grade: B</h6>
            </td>
          </tr>
          </tbody>
        </table>
      
      </section>
      <section id='main'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4' style={{background: '#D9DADC'}}>
          <div className='container-fluid' style={{marginTop: '30px'}}>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
              <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="7" r="4" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                  </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                      <h5 style={{textAlign: 'left', fontWeight: 'bolder'}}>Profile</h5>
                    </div>
                  </div>
                  </div>
                  <hr></hr>
                  </div>
                  <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
              <p style={{ textAlign: 'justify' }}>Experienced professional, confident, and passionate about addressing and resolving challenges within organizations. I possess a diverse skill set, with proficiency in MS Office applications, including PowerPoint, Excel, Access, and Word. I also have a deep interest in project management and building strong customer relationships. My background is rich with extensive experience in customer relations and IT solutions. I am actively seeking opportunities to leverage my skills and expertise in a dynamic work environment. I am always ready to embrace new challenges and make meaningful contributions to the success of goal-oriented companies.</p>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{marginTop: '30px'}}>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
              <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><circle cx="12" cy="12" r="3" /></svg>
                  </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                      <h5 style={{textAlign: 'left', fontWeight: 'bolder'}}>Skills</h5>
                    </div>
                  </div>
                  </div>
                  <hr></hr>
                  </div>
                  <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          <ul>
                <li >Documentation - Reporting </li>
                <li>Problem Solving</li>
                <li>Bug Tracking</li>
                <li>Team Leading</li>
                <li>Management</li>
                <li>IT Solutions</li>
                <li>Communication</li>
                <li>Prsentation</li>
                <li>Time Management</li>
                <li>Quality Working</li>
                <li>Leadership and Team Management</li>
                <li>Training</li>
                <li>Quality Working</li>
              </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{marginTop: '30px'}}>
            <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
              <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><rect x="9" y="3" width="6" height="4" rx="2" /><path d="M9 17v-5" /><path d="M12 17v-1" /><path d="M15 17v-3" /></svg>
                  </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                      <h5 style={{textAlign: 'left', fontWeight: 'bolder'}}>REPORTING SKILLS
SOFTWARES
</h5>
                    </div>
                  </div>
                  </div>
                  <hr></hr>
                  </div>
                  <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          <ul>
                <li >Microsoft Excel</li>
                <li>Microsoft Access</li>
                <li>Microsoft Powerpoint</li>
                <li>Microsoft Word</li>
              </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{marginTop: '30px'}}>
            <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
              <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                   <img width='30' height='30' src='https://img.icons8.com/ios-filled/50/education.png' alt='education'/>
                  </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                      <h5 style={{textAlign: 'left', fontWeight: 'bolder'}}>Software Skills
</h5>
                    </div>
                  </div>
                  </div>
                  <hr></hr>
                  </div>
                  <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          <ul>
                <li >CRM</li>
                <li>Support Console</li>
                <li>HPSM Nokia(NAC, NAF)</li>
                <li>Microsoft Word</li>
              </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{marginTop: '30px'}}>
            <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
              <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                   <img width='30' height='30' src='https://img.icons8.com/ios-filled/50/education.png' alt='education'/>
                  </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                      <h5 style={{textAlign: 'left', fontWeight: 'bolder'}}>Certifications
</h5>
                    </div>
                  </div>
                  </div>
                  <hr></hr>
                  </div>
                  <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          <ul>
                <li>Best Supervisor of the year Award in 2020.</li>
                <li>Best Manager of the year Award in 2022.</li>
              </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{marginTop: '30px'}}>
            <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
              <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                   <img width='30' height='30' src='https://img.icons8.com/ios-filled/50/education.png' alt='education'/>
                  </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                      <h5 style={{textAlign: 'left', fontWeight: 'bolder'}}>Interest & Hobbies
                      </h5>
                    </div>
                  </div>
                  </div>
                  <hr></hr>
                  </div>
                  <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          <ul>
          <li>	Continuously learning new technologies and skills.	</li>
          <li>	Engaging in research articles for ongoing learning.	</li>
          <li>	Actively participating in voluntary social work	</li>

              </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{marginTop: '30px'}}>
            <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
              <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                <img src={lan_icon} height={25} width={25}></img>                   </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                      <h5 style={{textAlign: 'left', fontWeight: 'bolder'}}>Languages
                      </h5>
                    </div>
                  </div>
                  </div>
                  <hr></hr>
                  </div>
                  <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          <ul>
          <li>Urdu</li>
          <li>English</li>
              </ul>
          </div>
        </div>
      </div>
                   </div>
          <div className='col-lg-8'>
          <div className='container-fluid' style={{marginTop: '30px'}}>
            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-12'>
              <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="12 8 12 12 14 14" /><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" /></svg>
                  </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                      <h5 style={{textAlign: 'left', fontWeight: 'bolder'}}>Professional Experience</h5>
                    </div>
                  </div>
                  </div>
                  <hr></hr>
                  </div>

                  <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
              <h5>Pakistan Telecommunication Company Ltd </h5>
              <span>Lahore, Pakistan</span>
              <h6 style={{textAlign: 'left', fontWeight: 'bolder'}}>In-charge Support Center | Floor Manager</h6>
              <span>February 2020 – October 2023</span>
              <br></br>
              <br></br>
              <p style={{ textIndent: '2em' }}>
              I worked with the position of In-charge Support Center (Senior Team Leader) at PTCL, where I was responsible for overseeing a team of Supervisors in the Service Support Center department.<br></br>
Throughout my tenure, I have had the opportunity to develop and refine my Skills through a variety of tasks, including:
              </p>
              <ul style={{ paddingLeft: '2em' }}>
                <li >I learned how to manage the department and how to lead.</li>
                <li>I learned about handling/making strategies and formulating them</li>
                <li>I learned how to supervise staff and manage inventory</li>
              </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{marginTop: '30px'}}>
        <div className='row'>
          <div className='col-lg-12'>
              <h5>Pakistan Telecommunication Company Ltd </h5>
              <span>Lahore, Pakistan</span>
              <h6 style={{textAlign: 'left', fontWeight: 'bolder'}}>Floor Supervisor | Senior Team Leader</h6>
              <span>March 2017 – February 2020</span>
              <br></br>
              <br></br>
              <p style={{ textIndent: '2em' }}>
              As a Floor Supervisor (Senior Team Leader) at PTCL, a telecom leader, I fostered a productive environment, managed operations, and led a team dedicated to customer solutions.<br></br>
During my tenure, I acquired valuable skills and experiences, including:

              </p>
              <ul style={{ paddingLeft: '2em' }}>
              <li>	Proficient in departmental management and leadership skills.	</li>
              <li>	Deep understanding of telecom networks' functionality.	</li>
              <li>	Collaborated with PTCL stakeholders to resolve work hurdles.	</li>
              <li>	Expertise in CRM, SMP, HPSM, NOKIA Motive, and Nokia Fiber Analyzer software.	</li>
              <li>	Skilled in task and data management using MS Office (PowerPoint, Excel).	</li>
              <li>	Conducted team training on new management-issued updates.	</li>
              <li>	Competent in Outlook usage and professional email composition.	</li>
              <li>	Achieved consistent yearly performance ratings of 95%+ as a Floor Supervisor.	</li>
              </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{marginTop: '30px'}}>
        <div className='row'>
          <div className='col-lg-12'>
              <h5>Pakistan Telecommunication Company Ltd </h5>
              <span>Lahore, Pakistan</span>
              <h6 style={{textAlign: 'left', fontWeight: 'bolder'}}>Customer Support Representative | Backup Supervisor</h6>
              <span>July 2014 – March 2017 </span>
              <br></br>
              <br></br>
              <p style={{ textIndent: '2em' }}>
              I started at PTCL as a Customer Service Representative (CSR), addressing customer inquiries, and then transitioned to a backup supervisor role. Handled diverse user queries related to PTCL's Telecom Services throughout my tenure, encompassing various responsibilities.
              </p>
              <ul style={{ paddingLeft: '2em' }}>
              <li>	Manage inbound calls of Domestic Customers.	</li>
              <li>	Logged technical complaints in the System according to the issue.	</li>
              <li>	Troubleshoot and segregate the technical fault according to the issue.	</li>
              <li>	Provide qualified information to customers regarding products and about quires	</li>
              <li>	Provide better customer service to customers	</li>
              <li>	Coordinate with the backend team for the resolution of the issue.	</li>
              <li>	Monitor the team.	</li>
              <li>	Maintain attendance records of the team members.	</li>
              <li>	Develop relationships with existing and new customers via Telephone calls and Emails	</li>
              </ul>
          </div>
        </div>
      </div>

      <div className='container-fluid' style={{marginTop: '30px'}}>
            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-12'>
              <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><circle cx="12" cy="12" r="3" /></svg>
                  </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                      <h5 style={{textAlign: 'left', fontWeight: 'bolder'}}>Projects</h5>
                    </div>
                  </div>
                  </div>
                  <hr></hr>
                  </div>
                  <div className='container-fluid' style={{marginTop: '30px'}}>
        <div className='row'>
          <div className='col-lg-12'>
              <p style={{ textIndent: '2em' }}>
Following  Projects that i have done in my Career            </p>
              <ul style={{ paddingLeft: '2em' }}>
              <li>	Created documentation and flow charts to define departmental structures.	</li>
              <li>	Crafted job descriptions for roles like SSAs, Team Leads, Assistant Manager, Manager, and Senior Manager.	</li>
              <li>	Established Operational Level Agreements (OLAs) with relevant departments for operational alignment.	</li>

              </ul>
          </div>
        </div>
      </div>

      <div className='container-fluid' style={{marginTop: '30px'}}>
            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-12'>
              <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                   <img width='30' height='30' src='https://img.icons8.com/ios-filled/50/education.png' alt='education'/>
                  </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
                      <h5 style={{textAlign: 'left', fontWeight: 'bolder'}}>Conferance & Workshops</h5>
                    </div>
                  </div>
                  </div>
                  <hr></hr>
                  </div>
                  <div className='container-fluid' style={{marginTop: '30px'}}>
        <div className='row'>
          <div className='col-lg-12'>
              <p style={{ textIndent: '2em' }}>
Following  Workshops that i have attended in my Career            </p>
              <ul style={{ paddingLeft: '2em' }}>
              <li>	Flash Fiber Architecture and Operations Training	</li>
              <li>	Telecom for NON-Telecom Professionals	</li>
              <li>	Improving PTCL Contact Center Services	</li>
              <li>	Cultivating a culture of superior customer service	</li>
              <li>	Enhancing managerial skills	</li>
              <li>	Developing future-ready agents	</li>
              <li>	Understanding TR-069	</li>


              </ul>
          </div>
        </div>
      </div>
            </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default App;
