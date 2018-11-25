import * as validator from 'validator';
import { isEmpty } from './isEmpty';

export const validateProductPut = (data: any) => {
    let errors: any = {};

    if(!isEmpty(data.price) && !validator.isNumeric(data.price + '')) {
        errors.price = "Preço inválido.";
    }
    
    if(!isEmpty(data.discount) && !validator.isNumeric(data.discount + '', {no_symbols: true})) {
        errors.discount = "Valor de desconto inválido.";
    }
    
    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
}

export const validateProductInput = (data: any): 
    { errors: {}, isValid: boolean } => {

    let errors: any =  {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.price = !isEmpty(data.price) ? data.price : "";
    data.discount = !isEmpty(data.discount) ? data.discount : 0;
    data.images = !isEmpty(data.images) ? data.images : "";
    data.category = !isEmpty(data.category) ? data.category : "";
    data.keywords = !isEmpty(data.keywords) ? data.keywords : "";

    console.log(data.discount);

    if (validator.isEmpty(data.name)) {
        errors.name = "O nome do produto é obrigatório.";
    }

    if(validator.isEmpty(data.price + '')) {
        errors.price = "O preço do produto é obrigatório.";
    }

    if(!validator.isEmpty(data.price + '') && !validator.isNumeric(data.price + '')) {
        errors.price = "Preço inválido.";
    }
    
    if(!validator.isNumeric(data.discount + '', {no_symbols: true})) {
        errors.discount = "Valor de desconto inválido.";
    }

    if(validator.isEmpty(data.images)) {
        errors.images = "As imagens do produto são obrigatórias.";
    }

    if(validator.isEmpty(data.category)) {
        errors.category = "As categorias do produto são obrigatórias.";        
    }

    if(validator.isEmpty(data.keywords)) {
        errors.keywords = "As palavras-chave do produto são obrigatórias.";        
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
}