

const Counter = ({contador, sumar}) => {
  return (
    <>
        <div>Counter {contador}</div>
        <button onClick={() => sumar()}>sumar</button>
    </>
  )
}



export default Counter