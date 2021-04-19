// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
// 	const [tableContent, setTableContent] = useState([]);
// 	const [search, setSearch] = useState("");

// 	useEffect(() => {
// 		axios.get("http://timeapi.kaaylabs.com/api/v1/project_view/")
// 			.then((res) => setTableContent(res.data.data))
// 			.catch((e) => console.log(e));
// 	}, []);

// 	const statusValues = [...new Set(tableContent.map((item) => item.status))];
// 	return (
// 		<div>
// 			<label for="search">search</label>
// 			<select
// 				name="search"
// 				id="search"
// 				style={{ margin: "1px" }}
// 				onChange={(e) => setSearch(e.target.value)}
// 			>
// 				<option value="">All</option>
// 				{statusValues.map((status) => (
// 					<option value={status}>{status}</option>
// 				))}
// 			</select>
// 			<table>
// 				<tr>
// 					<th>Project ID</th>
// 					<th>Project Code</th>
// 					<th>Description</th>
// 					<th>Start Date</th>
// 					<th>End Date</th>
// 					<th>CName</th>
// 					<th>Status</th>
// 				</tr>
// 				{search
// 					? tableContent
// 							.filter((item) => item.status === search)
// 							.map((item) => (
// 								<tr>
// 									<td>{item.project_id}</td>
// 									<td>{item.project_code}</td>
// 									<td>{item.description}</td>
// 									<td>{item.start_date}</td>
// 									<td>{item.end_date}</td>
// 									<td>{item.company_name}</td>
// 									<td>{item.status}</td>
// 								</tr>
// 							))
// 					: tableContent.map((item) => (
// 							<tr>
// 								<td>{item.project_id}</td>
// 								<td>{item.project_code}</td>
// 								<td>{item.description}</td>
// 								<td>{item.start_date}</td>
// 								<td>{item.end_date}</td>
// 								<td>{item.company_name}</td>
// 								<td>{item.status}</td>
// 							</tr>
// 					  ))}
// 			</table>
// 		</div>
// 	);
// }

// export default App;


import React, { Component } from 'react';
import Form from "./Form";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [],
			change: true
		};
		this.addPerson = this.addPerson.bind(this);
	}
	addPerson(name) {
		let id = (Math.floor(Math.random() * 1000) + 1)
		this.setState(prevState => ({
			people: [...prevState.people, { name, id }]
		}));
	}
	deletePerson(index) {
		// console.log(index.name)
		return () => {
			this.setState(prevState => ({
				people: prevState.people.filter(person => person.id !== index.id)
			}));
		};
	}
	editPerson(index) {
		return () => {
			let get = prompt("enter new data", index.name)
			index.id ? index.name = get : index.name = index
			this.setState({
				change: false
			}
			)
		}
	}
	render() {
		return (
			<div className="App">
				<Form addPerson={this.addPerson} />
				<table border='1px' cellPadding='20%' padding='20px'>
					<thead>
						<tr>
							<th>S No</th>
							<th>NAME</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.state.people.map((person) => {
							return (
								<tr key={person}>
									<th>{person.id}</th>
									<td>{person.name}</td>
									<td>
										<button onClick={this.deletePerson(person)}>
											Delete
                    </button>
										<button onClick={this.editPerson(person)}>
											edit
                    </button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
export default App;