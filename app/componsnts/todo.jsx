"use client";
//تحويله الى Client Components
import { useState, useEffect } from "react";

export default function Todo() {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        const fetchTodo = async () => {

            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const result = await response.json();
            setTodo(result);
        };

        fetchTodo();
    }, []);

    return (
        <div>
            {todo.title}
        </div>
    );
}
