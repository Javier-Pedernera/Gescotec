import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
    return (
        <>
            <div style={{ width: '100%', height: '100%', display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <Header />
                <div style={{ width: '100%', height: '100%', display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", overflow: "hidden" }}><Outlet /></div>
                <Footer />
            </div>
        </>
    )
}