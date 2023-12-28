import React, { useEffect, useState } from 'react'
import './AlgoVisualizer.css'
import {selection} from '../SortingAlgos/selectionSort'
import {bubble} from '../SortingAlgos/bubbleSort'
import {quickSort} from '../SortingAlgos/quickSort'


const AlgoVisualizer = () => {

    const [arr, setArr] = useState([]);
    
    function newArray(){
        const dataSet = [];

        for(let i = 0; i<100; i++){
            dataSet.push(Math.floor(Math.random() * (800 - 5 + 1)) + 5);
            // document.getElementById(i).style.backgroundColor = 'white';

            // console.log(dataSet[i]);
        }
        
        setArr(dataSet);
   }

   function animateAlgo(animations){
    Object.entries(animations).forEach(([key, value], index) => {
    
        setTimeout(() => {
            const bar1 = document.getElementById(value[0]);
            const bar2 = document.getElementById(value[1]);
            
            const height1 = parseFloat(bar1.style.height);
            const height2 = parseFloat(bar2.style.height);

            if(height1 <= height2){
                bar1.style.backgroundColor = 'red';
                bar2.style.backgroundColor = 'red';
                setTimeout(() => {
                    bar1.style.backgroundColor = 'blue';
                    bar2.style.backgroundColor = 'blue';
                    
                }, 200);
            }
            else{
                bar1.style.backgroundColor = 'red';
                bar2.style.backgroundColor = 'red';
                setTimeout(() => {
                    const k = bar1.style.height;
                    bar1.style.height = bar2.style.height;
                    bar2.style.height = k;
                }, 200);
                
                
                setTimeout(() => {
                    bar1.style.backgroundColor = 'blue';
                    bar2.style.backgroundColor = 'blue';
                }, 200);
            }            
        }, index * 300);
    })
   }

   function bubbleSort() {
    const {animations} = bubble(arr);
    animateAlgo(animations);
   }

   function selectionSort() {
    const {sortedArray, animations} = selection(arr);
    console.log(animations);
    console.log(sortedArray);

    animateAlgo(animations);
   }

   function qSort(){
    const {sortedArray, animations} = quickSort(arr);
    console.log(sortedArray);
    console.log(animations);

    animateAlgo(animations);
   }

    useEffect(() => {
        newArray();
    }, []); // after the first render a new array is generated 

    return (
        <>
            <div className="algo-buttons">
                <button className = "display-btn" onClick={newArray}>Generate new Array</button>
                <button className = "display-btn" onClick={bubbleSort}>Bubble Sort</button>
                <button className = "display-btn" onClick={selectionSort}>Selection Sort</button>
                <button className = "display-btn" onClick={newArray}>Merge Sort</button>
                <button className = "display-btn" onClick={qSort}>Quick Sort</button>
            </div>

            <div className='main-container'>

                {
                    arr.map((value, index) => (
                        <div className="data-bar" style={{height: `${value/12}vh`}} id = {index} key={index}></div>
                    ))
                }
            </div>
            
            
        </>
        
    )
}

export default AlgoVisualizer