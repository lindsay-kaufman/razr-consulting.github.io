import './App.scss'

function App() {
  return (
    <div className="razr-consulting">
      <nav className="razr-consulting__nav">
        <div className="razr-consulting__nav--logo">Logo</div>
        <div className="razr-consulting__nav--buttons">
          <button className="razr-consulting__nav--buttons-about">
            About Us
          </button>
          <button className="razr-consulting__nav--buttons-clients">
            Past Clients
          </button>
          <button className="razr-consulting__nav--buttons-contact">
            Get in Touch
          </button>
        </div>
      </nav>

      <div className="razr-consulting__header">
        <div className="razr-consulting__header-banner">
          <div className="razr-consulting__header-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
