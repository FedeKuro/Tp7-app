import React , { useState } from 'react' ;
 import { Text , View , TextInput } from 'react-native' ;    
      

const LoginForm = () => { const [ value , setValue ] = useState ( 0 ); 
    return ( < View >
     < Text > Formulario de inicio de sesión </ Text > 
     < View > < TextInput placeholder = "Ingrese el correo electrónico" /> < TextInput 
          secureTextEntry ={ true } 
          placeholder = "Ingrese la contraseña" />
           </ View > 
           </ View > ); };     
    


    export default LoginForm;