import './App.css'
import { Card } from '@uifabric/react-cards'
import { Text, Image } from 'office-ui-fabric-react'
const DisplayContent = (props) => {
	const { details } = props
	return (
		<>
			{Object.keys(details).length != 0 ? (
				<div class='flex-container'>
					<div>
						<Card aria-label='Basic vertical card'>
							<Card.Item>
								<Card.Item fill>
									<Image
										src={details.avatar}
										width='100%'
										alt={details.email}
									/>
								</Card.Item>
								<div class='flex-container'>
									<div>
										<Text>ID : {details.id}</Text>
									</div>
									<div>
										<Text>
											Name : {details.first_name} {details.last_name}
										</Text>
									</div>
								</div>
							</Card.Item>
						</Card>
					</div>
				</div>
			) : (
				<div class='flex-container'>
					To View Details First Choose Depart Than Choose Id
				</div>
			)}
		</>
	)
}
export default DisplayContent
