import Image from 'next/image'
import Input from './components/Input/Input'
import TodoList from './components/TodoList'
export default function Home() {
  return (
   <>
      <main className='w-full min-h-screen flex flex-col items-center justify-center'>
          <Input/>
          <TodoList/>
      </main>
   </>
  )
}
