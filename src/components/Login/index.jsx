import LoginCard from './LoginCard'
import './style.css'
import Navbar from '../Navbar'

export default function index() {
    return (
        <>
            <Navbar />
            <div className='login-register'>
                <LoginCard />
            </div>
        </>
    )
}
