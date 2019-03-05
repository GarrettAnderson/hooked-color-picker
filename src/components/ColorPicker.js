// import React from 'react'
import React, { useState } from 'react'

export default function ColorPicker(props) {
  const [ hueValue, setHueValue ] = useState(Math.floor(Math.random() * 240))
  const [ satValue, setSatValue ] = useState(Math.floor(Math.random() * 100))
  const [ lightValue, setLightValue ] = useState(Math.floor(Math.random() * 100))
  const [ savedColor, savedColorList ] = useState([])

  const saveColor = () => {
    savedColorList((oldList) => oldList.concat(`hsl(${hueValue},${satValue}%,${lightValue}%)`))
    console.log(savedColor)
  }

  return (
    <main>
      <section className="color-sample" style={{ backgroundColor: `hsl(${hueValue},${satValue}%,${lightValue}%)` }}>
        <h1>{props.title}</h1>
        <section>
          <span>
            <h1>H</h1>
          </span>
          <input type="range" min="0" max="240" onChange={(event) => setHueValue(event.target.value)} />
          <span>
            <h1>S</h1>
          </span>
          <input type="range" onChange={(event) => setSatValue(event.target.value)} />
          <span>
            <h1>L</h1>
          </span>
          <input type="range" onChange={(event) => setLightValue(event.target.value)} />
        </section>
      </section>
      <section>
        <p>
          hsl({hueValue}, {satValue}%, {lightValue}%)
        </p>
        <button onClick={saveColor}>Save Color</button>
      </section>
      <section>
        <h1>Saved Colors:</h1>
        <ul className="saved-color-list">
          {savedColor.map((view) => {
            console.log(view)
            return (
              <li
                className="saved-color"
                style={{
                  backgroundColor: `${view}`
                }}
              >
                <p>{view}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
