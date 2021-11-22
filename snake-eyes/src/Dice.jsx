/*
- Dobbelsteen tonen
- Event wanneer erop geklikt wordt
- Disablen indien 1 op dobbelsteen
*/

export default function Dice({
  eye, onRoll, }){
  return(
    <button 
    onClick={onRoll}
    className="snakeEye"
    disabled = {eye === 1}>
      {eye}
    </button>
  )
}