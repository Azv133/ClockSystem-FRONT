import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { getMarkings } from "../helpers/markingHelper";

export const useMarking = (markingKey) => {

    const { user } = useUser();
    const [markings, setMarkings] = useState([]);

    const getAllMarings = async() => {
        const result = await getMarkings(user.id_usuario);
        if(result.status){
        setMarkings(result.marcaciones);
        } 
    }
    
    useEffect(() => {
        getAllMarings()
    }, [markingKey])

  return {
    markings,
  }
}
