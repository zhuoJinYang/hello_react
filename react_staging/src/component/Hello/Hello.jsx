import hello from './Hello.module.css'

export default function Hello(){
  return(
    <div className={hello.hello_context}>
      <h2>Hello React!</h2>
    </div>
  )
}