import './App.css'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Navbar from './Navbar'

function App() {
  const [HorizontalLength, setHorizontalLength] = useState(10)
  const [VerticalLength, setVerticalLength] = useState(10)
  const [Blur, setBlur] = useState(10)
  const [Color, setColor] = useState('black')
  const [Copied, setCopied] = useState(false)
  const val = `box-shadow: ${HorizontalLength}px ${VerticalLength}px ${Blur}px ${Color};`
  return (
    <>
      <Navbar />
      <div className='App'>
        <div className='controls'>
          <label>Horizontal length</label>
          <input
            type='range'
            min='-200'
            max='200'
            value={HorizontalLength}
            onChange={(e) => setHorizontalLength(e.target.value)}
          />

          <label>Vertical length</label>
          <input
            type='range'
            min='-200'
            max='200'
            value={VerticalLength}
            onChange={(e) => setVerticalLength(e.target.value)}
          />
          <label>Blur</label>
          <input
            type='range'
            min='-0'
            max='200'
            value={Blur}
            onChange={(e) => setBlur(e.target.value)}
          />
          <label>Color</label>
          <input
            type='color'
            value={Color}
            onChange={(e) => setColor(e.target.value)}
          />

          <p>
            box-shadow: {HorizontalLength}px {VerticalLength}px {Blur}px {Color}
          </p>
          <CopyToClipboard text={val} onCopy={() => setCopied(true)}>
            <a class='waves-effect waves-light btn-small'>Copy CSS</a>
          </CopyToClipboard>
          {/* {Copied ? (Copied = false) : (Copied = true)} */}
        </div>
        <div className='output'>
          <div
            className='output-box'
            style={{
              boxShadow: `${HorizontalLength}px ${VerticalLength}px ${Blur}px ${Color}`,
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default App
