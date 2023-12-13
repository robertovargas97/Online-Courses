import React from "react";
import { useState } from "react";

interface addCategoryProps {
    gifsCategories: string[],
    setGifsCategories: React.Dispatch<React.SetStateAction<string[]>>
}


export const AddCategory: React.FC<addCategoryProps> = ({ gifsCategories, setGifsCategories }): JSX.Element => {

    type OnChangeFunctionType = (event: React.ChangeEvent<HTMLInputElement>) => void;
    type OnSubmitFunctionType = (event: React.FormEvent<HTMLFormElement>) => void;
    type OnAddCategoryType = (newCategory: string) => void;
    type ValidateInputType = (sanitizedInputValue: string | undefined) => boolean;

    const [inputValue, setInputValue] = useState("");

    const validateInput: ValidateInputType = (sanitizedInputValue) => {
        let isValid = false;

        if (sanitizedInputValue) {

            if (sanitizedInputValue.length > 1) {
                if (!(gifsCategories.find(category => inputValue.toUpperCase() === category.toUpperCase()))) {
                    isValid = false;
                }
                isValid = true;
            }
        }

        return isValid;
    }

    const addNewCategory: OnAddCategoryType = (newCategory) => {
        // ... is used to extract/copy the array
        const newArray: string[] = [newCategory, ...gifsCategories];
        setGifsCategories(newArray);
    }


    const onInputChange: OnChangeFunctionType = (event): void => {
        const data: string = event.target.value;
        setInputValue(data);
    }


    const onSubmit: OnSubmitFunctionType = (event) => {
        event.preventDefault();
        const sanitizedInputValue = inputValue.trim();

        const isValidCategory = validateInput(sanitizedInputValue);
        if (isValidCategory) {
            addNewCategory(sanitizedInputValue);
            setInputValue("");
        }
        else {
            //TODO: Change for something more elegant
            console.error('There was an issue');  
        }
    }


    const addCategoryComponent: JSX.Element =

        <form data-testid="form" action="" method="get" onSubmit={onSubmit}>
            <input data-testid="form-input" type="text" placeholder="Search Gifs" value={inputValue} onChange={onInputChange} />
        </form>


    return addCategoryComponent;
}
