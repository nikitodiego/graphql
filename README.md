# graphql

API REST + CRUD de productos en GraphQL.

Queries:

{

  products{
  
    title
    
    _id
    
    price
    
    stock
    
    thumbnail 
    
  }
  
}

{

  productById(_id:"621142dacf7960c6f21cbd3c"){
  
    title
    
    _id
    
    price
    
    stock
    
    thumbnail 
    
  }
  
}

Mutations: 

mutation{

  createProduct(input:
  
    {
    
    title: "Node JS"
    
    price: 3400
    
    stock: 35
    
    thumbnail: "img/node"
    
    }) {
    
    title
    
    _id
    
    price
    
    stock
    
    thumbnail 
    
  } 
  
}

mutation{

  updateProduct(
  
    _id:"62a7db42753ccb0c27986910",
    
    input:
    
    {
    
    title: "Node JS"
    
    price: 2700
    
    stock: 40
    
    thumbnail: "img/node"
    
    }) {
    
    title
    
    _id
    
    price
    
    stock
    
    thumbnail 
    
  } 
  
}

mutation{

  deleteProduct(_id:"62a7db42753ccb0c27986910") 
  
  {
  
    title
    
    _id
    
    price
    
    stock
    
    thumbnail 
    
  } 
  
}
