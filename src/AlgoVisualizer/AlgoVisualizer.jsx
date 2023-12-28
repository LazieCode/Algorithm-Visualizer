import React, { useEffect, useState } from 'react'
import './AlgoVisualizer.css'
import {bubble} from '../SortingAlgos/bubbleSort'

const AlgoVisualizer = () => {

    const [arr, setArr] = useState([]);
    
    function newArray(){
        const dataSet = [];

        for(let i = 0; i< 100; i++){
            dataSet.push(Math.floor(Math.random() * (800 - 5 + 1)) + 5);
            // document.getElementById(i).style.backgroundColor = 'white';

            // console.log(dataSet[i]);
        }
        
        setArr(dataSet);
   }

   function bubbleSort() {
    const {sortedArray, animations} = bubble(arr);
    console.log(animations);
    console.log(sortedArray);
   
    Object.entries(animations).forEach(([key, value], index) => {
    
        const animate = setTimeout(() => {
            const bar1 = document.getElementById(value[0]);
            const bar2 = document.getElementById(value[1]);
            
            const height1 = parseFloat(bar1.style.height);
            const height2 = parseFloat(bar2.style.height);
    
            console.log(index + " " + key);

            if(height1 <= height2){
                bar1.style.backgroundColor = 'red';
                bar2.style.backgroundColor = 'red';
                setTimeout(() => {
                    bar1.style.backgroundColor = 'blue';
                    bar2.style.backgroundColor = 'blue';
                    
                }, 2);
            }
            else{
                bar1.style.backgroundColor = 'red';
                bar2.style.backgroundColor = 'red';
                setTimeout(() => {
                    const k = bar1.style.height;
                    bar1.style.height = bar2.style.height;
                    bar2.style.height = k;
                }, 2);
                
                
                setTimeout(() => {
                    bar1.style.backgroundColor = 'blue';
                    bar2.style.backgroundColor = 'blue';
                }, 3);
                // bar1.style.backgroundColor = 'green';
                // bar2.style.backgroundColor = 'green';
            }            
        }, index * 3);
        // clearInterval(animate);
    })
   }

    useEffect(() => {
        newArray();
    }, []); // after the first render a new array is generated 

    return (
        <>
            <div className='main-container'>

                {
                    arr.map((value, index) => (
                        <div className="data-bar" style={{height: `${value/10}vh`}} id = {index} key={index}></div>
                    ))
                }
            </div>
            <button className = "display-btn" onClick={newArray}>Generate new Array</button>
            <button className = "display-btn" onClick={bubbleSort}>Bubble Sort</button>
            <button className = "display-btn" onClick={newArray}>Selection Sort</button>
            <button className = "display-btn" onClick={newArray}>Merge Sort</button>
            <button className = "display-btn" onClick={newArray}>Quick Sort</button>
        </>
        
    )
}

export default AlgoVisualizer