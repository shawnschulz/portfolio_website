//put imports here
//
import './simple.css'
import gpt_flow_icon from "./images/gpt-flow-icon.png"
import shblog_icon from "./images/shblog-icon.png"
import gene_info_icon from "./images/gene_info_icon.png"
import itch_icon from "./images/itch_icon.png"
import github_icon from "./images/github.png"
import linkedin_icon from "./images/linkedin.png"
import profile_pic from "./images/profile_pic.jpg"
export default function about() { 
    return (
    <div className = "portfolio-body">
    Shawn Schulz's Website
    <div>
            <img src={profile_pic} style= {{width: 180, height: 180}}/>
        <p> Hello and welcome to my website! I'm Shawn, an aspiring computational biologist and data scientist.</p> 
        <p> I want to model how somatic mutations drive the specific disease 
            pathologies to create targeted treatments for all diseases </p>
        <p> I am also interested in using machine learning to model a variety 
            of problems, as well as to automate tasks in biotechnology. 
            </p> 
        <p> In my free time I like biking and developing video games. </p>
       </div>
        <a href="/resume" target="_blank" rel="noopener noreferrer">
        <p>
            You can download my resume here!
        </p>
        </a>
        <p> 
        Click on one of the icons below to check out the projects I'm working on!
        </p>
        <div className="project-icons-container">
        <a href="/shblog" target="_blank" rel="noopener noreferrer">
        <p>
        ||  my blog and dev logs (WIP) | 
        </p>
        <img src={shblog_icon} style= {{width: 220, height: 220}}/>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
        <p>
             | gpt-flow, an llm flowchart | 
        </p>
        <img src={gpt_flow_icon} style= {{width: 220, height: 220}}/>
        </a>
        <a href="/gene_info_calculator" target="_blank" rel="noopener noreferrer">
        <p>
        | research projects + papers |
        </p>
        <img src={gene_info_icon} style= {{width: 220, height: 220}}/>
        </a>
            <a href="https://bankerz.itch.io/" target="_blank" rel="noopener noreferrer">
        <p>
        | video games on itch.io! ||
        </p>
            <img src={itch_icon} style= {{width: 220, height: 220}}/>
            </a>
        </div>
    <p>
        <div className = "social-media-container"> 

            <a href="https://www.linkedin.com/in/shawn-schulz-151b0313b/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_icon} style= {{width: 60, height: 60}}/>
            </a>
            <a href="https://github.com/shawnschulz" target="_blank" rel="noopener noreferrer">
            <img src={github_icon} style= {{width: 60, height: 60}}/>
            </a>
        </div>
    </p>
      </div>
    )
}
