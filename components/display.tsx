import { Container, Grid, Typography, Hidden } from '@material-ui/core'
import React from 'react'
import style from '../styles/Display.module.css'

const Display = (): JSX.Element => {

	return (<>
		<Container className={style.container}>
			<Grid className={style.innerContainer}>
				<Hidden mdUp>
					<Typography className={style.displaySmall}>
					3444342423423,5465
					</Typography>
				</Hidden>
				<Hidden mdDown>
					<Typography className={style.displayLarge}>
					3444342423423,5465
					</Typography>
				</Hidden>
			</Grid>

		</Container>
	</>)
}

export default Display