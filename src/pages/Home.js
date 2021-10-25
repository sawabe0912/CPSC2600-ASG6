import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";

function Home() {
	const [appState, setAppState] = useState({
		loading: false,
		posts: null
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = "https://jsonplaceholder.typicode.com/posts";
		fetch(apiUrl)
			.then((res) => res.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts.slice(0, 5) });
			});
	}, [setAppState]);

	return <Posts isLoading={appState.loading} posts={appState.posts} />;
}

export default Home;
