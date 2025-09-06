export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      publicaciones: {
        Row: {
          id: string
          tipo: 'cientifico' | 'divulgacion' | 'capitulo' | 'tesis'
          titulo: string
          autores: string
          anio: number
          contenedor: string
          doi: string | null
          url: string | null
          pdf_url: string | null
          destacado: boolean
          creado_en: string
          actualizado_en: string
        }
        Insert: {
          id?: string
          tipo: 'cientifico' | 'divulgacion' | 'capitulo' | 'tesis'
          titulo: string
          autores: string
          anio: number
          contenedor: string
          doi?: string | null
          url?: string | null
          pdf_url?: string | null
          destacado?: boolean
          creado_en?: string
          actualizado_en?: string
        }
        Update: {
          id?: string
          tipo?: 'cientifico' | 'divulgacion' | 'capitulo' | 'tesis'
          titulo?: string
          autores?: string
          anio?: number
          contenedor?: string
          doi?: string | null
          url?: string | null
          pdf_url?: string | null
          destacado?: boolean
          creado_en?: string
          actualizado_en?: string
        }
      }
      actividades_divulgacion: {
        Row: {
          id: string
          titulo: string
          descripcion: string
          tipo: string
          fecha: string
          url: string | null
          creado_en: string
          actualizado_en: string
        }
        Insert: {
          id?: string
          titulo: string
          descripcion: string
          tipo: string
          fecha: string
          url?: string | null
          creado_en?: string
          actualizado_en?: string
        }
        Update: {
          id?: string
          titulo?: string
          descripcion?: string
          tipo?: string
          fecha?: string
          url?: string | null
          creado_en?: string
          actualizado_en?: string
        }
      }
      consultorias: {
        Row: {
          id: string
          slug: string
          titulo: string
          cliente: string
          anio: number
          resumen: string
          resultados: Json
          url: string | null
          pdf_url: string | null
          creado_en: string
          actualizado_en: string
        }
        Insert: {
          id?: string
          slug: string
          titulo: string
          cliente: string
          anio: number
          resumen: string
          resultados: Json
          url?: string | null
          pdf_url?: string | null
          creado_en?: string
          actualizado_en?: string
        }
        Update: {
          id?: string
          slug?: string
          titulo?: string
          cliente?: string
          anio?: number
          resumen?: string
          resultados?: Json
          url?: string | null
          pdf_url?: string | null
          creado_en?: string
          actualizado_en?: string
        }
      }
      cursos: {
        Row: {
          id: string
          slug: string
          titulo: string
          resumen: string
          descripcion_md: string
          precio_mxn: number
          modalidad: 'en_vivo' | 'grabado'
          duracion: string
          fecha_inicio: string | null
          portada_url: string | null
          audiencia: 'adolescentes' | 'academica'
          publicado: boolean
          stripe_price_id: string | null
          creado_en: string
          actualizado_en: string
        }
        Insert: {
          id?: string
          slug: string
          titulo: string
          resumen: string
          descripcion_md: string
          precio_mxn: number
          modalidad: 'en_vivo' | 'grabado'
          duracion: string
          fecha_inicio?: string | null
          portada_url?: string | null
          audiencia: 'adolescentes' | 'academica'
          publicado?: boolean
          stripe_price_id?: string | null
          creado_en?: string
          actualizado_en?: string
        }
        Update: {
          id?: string
          slug?: string
          titulo?: string
          resumen?: string
          descripcion_md?: string
          precio_mxn?: number
          modalidad?: 'en_vivo' | 'grabado'
          duracion?: string
          fecha_inicio?: string | null
          portada_url?: string | null
          audiencia?: 'adolescentes' | 'academica'
          publicado?: boolean
          stripe_price_id?: string | null
          creado_en?: string
          actualizado_en?: string
        }
      }
      inscripciones: {
        Row: {
          id: string
          curso_id: string
          user_id: string
          status: 'pagado' | 'pendiente' | 'fallido'
          amount_mxn: number
          payment_intent_id: string
          creado_en: string
        }
        Insert: {
          id?: string
          curso_id: string
          user_id: string
          status: 'pagado' | 'pendiente' | 'fallido'
          amount_mxn: number
          payment_intent_id: string
          creado_en?: string
        }
        Update: {
          id?: string
          curso_id?: string
          user_id?: string
          status?: 'pagado' | 'pendiente' | 'fallido'
          amount_mxn?: number
          payment_intent_id?: string
          creado_en?: string
        }
      }
      posts: {
        Row: {
          id: string
          slug: string
          titulo: string
          excerpt: string
          contenido_md: string
          portada_url: string | null
          publicado: boolean
          solo_suscriptores: boolean
          creado_en: string
          actualizado_en: string
        }
        Insert: {
          id?: string
          slug: string
          titulo: string
          excerpt: string
          contenido_md: string
          portada_url?: string | null
          publicado?: boolean
          solo_suscriptores?: boolean
          creado_en?: string
          actualizado_en?: string
        }
        Update: {
          id?: string
          slug?: string
          titulo?: string
          excerpt?: string
          contenido_md?: string
          portada_url?: string | null
          publicado?: boolean
          solo_suscriptores?: boolean
          creado_en?: string
          actualizado_en?: string
        }
      }
      donativos: {
        Row: {
          id: string
          user_email: string
          amount_mxn: number
          payment_intent_id: string
          status: string
          creado_en: string
        }
        Insert: {
          id?: string
          user_email: string
          amount_mxn: number
          payment_intent_id: string
          status: string
          creado_en?: string
        }
        Update: {
          id?: string
          user_email?: string
          amount_mxn?: number
          payment_intent_id?: string
          status?: string
          creado_en?: string
        }
      }
      consents: {
        Row: {
          id: string
          user_email: string
          consent_type: string
          policy_version: string
          accepted_at: string
          ip: string
          user_agent: string
        }
        Insert: {
          id?: string
          user_email: string
          consent_type: string
          policy_version: string
          accepted_at?: string
          ip: string
          user_agent: string
        }
        Update: {
          id?: string
          user_email?: string
          consent_type?: string
          policy_version?: string
          accepted_at?: string
          ip?: string
          user_agent?: string
        }
      }
      site_settings: {
        Row: {
          key: string
          value: Json
        }
        Insert: {
          key: string
          value: Json
        }
        Update: {
          key?: string
          value?: Json
        }
      }
      roles: {
        Row: {
          id: string
          user_id: string
          role: string
        }
        Insert: {
          id?: string
          user_id: string
          role: string
        }
        Update: {
          id?: string
          user_id?: string
          role?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
