import React, { useState } from 'react'
import { Remarkable } from "remarkable"
const md = new Remarkable

export default function Main({ name }) {



  const [text, setText] = useState(`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  
  `)



  return (
      <div className='wrap'> 
    <div className='edit' >
        
        <div className="nav"> Editor 
  

        </div>
        <textarea id="editor"   value={text} onChange={(e) => setText(e.target.value)} placeholder="Hello ! You should try my Markdown Editor by writing any HTML you want here anddzdlkzd see it rendering down ther"></textarea>
    </div>
    <div className='prev' >
        
    <div className="nav"> Preview
  
    </div>

    <span id="na" id="prev" dangerouslySetInnerHTML={{ __html: md.render(text)}} >

    </span>
</div>
</div>
  )
}
