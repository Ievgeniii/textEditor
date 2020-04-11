import React, {useState, Fragment} from 'react';
import './App.css';

import Controls from "./Controls/Controls";

const editedText = []

const App = () => {

  const [result, setResult] = useState('');

  const addText = (field, value) => {
    const markedText = window.getSelection().anchorNode.wholeText;
    const index = editedText.findIndex(item => item.name === markedText);

    if (index === -1) {
      editedText.push({
        name: markedText,
        [field]: value
      })
    } else {
      editedText[index][field] = value
    }
  }

  const getJSON = () => {
    let current;

    for (let i = 0; i < editedText.length; i++) {
      current = editedText[i];
      for (let j = editedText.length - 1; j > i; j--) {
        if (current.foreColor === editedText[j].foreColor && current.backColor === editedText[j].backColor && current.fontSize === editedText[j].fontSize) {
          if (Array.isArray(current.name)) {
            current.name = current.name.concat([editedText[j].name]);
          } else {
            current.name = [].concat([editedText[j].name, current.name]);
          }
          editedText.splice(j, 1);
        }
      }
    }

    setResult(editedText.length ? JSON.stringify(editedText) : 'Empty');
    console.log(editedText.length ? JSON.stringify(editedText) : 'Empty');
  }

  const setColor = (e) => {
    document.execCommand('foreColor', false, e.target.value);
    if (window.getSelection().anchorNode !== null) {
      addText('foreColor', e.target.value);
    }
  }

  const setBackGround = (e) => {
    document.execCommand('backColor', false, e.target.value)
    if (window.getSelection().anchorNode !== null) {
      addText('backColor', e.target.value);
    }
  }

  const setFont = (e) => {
    document.execCommand('fontSize', false, e.target.value)
    if (window.getSelection().anchorNode !== null) {
      addText('fontSize', e.target.value);
    }
  }

  return (
    <Fragment>
      <Controls
        changeColor={setColor}
        changeBackGround={setBackGround}
        changeFont={setFont}/>

      <div contentEditable={true} className='editor'></div>

      <button onClick={getJSON}>Get JSON</button>

      <div className='result'>{result}</div>
    </Fragment>
  );
}

export default App;
