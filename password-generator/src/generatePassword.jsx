import { useState } from "react";

const useApp = function() {
    const [password, setPassword] = useState(""); 
    const [errorMessage, setErrorMessage] = useState("");


    const generatePassword = function(userInput) {
        let allowedCharacters = "";
        let length = userInput.length;
        let result = "";

        if (userInput.uppercaseLetters) {
            allowedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (userInput.lowercaseLetters) {
            allowedCharacters += "abcdefghijklmnopqrstuvwxyz";
        }

        if (userInput.numbers) {
            allowedCharacters += "0123456789";
        }

        if (userInput.symbols) {
            allowedCharacters += "~`!@#$%^&*()-_+={}[]|;:<>,./?";
        }

        if (allowedCharacters === "") {
            setErrorMessage("Please select at least one of the options.");
            setPassword("");
            return;
        }

        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * allowedCharacters.length);
            result += allowedCharacters[index];
        }
        
        setPassword(result);
        setErrorMessage("");
    };

    return {password, errorMessage, generatePassword};
};

export default useApp;