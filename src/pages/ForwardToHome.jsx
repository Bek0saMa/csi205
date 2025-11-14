import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ForwardToHome = () => {
    const navigate = useNavigate()
    useEffect(() => navigate('../home'), [] )
    return (
        <>
        <h3>Forward To Home</h3>
        </>
    )
}

export default ForwardToHome