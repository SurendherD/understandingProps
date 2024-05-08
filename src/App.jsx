import './App.css';

function App(imageData) {
  // code here
    return (
      <div className="imageContainer">
        {
          imageData.data.map(image=>(
            <img src={image.img}/>
          ))
        }
      </div>
      );
}

export default App;
