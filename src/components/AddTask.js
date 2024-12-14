import React, { useState} from 'react'

function AddTask({addTask}) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)


    function handleSubmit(e) {
        e.preventDefault()
        if(!text){
            alert('Add Task Properly')
            return
        }
        addTask({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }


  return (
    <form className='add-form' onSubmit={handleSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add Task' />
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' value={day} onChange={(e)=>setDay(e.target.value)} placeholder='Add Day & Time' />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}  />
        </div>

        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
