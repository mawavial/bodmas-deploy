import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Display from './display'
import Buttons from './buttons'

const Calculator = (): JSX.Element => {
	return (
		<Container
			style={{
				border: '10px solid #4907a0',
				width: '90%',
				height: '90%',
				borderRadius: 20,
				boxShadow: '8px 8px 0 2px #c0c0c0',
			}}
		>
			<Grid container
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}
				xl={12}
				justify='flex-start'
				alignItems='flex-start'
				direction='row'>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Display />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Buttons />
				</Grid>
			</Grid>
		</Container>)
}

export default Calculator