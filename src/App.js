import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      constructor(props){
  super(props)
  this.state = {
    listOpen: false,
    headerTitle: this.props.title
  }
}

    const{listOpen, headerTitle} = this.state
  return(
    this.toggleList()}>
        {headerTitle}
        {listOpen
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        }
    </div>
{listOpen && <ul className="dd-list">
       {list.map((item) => (
         <li className="dd-list-item" key={item.id} >{item.title}</li>
        ))}
      </ul>}
    </div>
  )
}

toggleSelected(id, key){
  let temp = this.state[key]
  temp[id].selected = !temp[id].selected
  this.setState({
    [key]: temp
  })
}

<Dropdown
  titleHelper="Location"
  title="Select location"
  list={this.state.location}
  toggleItem={this.toggleSelected}
/>
static getDerivedStateFromProps(nextProps){
    const count = nextProps.list.filter(function(a) { return a.selected; }).length;
    console.log(count)

if(count === 0){
      return {headerTitle: nextProps.title}
    }
    else if(count === 1){
      return {headerTitle: `${count} ${nextProps.titleHelper}`}
    }
    else if(count > 1){
      return {headerTitle: `${count} ${nextProps.titleHelper}s`}
    }
  }

      
      constructor(){
  super()
  this.state = {
    location: [
      {
          id: 0,
          title: 'New York',
          selected: false,
          key: 'location'
      },
      {
        id: 1,
        title: 'Dublin',
        selected: false,
        key: 'location'
      },
      {
        id: 2,
        title: 'California',
        selected: false,
        key: 'location'
      },
      {
        id: 3,
        title: 'Istanbul',
        selected: false,
        key: 'location'
      },
      {
        id: 4,
        title: 'Izmir',
        selected: false,
        key: 'location'
      },
      {
        id: 5,
        title: 'Oslo',
        selected: false,
        key: 'location'
      }
    ]
  }
}

      </header>
    
    <Dropdown
  title="Select location"
  list={this.state.location}
/>

    </div>
  );
}

export default App;
