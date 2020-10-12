import {useRouter} from "next/router";
import {useEffect} from "react";

const Redirect = ({to, ssr}) => {

    const router = useRouter()

    useEffect(() => {
        if (ssr) {
            window.location.pathName = to
        } else {
            router.push(to).then(r => null)
        }
    }, [])

    return null;
}