import { ICamiseta } from '../Interfaces/camisetas';
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
    const { data, error } = await supabase.from('Camisetas').select('*').ilike('nombre', `%${busqueda}%`).gt('temporada', 20).lt('temporada', 30).order('temporada', { ascending: false });
    if (error) {
      throw error;
    }
    return data || [];
  }

  async searchCamisetasByNombre2(busqueda: string | undefined): Promise<ICamiseta[]> {
    const { data, error } = await supabase.from('Camisetas').select('*').ilike('nombre', `%${busqueda}%`).gt('temporada', 30).order('temporada', { ascending: false });
    if (error) {
      throw error;
    }
    return data || [];
  }

  async searchCamisetasByNombre3(busqueda: string | undefined): Promise<ICamiseta[]> {
    const { data, error } = await supabase.from('Camisetas').select('*').ilike('nombre', `%${busqueda}%`).gte('temporada', 0).lte('temporada', 19).order('temporada', { ascending: false });
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
