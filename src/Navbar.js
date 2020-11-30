import './App.css'
import { PrimaryButton, Dropdown } from '@fluentui/react'

const Navbar = (props) => {
	const {
		handleempid,
		handledepartment,
		getdetails,
		dropvalue,
		hrDropdown,
		engineeringDropdown,
		handleClear,
	} = props
	return (
		<>
			<div class='flex-container'>
				<div>
					<Dropdown
						label={'Department'}
						onChange={handledepartment}
						options={[
							{ text: 'HR', key: 'hr' },
							{ text: 'ENGINEERING', key: 'Engineering' },
						]}
						styles={{
							dropdown: { width: 300 },
						}}
					/>
				</div>
				<div>
					<Dropdown
						label={'Employee ID'}
						onChange={handleempid}
						options={
							dropvalue === ''
								? [{ text: 'select a department first', key: '' }]
								: dropvalue === 'hr'
								? hrDropdown.map((e) => ({ text: e, key: e }))
								: engineeringDropdown.map((e) => ({ text: e, key: e }))
						}
						styles={{
							dropdown: { width: 300 },
						}}
					/>
				</div>
				<div>
					<PrimaryButton
						text='GetDetails'
						onClick={getdetails}
						allowDisabledFocus
					/>
					<PrimaryButton
						text='Clear'
						onClick={handleClear}
						allowDisabledFocus
					/>
				</div>
			</div>
		</>
	)
}
export default Navbar
