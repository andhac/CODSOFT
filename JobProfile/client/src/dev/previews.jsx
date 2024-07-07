import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Navbar from "../components/Navbar";
import JobResult from "../components/JobResult";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import JobPage from "../components/JobPage/JobPage";
import SignIn from "../components/Auth/SignIn";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
            <ComponentPreview path="/PaletteTree">
                <PaletteTree/>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
            <ComponentPreview path="/JobResult">
                <JobResult/>
            </ComponentPreview>
            <ComponentPreview path="/Cards">
                <Cards/>
            </ComponentPreview>
            <ComponentPreview path="/Footer">
                <Footer/>
            </ComponentPreview>
            <ComponentPreview path="/JobPage">
                <JobPage/>
            </ComponentPreview>
            <ComponentPreview path="/SignIn">
                <SignIn/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews