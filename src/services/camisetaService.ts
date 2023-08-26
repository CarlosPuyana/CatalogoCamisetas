import { ICamiseta } from '../Interfaces/camisetas.ts';
import supabase from '../supabase.ts';

class CamisetaService {
  async getAllCamisetas(): Promise<ICamiseta[]> {
    const { data, error } = await supabase.from('Camisetas').select('*');
    if (error) {
      throw error;
    }
    return data || [];
  }

  async getCamisetasByTemporada(temporada: string): Promise<ICamiseta[]> {
    const { data, error } = await supabase.from('Camisetas').select('*').eq('temporada', temporada);
    if (error) {
      throw error;
    }
    return data || [];
  }

  async searchCamisetasByNombre(busqueda: string | undefined): Promise<ICamiseta[]> {
    const { data, error } = await supabase.from('Camisetas').select('*').ilike('nombre', `%${busqueda}%`);
    if (error) {
      throw error;
    }
    return data || [];
  }
}

export default new CamisetaService();
