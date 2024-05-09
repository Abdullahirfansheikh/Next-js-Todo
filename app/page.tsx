"use client"
import React, { useEffect, useState } from 'react';

interface Task {
    title: string;
    desc: string;
}

const Page: React.FC = () => {
    
    const removeL = (key: string, i: number) => {
        const data = JSON.parse(localStorage.getItem(key)!);
        data.splice(i, 1);
        localStorage.setItem(key, JSON.stringify(data));
    };
    

    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [mainTask, setMainTask] = useState<Task[]>([]);
    const [completed, setcompleted] = useState<Task[]>([]);
    

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(title);
        console.log(desc);
        setMainTask([...mainTask, { title, desc }]);
        setTitle("");
        setDesc("");
    };

    useEffect(() => {
    
        if (mainTask.length === 0) {
          console.log("Array is empty!")
        } else {
            const sdata = JSON.stringify(mainTask)
            localStorage.setItem("sdata",sdata)
        }
      }, [mainTask]);

    useEffect(() => {
    
        if (completed.length === 0) {
          console.log("Array is empty!")
        } else {
            const sdata2 = JSON.stringify(completed)
            localStorage.setItem("sdata2",sdata2)
        }
      }, [mainTask]);
    useEffect(() => {
      const rdata = localStorage.getItem("sdata")!
      const fdata = JSON.parse(rdata)
        setMainTask(fdata)
      
        const rdata2 = localStorage.getItem("sdata2")!
      const fdata2 = JSON.parse(rdata2)
      setcompleted(fdata2)
    }, [])
    
    

    const eventHandler = (i: number) => {
        let copyTask = [...mainTask];
        copyTask.splice(i, 1);
        setMainTask(copyTask);
        removeL("sdata",i)
        removeL("sdata2",i)
    };
    const eventHandler2 = (i: number) => {
        let copyMainTask = [...mainTask];
        let completedTask = copyMainTask.splice(i, 1)[0];
        setMainTask(copyMainTask);
        setcompleted( ()=> [...completed, completedTask]);
        removeL("sdata",i)
        removeL("sdata2",i)
    };
    const eventHandler3 = (i: number) => {
        let copyTask = [...completed];
        copyTask.splice(i, 1);
        setcompleted(copyTask);
        removeL("sdata",i)
        removeL("sdata2",i)
    };
    const eventHandler4 = (i:number)=>{
    const selectedTask = mainTask[i];
    const etitle = selectedTask.title;
    const edesc = selectedTask.desc;
        let copyTask = [...mainTask];
        copyTask.splice(i, 1);
        setMainTask(copyTask);
        setTitle(etitle)
        setDesc(edesc)
    }
    let sample: JSX.Element = <h2>No Task Available</h2>;

    if (mainTask.length > 0) {
        sample = (
            <>
                {mainTask.map((t: Task, i: number) => (
                    <div key={i} className='justify-between flex mb-2'>
                        <h2>{t.title}</h2>
                        <h2>{t.desc}</h2>
                       <div>
                       <button className='bg-red-400 border-2 rounded text-white mb-4 p-2 mx-4' onClick={() => eventHandler(i)}>Delete</button>
                        <button className='bg-red-400 border-2 rounded text-white mb-4 p-2 mx-4' onClick={() => eventHandler2(i)}>Completed</button>
                        <button className='bg-red-400 border-2 rounded text-white mb-4 p-2 mx-4' onClick={() => eventHandler4(i)}>Edit</button>
                       </div>
                    </div>
                ))}
            </>
        );
    }
    
    return (
        <>
            <div className='bg-black text-white p-4 text-center text-4xl'>
                <h1>My Todo List</h1>
            </div>
            <form onSubmit={formHandler}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Enter Title here' className='border-solid border-black border-2 m-4 p-2' />
                <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" placeholder='Enter Description here' className='border-solid border-black border-2 m-4 p-2' />
                <button type="submit" className='border-black border-solid border-2 bg-black text-white m-4 p-2'>Add Task</button>
            </form>
            <div className=' text-black p-10 text-center text-2xl'>
                {sample}
            </div>
            <div className='width-full height-full'>            
    <h1 className='mt-10 mb-10 text-center font-bold text-2xl'> COMPLETED</h1>
    {completed.map((t: Task, i: number) => (
        <div key={i} className='justify-around flex mb-2'>
            <h2>{t.title}</h2>
            <h2>{t.desc}</h2>
            <button className='bg-red-400 border-2 rounded text-white mb-4 p-2 mx-4' onClick={() => eventHandler3(i)}>Delete</button>
        </div>
    ))}
</div>

        </>
    );
    
};

export default Page;
