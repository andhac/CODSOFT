import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Navbar from "../components/Navbar";
import JobResult from "../components/JobResult";

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
        </Previews>
    )
}

export default ComponentPreviews