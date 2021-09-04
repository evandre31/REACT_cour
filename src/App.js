/* import logo from './logo.svg';
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
      </header>
    </div>
  );
}

export default App; */

/* import React from 'react';
import './App.css';

class connexionExemple extends React.Component{
    componentDidMount(){
      const apiUrl = 'http://127.0.0.1:8000/blog_api/';
      fetch(apiUrl)
        .then((response)=>response.json())
        .then((data)=>console.log(data));
    }
    render  () {
      return <div>exmple</div>;
    }
}

export default connexionExemple;  */

import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostLoadingComponent from './components/PostLoading';

function App() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/blog_api/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			}); 
      
	}, [setAppState]);
	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default App;
