import Todolist from '../components/todolist'
import Addtodo from '@/components/addTodo'
export default function Home() {
  return (
    <main  className='flex items-center justify-center h-screen bg-gradient-to-tr from-primary to-secondary'>
    <div 
    className='px-6 py-8 rounded-xl bg-gradient-to-br from-[#D9D9D9]/50 to-[#D9D9D9]/60  backdrop-blur-xl w-full max-w-md'>
      {/*Todo List */}
      
      {/*@ts-ignore */}
      <Todolist/>
      <Addtodo/>
      <div className='w-1/2 h-1.5 mx-auto rounded bg-black/80 mt-6'></div>

    </div>
    </main>
    
  )
}
