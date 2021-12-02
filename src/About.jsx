import React from 'react';
// import {NavLink} from 'react-router-dom';
import web from  '../src/images/abt3.svg';
import Common from './Common.jsx';

const About = () => {
    return (
        <>
        <div className="mu">
        <p>𝙃𝙞 𝙢𝙮𝙨𝙚𝙡𝙛 𝙃𝙖𝙧𝙨𝙝,𝙄 𝙖𝙢 𝙎𝙤𝙛𝙩𝙬𝙖𝙧𝙚 𝙀𝙣𝙜𝙞𝙣𝙚𝙚𝙧 𝙖𝙣𝙙 𝙄 𝙬𝙤𝙧𝙠𝙚𝙙 𝙤𝙣 𝙙𝙞𝙛𝙛𝙚𝙧 𝙩𝙚𝙘𝙝𝙣𝙤𝙡𝙤𝙜𝙞𝙚𝙨 𝙖𝙣𝙙 𝙝𝙖𝙫𝙚 𝙠𝙚𝙚𝙣 𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 𝙞𝙣 𝙩𝙝𝙚 𝙙𝙖𝙩𝙖 𝙨𝙩𝙧𝙪𝙘𝙩𝙪𝙧𝙚𝙨 𝙖𝙣𝙙 𝙖𝙡𝙜𝙤𝙧𝙞𝙩𝙝𝙢.𝙄 𝙡𝙤𝙫𝙚 𝙥𝙧𝙤𝙗𝙡𝙚𝙢 𝙨𝙤𝙡𝙫𝙞𝙣𝙜 𝙖𝙣𝙙 𝙢𝙮 𝙙𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙢𝙚𝙣𝙩 𝙖𝙧𝙚𝙣𝙖 𝙬𝙞𝙩𝙝 𝘽𝙖𝙘𝙠𝙚𝙣𝙙 𝙏𝙚𝙘𝙝𝙣𝙤𝙡𝙤𝙜𝙞𝙚𝙨 𝙖𝙨 𝙉𝙤𝙙𝙚𝙟𝙨 𝙖𝙣𝙙 𝙀𝙭𝙥𝙧𝙚𝙨𝙨𝙟𝙨,𝙈𝙤𝙣𝙜𝙤𝙙𝙗 𝙖𝙣𝙙 𝙈𝙤𝙣𝙜𝙤𝙤𝙨𝙚.</p>
        </div>
        <Common
          name="Welcome to About page"
          imgsrc={web}
          
          visit="/contact"
          btnname="Contact Now"
          
        />
       
        </>
    );
};
export default About;
