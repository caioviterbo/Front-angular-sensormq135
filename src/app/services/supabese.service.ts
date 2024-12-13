import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class SupabeseService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = environment.supabaseUrl;
    const supabaseKey = environment.supabaseKey;

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }



  async getSensorData(page: number, pageSize: number, table: string, columns = '*') {
    try {
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;

      const { data, error } = await this.supabase
        .from(table)
        .select(columns)
        .range(from, to);

      if (error) throw error;

      const { count, error: countError } = await this.supabase
        .from(table)
        .select('*', { count: 'exact', head: true });

      if (countError) throw countError;

      return { data, count: count ?? 0};

    } catch (error) {
      console.error('Erro ao buscar dados do Supabase:', error);
      return { data: [], count: 0 };
    }
  }
}
