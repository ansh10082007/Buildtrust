import { createContext,useContext,useEffect,useState } from "react";
import api from "../api/api"
import { AuthContext } from "./AuthContext";

const LikeContext = createContext();

const LikeProvider = ({children}) =>{
    const {isLoggedIn} = useContext(AuthContext);
    const [likedBuildingsIds,setLikedBuildingsIds] = useState([]);

    const addLike = async(buildingId)=>{
        setLikedBuildingsIds(prev=>[...prev,buildingId]);
    }
    const removeLike = async(buildingId)=>{
        setLikedBuildingsIds((prev)=>(prev.filter((id)=>(id!==buildingId))))
    }

    useEffect(()=>{
        if(!isLoggedIn){
            setLikedBuildingsIds([])
            return ;
        }
        const fetchLikedBldgs = async()=>{
            try{
                const response = await api.get("/users/profile/me");
                setLikedBuildingsIds(response.data.likedBuildingsIds);
            }catch(error){
                console.log(error);
            }
        }
        fetchLikedBldgs();
    },[isLoggedIn])

    return <LikeContext.Provider value={{likedBuildingsIds,setLikedBuildingsIds,addLike,removeLike}}>
        {children}
    </LikeContext.Provider>
}

export {LikeContext,LikeProvider}