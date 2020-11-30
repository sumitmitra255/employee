import './App.css'
import { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import DisplayContent from './DisplayContent.js'
function App() {
	const [dropvalue, setdropvalue] = useState('')
	const [detailsId, setDetailId] = useState(0)
	const [details, setDetails] = useState({})

	const handledepartment = (e, selectedOption) => {
		setdropvalue(selectedOption.key)
	}

	const handleempid = (e, selectedempid) => {
		setDetailId(selectedempid.key)
	}
	const handleClear = (e) => {
		setDetails({})
		setdropvalue('')
		setDetailId(0)
	}
	const getdetails = () => {
		detailsId != 0
			? axios
					.get(`https://reqres.in/api/users/${detailsId}`)
					.then((response) => {
						setDetails(response.data.data)
						setDetailId(0)
					})
					.catch((err) => {
						alert(err.message)
					}, [])
			: alert(
					'Sorry! Invalid Request ! Please select new id.(If you are getting details for same id more than once Please select new Id)'
			  )
	}
	return (
		<>
			<Navbar
				handleempid={handleempid}
				handledepartment={handledepartment}
				getdetails={getdetails}
				dropvalue={dropvalue}
				hrDropdown={[1, 2, 3, 4, 5]}
				engineeringDropdown={[6, 7, 8, 9, 10]}
				handleClear={handleClear}
			/>
			<DisplayContent details={details} />
		</>
	)
}

export default App
