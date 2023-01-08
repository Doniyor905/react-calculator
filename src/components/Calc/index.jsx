import React, { useState } from "react";
import classes from "./Calc.module.scss"
function Calc() {
    const [num, setNum] = React.useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();



    function inputNum(e) {
        let input = e.target.value;
        if (num === 0) {
            setNum(input)
        } else {
            setNum(num + input)
        }
    }

    function clear() {
        setNum(0)
    }

    function porcentagem(e) {
        setNum(num / 100);
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        if (operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num))
        } else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num))
        } else if (operator === "-") {
            setNum(parseFloat(oldNum) - parseFloat(num))
        } else if (operator === "*") {
            setNum(parseFloat(oldNum) * parseFloat(num))
        }
    }


    return (
        <div className={classes.calc}>
            <div className={classes.calc__inner}>
                <h1 className={classes.result}>{num}</h1>
                <div className={classes.calc__buttons}>
                    <div className={classes.calc__buttons_item}>
                        <button onClick={clear} className={classes.clear}>CLEAR</button>
                        <button onClick={porcentagem} className={classes.foiz}>%</button>
                        <button onClick={operatorHandler} className={classes.sign}>/</button>
                    </div>
                    <div className={classes.calc__buttons_item}>
                        <button onClick={inputNum} className={classes.number} value={7}>7</button>
                        <button onClick={inputNum} className={classes.number} value={8}>8</button>
                        <button onClick={inputNum} className={classes.number} value={9}>9</button>
                        <button onClick={operatorHandler} className={classes.sign} value={"X"}>*</button>
                    </div>
                    <div className={classes.calc__buttons_item}>
                        <button onClick={inputNum} className={classes.number} value={4}>4</button>
                        <button onClick={inputNum} className={classes.number} value={5}>5</button>
                        <button onClick={inputNum} className={classes.number} value={6}>6</button>
                        <button onClick={operatorHandler} className={classes.sign} value={"-"}>-</button>
                    </div>
                    <div className={classes.calc__buttons_item}>
                        <button onClick={inputNum} className={classes.number} value={1}>1</button>
                        <button onClick={inputNum} className={classes.number} value={2}>2</button>
                        <button onClick={inputNum} className={classes.number} value={3}>3</button>
                        <button onClick={operatorHandler} className={classes.sign} value={"+"}>+</button>
                    </div>
                    <div className={classes.calc__buttons_item}>
                        <button onClick={inputNum} className={classes.zero} value={0}>0</button>
                        <button onClick={inputNum} className={classes.coma} value={"."}>,</button>
                        <button onClick={calculate} className={classes.sign}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calc;