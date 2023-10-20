
import supabase from "../supabase/supabase";

export interface ICamiseta {
  id: number;
  create_at: number;
  equipo: string;
  liga: string;
  temporada: string;
  imagen: string;
  nombre: string;
  descripcion: string;
  categoria_id: number;
  equipo_id: number;
  destacada: boolean;
  destacadaGlobal: boolean;
}

class CamisetaService {
  async getAllCamisetas(): Promise<ICamiseta[]> {
    const { data, error } = await supabase.from('Camisetas').select('*').order('temporada', { ascending: true });
    if (error) {
      throw error;
    }
    return data || [];
  }

  async getAllCamisetasTop(): Promise<ICamiseta[]> {
    const { data, error } = await supabase.from('Camisetas').select('*').eq('destacadaGlobal', true).order('temporada', { ascending: true });
    if (error) {
      throw error;
    }
    return data || [];
  }

  async getCamisetasByTemporada(temporada: string): Promise<ICamiseta[]> {
    const { data, error } = await supabase.from('Camisetas').select('*').eq('temporada', temporada).order('created_at', { ascending: false });
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

const camisetaService = new CamisetaService();
export default camisetaService;
