import {BsFillBootstrapFill} from 'react-icons/bs';
import {FcDocument} from 'react-icons/fc';
import {MdSmartphone} from 'react-icons/md';
import {MdOutlineTouchApp} from 'react-icons/md';
import {AiFillHtml5}from 'react-icons/ai';
import {FaNodeJs}from 'react-icons/fa';
import {SiSass}from 'react-icons/si';
import {IoLogoJavascript}from 'react-icons/io';
console.log('bootstrap',BsFillBootstrapFill);
const FeaturesArr=[
    {
        icon:BsFillBootstrapFill,
        heading:'Built with Bootstarp',
        desc:'Silicon is the powerful front-end solution based on Bootstrap 5 — the world’s most popular responsive, mobile-first front-end component library.'
    },
    {
        icon:FcDocument,
        heading:'Detailed Documentation',
        desc:'Download package includes the documentation that covers all crucial information about how to get started, customize template and components usage.'
    },
    {
        icon:MdSmartphone,
        heading:'Mobile Freindly Interface',
        desc:"It's not a surprise that nowadays over 80% of users surf the inernet using their mobile devices. Silicon is 100% responsive and optimized for small touch screens."
    },
    {
        icon:MdOutlineTouchApp,
        heading:'Touch-Enabled Sliders',
        desc:"In the era of touch screens it's important to ensure great user experience on mobile, especially when it comes to such frequently used interface component as slider.",
    }
    ,
    {
        icon:AiFillHtml5,
        heading:'W3C Valid HTML Code',
        desc:'All HTML files are checked via W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Silicon is innovative at its core.',
    }
    ,
    {
        icon:FaNodeJs,
        heading:'Kick-Start Your Development',
        desc:'Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included in download package. Full tasks automation.',
    }
    ,
    {
        icon:SiSass,
        heading:'Easy to Customize with Sass',
        desc:'Silicon is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.',
    }
    ,
    {
        icon:IoLogoJavascript,
        heading:'Future Proof Java-Script',
        desc:'Silicon core scripts as well as all dependencies are written in vanilla JS. And now with Bootstrap 5 we finally drop jQuery and use ES6 modules.',
    }
   

]
export {FeaturesArr};