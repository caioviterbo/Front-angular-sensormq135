import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabeseService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = 'https://krccnsbfofpowxdzspwc.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyY2Nuc2Jmb2Zwb3d4ZHpzcHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwMjQyNjksImV4cCI6MjA0OTYwMDI2OX0.5r-KaYdn6UEdaVnQOaN3nDp4SCIs6WH6DUecnzhRXko';

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async getSensorData() {
    try {
      const { data, error } = await this.supabase
        .from('sensores')
        .select('*');

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados do Supabase:', error);
      return [];
    }
  }
}
