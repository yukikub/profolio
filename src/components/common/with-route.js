import { useNavigate,useParams } from "react-router-dom";

export const withRouter = (Component) =>{
    function ComponentWithRouterPorp(props) {
        let navigate = useNavigate()
        let params = useParams()
        return <Component {...props} router={{navigate,params}}/>
    }
    return ComponentWithRouterPorp
}