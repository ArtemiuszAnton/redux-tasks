import { configureStore } from "@reduxjs/toolkit";
import counter from '../slice/slice'
import addValue from '../slice/text.input'
import Palindrome from '../slice/palindrome'
import swapFlag from '../slice/show'
import validEmail from "../slice/email";
import validPwd from "../slice/password";
import validPwd1 from "../slice/password1";
import getSummary from '../slice/summary';
import changeSize from '../slice/size';
import changeLanguage from '../slice/language';
import acceptTasks from '../slice/tasks';

const store = configureStore({
    reducer: {
        counter,
        addValue,
        Palindrome,
        swapFlag,
        validEmail,
        getSummary,
        validPwd,
        validPwd1,
        changeSize,
        changeLanguage,
        acceptTasks
    }
})

export default store