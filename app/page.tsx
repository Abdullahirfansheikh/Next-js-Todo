"use client"
import React, { useState } from 'react';

interface Task {
    title: string;
    desc: string;
}

const Page: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [mainTask, setMainTask] = useState<Task[]>([]);

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(title);
        console.log(desc);
        setMainTask([...mainTask, { title, desc }]);
        setTitle("");
        setDesc("");
    };

    const eventHandler = (i: number) => {
        let copyTask = [...mainTask];
        copyTask.splice(i, 1);
        setMainTask(copyTask);
    };

    let sample: JSX.Element = <h2>No Task Available</h2>;

    if (mainTask.length > 0) {
        sample = (
            <>
                {mainTask.map((t: Task, i: number) => (
                    <div key={i} className='justify-between flex mb-2'>
                        <h2>{t.title}</h2>
                        <h2>{t.desc}</h2>
                        <button className='bg-red-400 border-2 rounded text-white mb-4' onClick={() => eventHandler(i)}>Delete</button>
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
            <div className='bg-cyan-100 text-black p-10 text-center text-2xl'>
                {sample}
            </div>
            
        </>
    );
};

export default Page;
