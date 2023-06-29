import React from "react";
import TodoContainer from "./TodoContainer.jsx";
//include images into your bundle


//create your first component

const Home = () => {
	return (
		<div className="text-center">
			<h1>todos</h1> 
			<TodoContainer />
		</div>
	);
};

export default Home;
