// import React from 'react'
import React, { useState } from 'react'

export default function ColorPicker(props) {
  const [ hueValue, setHueValue ] = useState(Math.floor(Math.random() * 240))
  const [ satValue, setSatValue ] = useState(Math.floor(Math.random() * 100))
  const [ lightValue, setLightValue ] = useState(Math.floor(Math.random() * 100))

  const saveColor = () => {}

  return (
    <main style={{ backgroundColor: `hsl(${hueValue},${satValue}%,${lightValue}%)` }}>
      <section className="color-sample">
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
        {/* <button onClick={saveColor}>Save Color</button> */}
      </section>
    </main>
  )
}
