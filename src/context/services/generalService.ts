
import supabase from "../supabase/supabase";


class GeneralService {
    async getPreguntasRespuestasFrecuentes(): Promise<any[]> {
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