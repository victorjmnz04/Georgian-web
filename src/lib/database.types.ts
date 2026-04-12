export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          phone?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      addresses: {
        Row: {
          id: string;
          user_id: string;
          label: string | null;
          full_name: string;
          address_line_1: string;
          address_line_2: string | null;
          city: string;
          state: string | null;
          postal_code: string;
          country: string;
          phone: string | null;
          is_default: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          label?: string | null;
          full_name: string;
          address_line_1: string;
          address_line_2?: string | null;
          city: string;
          state?: string | null;
          postal_code: string;
          country: string;
          phone?: string | null;
          is_default?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          label?: string | null;
          full_name?: string;
          address_line_1?: string;
          address_line_2?: string | null;
          city?: string;
          state?: string | null;
          postal_code?: string;
          country?: string;
          phone?: string | null;
          is_default?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          slug: string;
          name: string;
          description: string | null;
          price: number;
          compare_at_price: number | null;
          category: string;
          collection: string | null;
          materials: string[] | null;
          sizes: string[] | null;
          fit: string | null;
          details: string[] | null;
          featured: boolean;
          is_active: boolean;
          order_index: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          description?: string | null;
          price: number;
          compare_at_price?: number | null;
          category: string;
          collection?: string | null;
          materials?: string[] | null;
          sizes?: string[] | null;
          fit?: string | null;
          details?: string[] | null;
          featured?: boolean;
          is_active?: boolean;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          description?: string | null;
          price?: number;
          compare_at_price?: number | null;
          category?: string;
          collection?: string | null;
          materials?: string[] | null;
          sizes?: string[] | null;
          fit?: string | null;
          details?: string[] | null;
          featured?: boolean;
          is_active?: boolean;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      product_variants: {
        Row: {
          id: string;
          product_id: string;
          color_name: string;
          color_hex: string;
          size: string;
          sku: string | null;
          stock_quantity: number;
          is_available: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          color_name: string;
          color_hex: string;
          size: string;
          sku?: string | null;
          stock_quantity?: number;
          is_available?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string;
          color_name?: string;
          color_hex?: string;
          size?: string;
          sku?: string | null;
          stock_quantity?: number;
          is_available?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      product_images: {
        Row: {
          id: string;
          product_id: string;
          url: string;
          alt_text: string | null;
          is_primary: boolean;
          order_index: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          url: string;
          alt_text?: string | null;
          is_primary?: boolean;
          order_index?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string;
          url?: string;
          alt_text?: string | null;
          is_primary?: boolean;
          order_index?: number;
          created_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          order_number: string;
          user_id: string | null;
          email: string;
          status: string;
          subtotal: number;
          shipping_cost: number;
          tax: number;
          total: number;
          currency: string;
          shipping_address: Json;
          billing_address: Json | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          order_number: string;
          user_id?: string | null;
          email: string;
          status?: string;
          subtotal: number;
          shipping_cost?: number;
          tax?: number;
          total: number;
          currency?: string;
          shipping_address: Json;
          billing_address?: Json | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          order_number?: string;
          user_id?: string | null;
          email?: string;
          status?: string;
          subtotal?: number;
          shipping_cost?: number;
          tax?: number;
          total?: number;
          currency?: string;
          shipping_address?: Json;
          billing_address?: Json | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string;
          variant_id: string | null;
          product_name: string;
          color: string | null;
          size: string | null;
          quantity: number;
          unit_price: number;
          total_price: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id: string;
          variant_id?: string | null;
          product_name: string;
          color?: string | null;
          size?: string | null;
          quantity: number;
          unit_price: number;
          total_price: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          product_id?: string;
          variant_id?: string | null;
          product_name?: string;
          color?: string | null;
          size?: string | null;
          quantity?: number;
          unit_price?: number;
          total_price?: number;
          created_at?: string;
        };
      };
      wishlists: {
        Row: {
          id: string;
          user_id: string;
          product_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          product_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          product_id?: string;
          created_at?: string;
        };
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          locale: string;
          is_active: boolean;
          subscribed_at: string;
          unsubscribed_at: string | null;
        };
        Insert: {
          id?: string;
          email: string;
          locale?: string;
          is_active?: boolean;
          subscribed_at?: string;
          unsubscribed_at?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          locale?: string;
          is_active?: boolean;
          subscribed_at?: string;
          unsubscribed_at?: string | null;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          subject: string | null;
          message: string;
          locale: string;
          status: string;
          created_at: string;
          responded_at: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          subject?: string | null;
          message: string;
          locale?: string;
          status?: string;
          created_at?: string;
          responded_at?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          subject?: string | null;
          message?: string;
          locale?: string;
          status?: string;
          created_at?: string;
          responded_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
