import AlertError from '@/components/Alert/AlertError';
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
class ApiService {
  private axiosInstance: AxiosInstance;
  private baseUrlHost = "https://arqui-sistema-recomendacion-85b7038cdf33.herokuapp.com/"

  constructor(token?: string) {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrlHost,headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      }
    });
  }
  
  async get(url: string) {
    try {
      const response: AxiosResponse = await this.axiosInstance.get(url);
      return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            this.handleError(error as AxiosError);
          }
          throw new Error('Error executing GET request');
    }
  }

  async post(url: string, data: any) {
    try {
      const response: AxiosResponse = await this.axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            this.handleError(error as AxiosError); 
          }
          throw new Error('Error executing POST request');
    }
  }

  async update(url: string, data: any) {
    try {
      const response: AxiosResponse = await this.axiosInstance.put(url, data);
      return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
          this.handleError(error as AxiosError); 
        }
        throw new Error('Error executing UPDATE request');
      }
  }

  async delete(url: string) {
    try {
      const response: AxiosResponse = await this.axiosInstance.delete(url);
      return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
          this.handleError(error as AxiosError); 
        }
        throw new Error('Error executing DELETE request');
    }
  }

  private handleError(error: AxiosError) {
    if (error.response) {
      const objectError:any = error.response.data;
      if(objectError.error === "User not found"){
        AlertError({message:'Usuario no encontrado'});
      }else if(objectError.error === "Invalid credentials"){
        AlertError({message:'Contraseña incorrecta'});
      }else if (objectError && objectError.email && objectError.email[0] === "Ya existe usuario con este email.") {
        AlertError({message:'Ya existe un usuario con este correo'});
      }else if (objectError && objectError.username && objectError.username[0] === "Ya existe usuario con este username.") {
        AlertError({message:'Ya existe un usuario con este nombre de usuario'});
      }else{
        console.error('Request failed with response:', error.response.data); 
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request failed:', error.message);
    }
  }
}

export default ApiService;