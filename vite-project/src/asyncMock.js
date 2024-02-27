
const productsList = [
    {id: "1", name: "Paracetamol", price: 2500, categoria: "medicamento", img:"../src/components/MapsMock/Imagenes/comprimidos.jpg", stock: "100", descripcion: "Analgésico"},
    {id: "2", name: "Ibuprofeno", price: 2000, categoria: "medicamento", img:"../src/components/MapsMock/Imagenes/comprimidos.jpg", stock: "100", descripcion: "Analgésico"},
    {id: "3", name: "Aspirina", price: 1500, categoria: "medicamento", img:"../src/components/MapsMock/Imagenes/comprimidos.jpg", stock: "100", descripcion: "Analgésico"},
    {id: "4", name: "Suplemento Vitamínico A", price: 4000, categoria: "suplemento", img:"../src/components/MapsMock/Imagenes/comprimidos.jpg", stock: "100", descripcion: "Vitaminas"},
    {id: "5", name: "Suplemento Vitamínico B", price: 5000, categoria: "suplemento", img:"../src/components/MapsMock/Imagenes/comprimidos.jpg", stock: "100", descripcion: "Vitaminas"},
    {id: "6", name: "Suplemento Vitamínico c", price: 4500, categoria: "suplemento", img:"../src/components/MapsMock/Imagenes/comprimidos.jpg", stock: "100", descripcion: "Vitaminas"},
    {id: "7", name: "Crema Facial", price: 7000, categoria: "cosmetico", img:"../src/components/MapsMock/Imagenes/comprimidos.jpg", stock: "100", descripcion: "Antiage"},
    {id: "8", name: "Protector Solar", price: 8000, categoria: "cosmetico", img:"../src/components/MapsMock/Imagenes/comprimidos.jpg", stock: "100", descripcion: "Solar"},
    {id: "9", name: "Gel Post-Solar", price: 6000, categoria: "cosmetico", img:"../src/components/MapsMock/Imagenes/comprimidos.jpg", stock: "100", descripcion: "PostSolar"}
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if(productsList.length > 0) {
        setTimeout (() => {
            resolve(productsList);
        }, 2000)
        
    } else {
        reject("No hay productos");
    }
})
}
const suplement = productsList.filter(product => product.categoria == "suplemento")
export const getProductsByCategoria = () => {
    return new Promise((resolve, reject) => {
      if(productsList.length > 0) {
          setTimeout (() => {
              resolve(suplement);
          }, 2000)
          
      } else {
          reject("No hay productos");
      }
  })
  }

  const medicament = productsList.filter(product => product.categoria == "medicamento")
  export const getProductsByCategoriaMed = () => {
      return new Promise((resolve, reject) => {
        if(productsList.length > 0) {
            setTimeout (() => {
                resolve(medicament);
            }, 2000)
            
        } else {
            reject("No hay productos");
        }
    })
    }

    const cosmetic = productsList.filter(product => product.categoria == "cosmetico")
    export const getProductsByCategoriaCos = () => {
        return new Promise((resolve, reject) => {
          if(productsList.length > 0) {
              setTimeout (() => {
                  resolve(cosmetic);
              }, 2000)
              
          } else {
              reject("No hay productos");
          }
      })
      }
      
      export const getProduct = (id) => {
        const product = productsList.filter( product => product.id == id)
        return new Promise((resolve, reject) => {
          if(productsList.length > 0) {
              setTimeout (() => {
                if (!product) {
                    reject(`Nose encuentra el producto con el id ${id}`)
                }else {resolve(productsList);
                }
                  
              }, 2000)
              
          } else {
              reject("No hay productos");
          }
      })
      }

















