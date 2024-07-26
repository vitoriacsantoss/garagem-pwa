import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
    const links = [
        {
            path: "/",
            name: "Inicio"
        },
        {
            path: "/acessorios",
            name: "Acessorios"
        },
        {
            path: "/categorias",
            name: "Categorias"
        },
        {
            path: "/cores",
            name: "Cores"
        },
        {
            path: "/marcas",
            name: "Marcas"
        },
        {
            path: "/modelos",
            name: "Modelos"
        },
        {
            path: "/veiculos",
            name: "Veiculos"
        }
    ];  
    
    return {
        links
    }
})