import React from 'react'
// import css from '../image/css.png'
// import html from '../image/html.png'
// import js from '../image/js.svg'
// import react from '../image/react.png'
// import node from '../image/node.png'

function SkillList(props) {
  return (
   <>
    {/* <div className='flex' m-8> <img style={{ width:'10%'}} src={css} alt={css} />
    <img style={{ width:'10%'}} src={html} alt={css} />
    <img style={{ width:'16%'}} src={react} alt={css} /></div>
    <div className='flex' m-8> <img style={{ width:'10%'}} src={js} alt={css} />
     <img style={{ width:'10%'}} src={node} alt={css}/></div> */}
    <div style={{backgroundColor:props.color}}>
     <span>{props.skillName }</span>
     <span>{props.emoji }</span>
</div>
   </>
   
  )
}

export default SkillList