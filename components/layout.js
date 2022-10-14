import Navbar from "./navbar";
import {useRouter} from "next/router";

export default function Layout({children}) {
    const router = useRouter();

    return (
        <div className="layout_container">
            {/* Layout (footer will be added) */}
            <Navbar/>
            {children}
        </div>
    )
}
