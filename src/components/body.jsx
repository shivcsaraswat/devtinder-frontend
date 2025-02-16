import { Outlet } from "react-router-dom"
import { Nav} from "./nav.jsx"
import { CopyRightFooter } from "./copyrightFooter.jsx";

const Body = () => { 
    return (
        <>
        <Nav/>
        <Outlet/>
        <CopyRightFooter/>
        </>
    );
}

export default Body 