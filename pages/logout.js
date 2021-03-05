
import { useAuth } from "../hooks/use-auth.js";
import { useRouter } from 'next/router'


export default function logout() {
    const auth = useAuth()
    const router = useRouter()
    useEffect(() => {
        auth.signout().then(res=>{
            router.push("/")
        })
    }, [])
    return (
        <>
        </>
    )
}
