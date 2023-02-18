import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from "reactstrap";
import { TbSchool, TbBriefcase } from 'react-icons/tb';
import { FaHandPeace } from "react-icons/fa"

function SectionTimeline() {
    const contentStyle = 'rgb(255, 255, 255, 0.03)'
    return (
        <>        
        <div className="section section-dark section-nucleo-icons">
            <Container> 
                <VerticalTimeline                    
                >
                    <VerticalTimelineElement                        
                        contentStyle={{ background: contentStyle, color: 'orange', border: '1px solid orange' }}
                        date="Present"
                        contentArrowStyle={{color: 'orange'}}
                        iconStyle={{ background: '#0b1011', color: 'orange' }}
                        icon={< TbSchool/>}
                    >
                        <h3 className="vertical-timeline-element-title">Undertaking my CS master's degree</h3>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement                        
                        contentStyle={{ background: contentStyle, color: '#fff' }}                    
                        date="July 2021 - Sep 2022"
                        iconStyle={{ background: '#0b1011', color: '#fff' }}
                        icon={<TbBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title">Intern Software Engineer, Bank SinoPac</h3>
                        <h4 className="vertical-timeline-element-subtitle">Taiwan, Taipei</h4>
                        <h6> Kafka / SAS </h6>
                        <p>
                        Assisted builds a decentralized Kafka system for the bank's retail management department to handle batch data synchronization issues. This project aimed to address batch data synchronization issues, which were causing significant disruptions to the different department's operations. 
                        As an Intern with software engineering work experience, I had the privilege of assisting the department mentor in writing a report that aimed to convince high-level managers to adopt the decentralized Kafka system we had built for the retail management department—and involved in implementing various experiments to prove the scalability, reliability, and efficiency of the Kafka system we made for the department.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement                        
                        contentStyle={{ background: contentStyle, color: '#fff' }}
                        date="Sep 2021 ~ now"
                        iconStyle={{ background: '#0b1011', color: '#fff' }}
                        icon={< TbSchool/>}
                    >
                        <h3 className="vertical-timeline-element-title">Started my journey on a master degree in Computer Science at National Cheng Kung University</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement                        
                        date="Nov 2020 - Sep 2021"
                        contentStyle={{ background: contentStyle, color: '#fff' }}
                        iconStyle={{ background: '#0b1011', color: '#fff' }}
                        icon={<TbBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer, Rih-Ying  Construction Company</h3>
                        <h4 className="vertical-timeline-element-subtitle">Taiwan, Tainan</h4>
                        <h6> C#(ASP.NET Core) / AWS / PostgreSQL </h6>
                        <p>
                        I was critical in maintaining and developing the company's ERP system with ASP.NET Core and the MVC pattern. My main responsibilities included working with the team to resolve technical issues, developing new features, and implementing best practices such as OOP principles and clean architecture (i.e.SOLID) to ensure high code quality and maintainability. 
                        I was also responsible for collaborating with the team to ensure the seamless integration of new features into the existing system and troubleshooting and resolving any technical issues that arose.
                        </p>
                    </VerticalTimelineElement>                
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Sep 2019 - Dec  2020"
                        iconStyle={{ background: '#0b1011', color: '#fff' }}
                        contentStyle={{ background: contentStyle, color: '#fff' }}
                        icon={<TbBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer, BradⒸ</h3>
                        <h4 className="vertical-timeline-element-subtitle">Taiwan, Taichung</h4>
                        <h6>TypeScript(Angular, Vue) / MySQL / C# / AWS</h6>
                        <p>
                        In this job, I worked on a wide range of projects and gained exposure to various technologies, including TypeScript (Angular), NodeJS, C#, and AWS. I made significant contributions to both maintenance and development projects. One of my proudest achievements was improving a project's website performance, which resulted in a 30% increase in performance. Additionally, I built extensible and scalable integration pipelines using the AWS platform and worked on the development of a WebSocket server. This experience broadened my skill set and enhanced my technical abilities.
                        </p>
                    </VerticalTimelineElement>                
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: contentStyle, color: '#fff' }}
                        date="Dec 2018 - Sep 2019"
                        iconStyle={{ background: '#0b1011', color: '#fff' }}
                        icon={<TbBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title">System Engineer, Derjian Company</h3>
                        <h4 className="vertical-timeline-element-subtitle">Taiwan, Tainan</h4>
                        <h6>JavaScript(JQuery) / NodeJS / PHP / C# / SQL</h6>
                        <p>
                        I was involved in developing some government tender projects and maintaining the internal staff management system. This was my first job as a software engineer, and it provided me with valuable hands-on experience in the field.

                        </p>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        iconStyle={{ background: '#0b1011', color: '#fff' }}                        
                        icon={<FaHandPeace/>}
                    />
                </VerticalTimeline>
            </Container>
        </div>
        </>
    )
}


export default SectionTimeline;