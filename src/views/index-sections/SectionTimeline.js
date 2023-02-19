import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from "reactstrap";
import { TbSchool, TbAward, TbPlayerPlay } from 'react-icons/tb';
import { MdWorkOutline } from 'react-icons/md';
import { AiOutlineProject } from 'react-icons/ai';

function SectionTimeline() {
    const contentStyle = {
        border: '1px solid rgb(255, 255, 255, 0.2)',
        borderRadius: '15px',
        background: 'rgb(255, 255, 255, 0.03)',
        boxShadow: '0 0 10px 0 #0b1011',
    }
    return (
        <>        
        <div className="section section-dark section-nucleo-icons">
            <Container> 
                <VerticalTimeline>
                    {/* Careerhack 2023 */}
                    <VerticalTimelineElement                        
                        contentStyle={contentStyle}                    
                        date="Feb 2023"
                        iconStyle={{ background: '#0b1011', color: 'orange' }}
                        icon={<TbAward />}
                    >
                        <a
                            href="https://www.tsmc.com/static/english/careers/2023Careerhack/index.html#top"
                            target="_blank"
                            rel="noreferrer"
                            style={{color: 'orange'}}
                        >
                            <h3 className="vertical-timeline-element-title">Achieved 3rd place</h3>
                            <h4 className="vertical-timeline-element-subtitle">CareerHack in 2023 TSMC IT x Google</h4>
                        </a>
                            <h6> Nginx / GCP / Directus / PostgreSQL / Discord Bot </h6>
                            <p>
                                Create a small team helper on Discord.
                                This small helper can help deal with the team's daily life,
                                reduce the time team members spend on general affairs,
                                and improve work efficiency and work environment.
                                General affairs can be activities such as monitoring the attendance of the team and making afternoon tea.
                            </p>
                    </VerticalTimelineElement>

                    {/* WSDM */}
                    <VerticalTimelineElement                        
                        contentStyle={contentStyle}                    
                        date="Jan 2023"
                        iconStyle={{ background: '#0b1011', color: 'orange' }}
                        icon={<TbAward />}
                    >
                        <a
                            href="https://www.wsdm-conference.org/2023/program/wsdm-cup"
                            target="_blank"
                            rel="noreferrer"
                            style={{color: 'orange'}}
                        >
                            <h3 className="vertical-timeline-element-title">Achieved 4th place</h3>
                            <h4 className="vertical-timeline-element-subtitle">Visual Question Answering Challenge in 2023 WSDM Cup</h4>
                        </a>
                            <h6> PyTorch / Docker </h6>
                            <p>
                            Given an image and a textual question,
                            draw the bounding box around the object correctly responding to that question.
                            For example, a bathroom photo might have a question like “Where do I wash my hands?”
                            with the sink selected as the answer.
                            Every image-question pair contains the response,
                            and there is only one correct response per image.
                            The winner provides the correct responses to the largest number of
                            questions that is quantified with the average intersection over union (IoU) score on the hidden test set.
                            </p>
                    </VerticalTimelineElement>

                    {/* google project */}
                    <VerticalTimelineElement                        
                        contentStyle={contentStyle}                    
                        date="Sep 2022 to Present"
                        iconStyle={{ background: '#0b1011', color: 'lightgreen' }}
                        icon={<AiOutlineProject/>}
                    >
                        <a
                            style={{color: 'lightgreen'}}
                            href="https://pixel.google/business/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="vertical-timeline-element-title">User Sentiment Monitoring System for Google Pixel Phones</h3>
                            <h4 className="vertical-timeline-element-subtitle">Google Pixel Phone, Taiwan</h4>
                        </a>
                            <h6> React(TS) / FastAPI(Python) / Scrapy / GCP / Docker / MongoDB </h6>
                            <p>
                            Led three first-year graduate students to design and build a platform to measure users' happiness towards product launch, new software releases, new feature drop, or bug fixes on Pixel phones in both English and Mandarin.
                            <ul>
                                <li>Design and build a crawler to collect user discussions and feedback from 8 forums for English and 7 forums for Mandarin.</li>
                                <li>Apply ABSA(Aspect-Based Sentiment Analysis) techniques to extract the entity and mood in user discussions and feedback.</li>
                                <li>Establish a general ABSA training/evaluating framework for faster and more flexible experiments.</li>
                                <li>Using FastAPI(Python) and ReactJS(TypeScript) to build a monitor for the Google Pixel Phones testing and marketing team to trace user sentiment.</li>
                            </ul>
                            </p>
                    </VerticalTimelineElement>
                    
                    {/* Careerhack 2022 */}
                    <VerticalTimelineElement                        
                        contentStyle={contentStyle}                    
                        date="Jan 2022"
                        iconStyle={{ background: '#0b1011', color: 'orange' }}
                        icon={<TbAward />}
                    >
                        <a
                            href="https://www.tsmc.com/static/english/careers/2022Careerhack/main.html"
                            target="_blank"
                            rel="noreferrer"
                            style={{color: 'orange'}}
                        >
                            <h3 className="vertical-timeline-element-title">Achieved 3rd place</h3>
                            <h4 className="vertical-timeline-element-subtitle">CareerHack in 2022 TSMC IT x Microsoft</h4>
                        </a>
                            <h6> React(TS) / FastAPI / MariaDB / Docker </h6>
                            <p>
                            Sustainable material management takes resource utilization as an important aspect of thinking, cuts in from the perspective of prevention, and then examines and analyzes the various utilization stages of substances from the perspective of life cycle. When the utilization of resources is maximized, the utilization of various substances will enter an appropriate cycle path. Naturally reduce waste production and associated environmental impact.
                            </p>
                    </VerticalTimelineElement>

                    {/* chemical cloud project */}
                    <VerticalTimelineElement                        
                        contentStyle={contentStyle}                    
                        date="Nov 2021 to Nov 2022"
                        iconStyle={{ background: '#0b1011', color: 'lightgreen' }}
                        icon={<AiOutlineProject/>}
                    >
                        <a
                            style={{color: 'lightgreen'}}
                            href="https://chemicloud.epa.gov.tw/ChemiCloud/index.html"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="vertical-timeline-element-title">Chemical Cloud</h3>
                            <h4 className="vertical-timeline-element-subtitle">Toxic and Chemical Substances Bureau, EPA, Executive Yuan, Taiwan</h4>
                        </a>
                            <h6> React(TS) / FastAPI(Python) / Scrapy / Docker / MariaDB / MongoDB </h6>
                            <p>
                            Design and build a platform for measuring social sentiment and for tracing the information diffusion.
                            <ul>
                                <li>Scrapy(Python) with multithreading from 9 news websites.</li>
                                <li>Extract chemicals in articles by multiprocessing with the suffix tree algorithm.</li>
                                <li>Apply NER(Named Entity Recognition) techniques to determine the organization and product name.</li>
                                <li>Train a topic classifier to classify the news topic(with five topics: drugs, chemical disaster prevention, environmental pollution, food safety, and others).</li>
                                <li>Apply Text Summarization techniques to summarize the news articles to prompt annotators when annotating. </li>
                                <li>Using FastAPI(Python) and ReactJS(TypeScript) to build a monitor for the Toxic and Chemical Substances Bureau to trace the information diffusion and public sentiment.</li>
                            </ul>
                            </p>
                    </VerticalTimelineElement>

                    {/* Paper */}
                    <VerticalTimelineElement                        
                        contentStyle={contentStyle}                    
                        date="Oct 2020"
                        iconStyle={{ background: '#0b1011', color: 'orange' }}
                        icon={<TbAward />}
                    >
                        <a
                            href="https://tanetsys.mcu.edu.tw/index.php/tanet2020/tanet2020/paper/view/8489"
                            target="_blank"
                            rel="noreferrer"
                            style={{color: 'orange'}}
                        >
                            <h3 className="vertical-timeline-element-title">Paper accepted</h3>
                            <h4 className="vertical-timeline-element-subtitle">Taiwan Academic Network Conference</h4>
                        </a>
                            <p>
                            In-vehicle networks are becoming increasingly important for driving safety and convenience, and clustering can enhance the communication quality of these networks. However, direct communication between vehicles and infrastructure can cause interference and redundant information. By integrating adjacent vehicles' driving information, the communication quality can be improved while reducing redundancy. This study proposes a hierarchical clustering structure that predicts the connection survival time based on vehicle relationships, providing a quantitative index for predicting the connection quality when clustering between vehicles. Experiments show that this algorithm outperforms other algorithms in the connection between vehicles and infrastructure, as well as in the effect of clustering between vehicles. This paper highlights the crucial importance of how vehicles form a cluster and how to select a cluster leader to optimize the efficiency of the cluster.
                            </p>
                    </VerticalTimelineElement>

                    {/* Graduate */}
                    <VerticalTimelineElement                        
                        contentStyle={contentStyle}                    
                        date="Sep 2018 to Sep 2021"
                        iconStyle={{ background: '#0b1011', color: '#ff7f7f' }}
                        icon={<TbSchool/>}
                    >
                        <a
                            style={{color: '#ff7f7f'}}
                            href="https://www.ncku.edu.tw/index.php?Lang=en"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="vertical-timeline-element-title">Starting my graduate journey</h3>
                            <h4 className="vertical-timeline-element-subtitle">Computer Science, National Cheng Kung University, Taiwan</h4>
                        </a>
                    </VerticalTimelineElement>

                    {/* JUNE 1 */}
                    <VerticalTimelineElement                        
                        contentStyle={contentStyle}                    
                        date="Sep 2019 to Sep 2021"
                        iconStyle={{ background: '#0b1011', color: 'lightblue' }}
                        icon={<MdWorkOutline/>}
                    >
                        <a
                            style={{color: 'lightblue'}}
                            href="https://www.june1.com.tw/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="vertical-timeline-element-title">Data Analyst & Software Engineering Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">JUNE FIRST CO., LTD Headquarter, Taiwan</h4>
                        </a>
                        <h6>React(TS) / FastAPI(Python) / GCP / MySQL / MongoDB / Docker / Terraform</h6>
                        <p>
                            Design, establish, deploy a customer behavior analysis platform on GCP and local
                            <ul>
                                <li>Built out the data and reporting infrastructure from the ground up using FastAPI(Python) as a backend framework, RabbitMQ as a message queue system, MariaDB and MongoDB as databases(local) and ReactJS(TypeScrip) as a frontend framework.</li>
                                <li>Managed infrastructure as code with Terraform and deployed the platform on GCP by CloudBuild, hosted the monitor by CloudRun, and scheduled the data analysis process by CloudSchedule, which will trigger the CloudFunctions and store the data in Bucket.</li>
                                <li>Applied natural language processing techniques to extract customer sentiment by FacebookAPI replies for the marketing team to trace the sentiment.</li>
                                <li>Train a recommendation system model to predict the next top k products a customer may purchase.</li>
                                <li>Detected malicious clicks and reduced advertising expenses by 80%.</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>

                    {/* NCKU */}
                    <VerticalTimelineElement                        
                        contentStyle={contentStyle}                    
                        date="Sep 2019 to Sep 2021"
                        iconStyle={{ background: '#0b1011', color: 'lightblue' }}
                        icon={<MdWorkOutline/>}
                    >
                        <a
                            style={{color: 'lightblue'}}
                            href="https://www.nchu.edu.tw/en-index"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="vertical-timeline-element-title">Student Dormitory Network Manager</h3>
                            <h4 className="vertical-timeline-element-subtitle">National Chung Hsing University Male Dorm for Foreign Students, Taiwan</h4>
                        </a>
                        <p>
                            <ul>
                                <li>Identify trends for machine failure and report bugs.</li>
                                <li>Set up routers for dorm students.</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>

                    {/* Google */}
                    <VerticalTimelineElement                        
                        contentStyle={contentStyle}                    
                        date="Jul 2019 to Sep 2019"
                        iconStyle={{ background: '#0b1011', color: 'lightblue' }}
                        icon={<MdWorkOutline/>}
                    >
                        <a
                            style={{color: 'lightblue'}}
                            href="https://www.google.com/about/datacenters/locations/changhua-county/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="vertical-timeline-element-title">Data Center Technician Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">Google Changhua Data Center, Taiwan</h4>
                        </a>
                        <p>
                            <ul>
                                <li>Upgrade, deployments, cabling and rack & stack servers.</li>
                                <li>Identify trends for machine failure, report bugs, and work with remote teams to resolve them.</li>
                                <li>Contribute to deployment and maintenance projects and support data center infrastructure.</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>

                    {/* College */}
                    <VerticalTimelineElement                        
                        contentStyle={contentStyle}                    
                        date="Sep 2018 to Sep 2021"
                        iconStyle={{ background: '#0b1011', color: '#ff7f7f' }}
                        icon={<TbSchool/>}
                    >
                        <a
                            style={{color: '#ff7f7f'}}
                            href="https://www.nchu.edu.tw/en-index"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="vertical-timeline-element-title">Starting my college journey</h3>
                            <h4 className="vertical-timeline-element-subtitle">Computer Science, National Chung Hsing University, Taiwan</h4>
                        </a>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: '#0b1011', color: '#fff' }}                        
                        icon={<TbPlayerPlay/>}
                    />
                </VerticalTimeline>
            </Container>
        </div>
        </>
    )
}


export default SectionTimeline;