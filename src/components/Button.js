
function Button({onAdd, showAdd}) {
  return <button onClick={()=> onAdd(prev=> !prev)} className={`${showAdd ? "btn" : "btn-white"}`}>{showAdd ? "Close" : "Add"}</button>
}

export default Button
