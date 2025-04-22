import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080" //DEPOIS MUDAR PARA O ENDEREÇO RENDER
});

export default api;

export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
  };
  
 
  
 //fUnÇOEs GeNericas
  
  export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url);
    setDados(resposta.data);
  };
  
  export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados);
    setDados(resposta.data);
  };
  
  export const deletar = async (url: string) => {
    await api.delete(url);
  };
  