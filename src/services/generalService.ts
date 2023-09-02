import { IPreguntasFrecuentes } from "../Interfaces/IPreguntasFrecuentes.ts";
import supabase from "../supabase.ts";

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
export default new GeneralService();