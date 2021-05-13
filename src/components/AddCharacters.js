import React,{useState} from 'react'
import PropTypes from 'prop-types';
const AddCharacters = ({setCharacters}) => {
    const [InputValue, setInputValue] = useState('');
    const handleOnchangeInput = (e)=>{
        const input = e.target.value
         setInputValue(input)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(InputValue.trim().length > 2){
          setCharacters(char =>[InputValue,...char]);
          setInputValue('')  
        }else{
            alert('Nombre no encontrado');
        }
        setInputValue('') 
        

    }
    return (
        <form className='' onSubmit={handleSubmit}>
            <input 
            type= 'text'
            onChange = {handleOnchangeInput}
            value = {InputValue}
            />
        </form>
    )
}

AddCharacters.propTypes = {
    setCharacters:PropTypes.func.isRequired
}

export default AddCharacters
