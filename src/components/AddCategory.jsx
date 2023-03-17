import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [entrada, setEntrada] = useState('');

    const onInputChange = ({target}) => {
        setEntrada(target.value);
      }
        
      const onSubmit = (e) => {
          e.preventDefault();
          if(entrada.trim().length <= 1) return;
  
          /* setCategories(categories => [ ...categories, entrada]); */
          setEntrada('');
          onNewCategory(entrada.trim() );
      }
        


  return (
    <form
        onSubmit={onSubmit}
    >
      <input 
        types="text"
        placeholder="buscar gifs"
        value={entrada}
        onChange={onInputChange} // Toma el cambio en el valor de la entrada
      />
    </form>
  )
}


