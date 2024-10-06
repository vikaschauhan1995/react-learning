import { useLocation } from "react-router-dom"


const NestedRoute = () => {
    const location = useLocation();
    console.log("location=>>", location);
    return <div>
        {location?.pathname}<br />
        Nested route amdmin home"
    </div>
}

export default NestedRoute