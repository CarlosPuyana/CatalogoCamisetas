import { IPreguntasFrecuentes } from "../../interfaces/IPreguntasFrecuentes";
import supabase from "../supabase/supabase.ts";

class GeneralService {
    async getPreguntasRespuestasFrecuentes(): Promise<IPreguntasFrecuentes[]> {
        const {data, error} = await supabase.from('Preguntas_frecuentes').select('*');
        console.log(data)
        if(error) {
            throw error;
        }
        return data || [];
    }
}
const generalService = new GeneralService(); 
export default generalService;