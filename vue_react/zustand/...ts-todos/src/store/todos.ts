import { create } from "zustand";
// ts 是js的超集 可以使用js的所有特性
// 代码正确性
// 接口 自定义类型 对象的结构
// 分号隔开
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
// 约束 store
interface TodoStore {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}
// 泛型 泛指内部的类型
// <T> T 类型参数 create 是一个函数 他的返回值是<TodoStore>()
const useTodoStore = create<TodoStore>()((set) => ({
    todos: [],
    addTodo: (text:string) => set((state) => ({
        todos: [
            ...state.todos,
            {
                id: Date.now(),
                text,
                completed: false
            }
        ]
    })),
    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )

    })),
    deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
    }))
}))

export default useTodoStore;