import { ICamiseta } from '../Interfaces/camisetas.ts';
import supabase from '../supabase.ts';

class CamisetaService {
  async getAllCamisetas(): Promise<ICamiseta[]> {
    const { data, error } = await supabase.from('Camisetas').select('*').order('temporada', { ascending: true });
    if (error) {
      throw error;
    }
    return data || [];
  }

  async getCamisetasByTemporada(temporada: string): Promise<ICamiseta[]> {
    const { data, error } = await supabase.from('Camisetas').select('*').eq('temporada', temporada).order('temporada', { ascending: true });
    if (error) {
      throw error;
    }
    return data || [];
  }

  async searchCamisetasByNombre(busqueda: string | undefined): Promise<ICamiseta[]> {
    const { data, error } = await supabase.from('Camisetas').select('*').ilike('nombre', `%${busqueda}%`).order('temporada', { ascending: true });
    if (error) {
      throw error;
    }
    return data || [];
  }

  async getCategorias(): Promise<any[]> {
    const { data, error } = await supabase.from('Categorias').select('*').order('prioridad', { ascending: true });
    if (error) {
      throw error;
    }
    return data || [];
  }

  async getEquipos(): Promise<any[]> {
    const { data, error } = await supabase.from('Teams').select('*').order('prioridad', { ascending: true });
    if (error) {
      throw error;
    }
    return data || [];
  }
}

export default new CamisetaService();
