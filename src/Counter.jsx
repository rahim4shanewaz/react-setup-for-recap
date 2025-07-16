import { useState } from "react"

export default function(){


    const[count, setCount] = useState(0);
    const handlAddButton = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const [student, setStudent] = useState(0);
    const handleStudentCount = () => {
        const newStudent = student + 1;
        setStudent(newStudent);
    }




    return(

        <>

        <h2>useState</h2>
        <hr />
            <div>
              <h3>  Counter: {count}</h3>
            <button onClick={handlAddButton}> Add</button>
            </div>

            <div>
                <h3>Total Student : {student}</h3>
                <button onClick={handleStudentCount}>Increase Student Count</button>
            </div>


            







        </>
        
    )
}