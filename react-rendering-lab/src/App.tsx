import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  console.log('🔴 App 렌더링 됨!')

  return (
    <div>
      <h1>챕터 1. 렌더링은 언제 일어나는가?</h1>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1 증가
      </button>
      <button onClick={() => setCount(count)}>
        그대로 (같은 값)
      </button>
    </div>
  )
}

export default App