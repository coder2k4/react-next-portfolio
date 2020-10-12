import {useGetUser} from '@/action/user'

const withAuth = (Component) => {
    return props => {
        const {data, loading} = useGetUser()
        if (loading)
            return <p>Loading...</p>

        if (!data) {
            return null //todo Redirect
        } else {
            return <Component user={data} loading={loading} {...props}/>
        }
    }

}

export default withAuth