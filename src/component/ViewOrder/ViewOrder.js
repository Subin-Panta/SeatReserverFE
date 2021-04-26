import classes from './ViewOrder.module.css'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const conatinerVariants = {
	initial: {
		x: '100vw'
	},
	final: {
		x: 0
	}
}
const ViewOrder = props => {
	const [data, setData] = useState({})
	useEffect(() => {
		if (!props.location.res) {
			props.history.push('/order')
		} else {
			setData({ ...data, ...props.location.res.data.result })
		}
	}, [])
	return (
		<motion.div variants={conatinerVariants} initial='initial' animate='final'>
			<div className={classes.background}>
				<svg
					width='1312'
					height='629'
					viewBox='0 0 1312 629'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M974.883 392.375C981.763 392.375 988.361 389.504 993.226 384.394C998.091 379.283 1000.82 372.352 1000.82 365.125C1000.82 357.898 998.091 350.967 993.226 345.856C988.361 340.746 981.763 337.875 974.883 337.875C968.003 337.875 961.404 340.746 956.539 345.856C951.674 350.967 948.941 357.898 948.941 365.125C948.941 372.352 951.674 379.283 956.539 384.394C961.404 389.504 968.003 392.375 974.883 392.375Z'
						fill='#070606'
					/>
					<path
						d='M871.118 310.625C871.118 307.011 872.484 303.546 874.917 300.991C877.349 298.435 880.648 297 884.088 297H1065.68C1069.12 297 1072.42 298.435 1074.85 300.991C1077.28 303.546 1078.65 307.011 1078.65 310.625V419.625C1078.65 423.239 1077.28 426.704 1074.85 429.259C1072.42 431.815 1069.12 433.25 1065.68 433.25H884.088C880.648 433.25 877.349 431.815 874.917 429.259C872.484 426.704 871.118 423.239 871.118 419.625V310.625ZM910.03 310.625C910.03 317.852 907.297 324.783 902.432 329.894C897.567 335.004 890.968 337.875 884.088 337.875V392.375C890.968 392.375 897.567 395.246 902.432 400.356C907.297 405.467 910.03 412.398 910.03 419.625H1039.74C1039.74 412.398 1042.47 405.467 1047.33 400.356C1052.2 395.246 1058.8 392.375 1065.68 392.375V337.875C1058.8 337.875 1052.2 335.004 1047.33 329.894C1042.47 324.783 1039.74 317.852 1039.74 310.625H910.03Z'
						fill='#070606'
					/>
					<path
						d='M730.765 587.375C737.645 587.375 744.243 584.504 749.108 579.394C753.973 574.283 756.706 567.352 756.706 560.125C756.706 552.898 753.973 545.967 749.108 540.856C744.243 535.746 737.645 532.875 730.765 532.875C723.885 532.875 717.287 535.746 712.422 540.856C707.557 545.967 704.824 552.898 704.824 560.125C704.824 567.352 707.557 574.283 712.422 579.394C717.287 584.504 723.885 587.375 730.765 587.375V587.375Z'
						fill='#070606'
					/>
					<path
						d='M627 505.625C627 502.011 628.367 498.546 630.799 495.991C633.231 493.435 636.531 492 639.971 492H821.56C825 492 828.299 493.435 830.731 495.991C833.164 498.546 834.53 502.011 834.53 505.625V614.625C834.53 618.239 833.164 621.704 830.731 624.259C828.299 626.815 825 628.25 821.56 628.25H639.971C636.531 628.25 633.231 626.815 630.799 624.259C628.367 621.704 627 618.239 627 614.625V505.625ZM665.912 505.625C665.912 512.852 663.179 519.783 658.314 524.894C653.449 530.004 646.851 532.875 639.971 532.875V587.375C646.851 587.375 653.449 590.246 658.314 595.356C663.179 600.467 665.912 607.398 665.912 614.625H795.618C795.618 607.398 798.351 600.467 803.216 595.356C808.081 590.246 814.68 587.375 821.56 587.375V532.875C814.68 532.875 808.081 530.004 803.216 524.894C798.351 519.783 795.618 512.852 795.618 505.625H665.912Z'
						fill='#070606'
					/>
					<path
						d='M728.142 163.375C735.022 163.375 741.62 160.504 746.485 155.394C751.35 150.283 754.083 143.352 754.083 136.125C754.083 128.898 751.35 121.967 746.485 116.856C741.62 111.746 735.022 108.875 728.142 108.875C721.262 108.875 714.663 111.746 709.798 116.856C704.934 121.967 702.2 128.898 702.2 136.125C702.2 143.352 704.934 150.283 709.798 155.394C714.663 160.504 721.262 163.375 728.142 163.375Z'
						fill='#070606'
					/>
					<path
						d='M624.376 81.625C624.376 78.0114 625.743 74.5459 628.175 71.9907C630.608 69.4355 633.907 68 637.347 68H818.936C822.376 68 825.675 69.4355 828.108 71.9907C830.54 74.5459 831.907 78.0114 831.907 81.625V190.625C831.907 194.239 830.54 197.704 828.108 200.259C825.675 202.815 822.376 204.25 818.936 204.25H637.347C633.907 204.25 630.608 202.815 628.175 200.259C625.743 197.704 624.376 194.239 624.376 190.625V81.625ZM663.288 81.625C663.288 88.8521 660.555 95.7833 655.69 100.894C650.825 106.004 644.227 108.875 637.347 108.875V163.375C644.227 163.375 650.825 166.246 655.69 171.356C660.555 176.467 663.288 183.398 663.288 190.625H792.995C792.995 183.398 795.728 176.467 800.593 171.356C805.458 166.246 812.056 163.375 818.936 163.375V108.875C812.056 108.875 805.458 106.004 800.593 100.894C795.728 95.7833 792.995 88.8521 792.995 81.625H663.288Z'
						fill='#070606'
					/>
					<path
						d='M408.765 343.375C415.645 343.375 422.244 340.504 427.109 335.394C431.973 330.283 434.707 323.352 434.707 316.125C434.707 308.898 431.973 301.967 427.109 296.856C422.244 291.746 415.645 288.875 408.765 288.875C401.885 288.875 395.287 291.746 390.422 296.856C385.557 301.967 382.824 308.898 382.824 316.125C382.824 323.352 385.557 330.283 390.422 335.394C395.287 340.504 401.885 343.375 408.765 343.375Z'
						fill='#070606'
					/>
					<path
						d='M305 261.625C305 258.011 306.367 254.546 308.799 251.991C311.231 249.435 314.531 248 317.971 248H499.56C503 248 506.299 249.435 508.731 251.991C511.164 254.546 512.53 258.011 512.53 261.625V370.625C512.53 374.239 511.164 377.704 508.731 380.259C506.299 382.815 503 384.25 499.56 384.25H317.971C314.531 384.25 311.231 382.815 308.799 380.259C306.367 377.704 305 374.239 305 370.625V261.625ZM343.912 261.625C343.912 268.852 341.179 275.783 336.314 280.894C331.449 286.004 324.851 288.875 317.971 288.875V343.375C324.851 343.375 331.449 346.246 336.314 351.356C341.179 356.467 343.912 363.398 343.912 370.625H473.618C473.618 363.398 476.351 356.467 481.216 351.356C486.081 346.246 492.68 343.375 499.56 343.375V288.875C492.68 288.875 486.081 286.004 481.216 280.894C476.351 275.783 473.618 268.852 473.618 261.625H343.912Z'
						fill='#070606'
					/>
					<path
						d='M122.765 136.375C129.645 136.375 136.244 133.504 141.109 128.394C145.973 123.283 148.707 116.352 148.707 109.125C148.707 101.898 145.973 94.9667 141.109 89.8563C136.244 84.746 129.645 81.875 122.765 81.875C115.885 81.875 109.287 84.746 104.422 89.8563C99.5571 94.9667 96.824 101.898 96.824 109.125C96.824 116.352 99.5571 123.283 104.422 128.394C109.287 133.504 115.885 136.375 122.765 136.375Z'
						fill='#070606'
					/>
					<path
						d='M19 54.625C19 51.0114 20.3665 47.5459 22.799 44.9907C25.2315 42.4355 28.5306 41 31.9706 41H213.56C217 41 220.299 42.4355 222.731 44.9907C225.164 47.5459 226.53 51.0114 226.53 54.625V163.625C226.53 167.239 225.164 170.704 222.731 173.259C220.299 175.815 217 177.25 213.56 177.25H31.9706C28.5306 177.25 25.2315 175.815 22.799 173.259C20.3665 170.704 19 167.239 19 163.625V54.625ZM57.9119 54.625C57.9119 61.8521 55.1788 68.7833 50.3139 73.8937C45.449 79.004 38.8507 81.875 31.9706 81.875V136.375C38.8507 136.375 45.449 139.246 50.3139 144.356C55.1788 149.467 57.9119 156.398 57.9119 163.625H187.618C187.618 156.398 190.351 149.467 195.216 144.356C200.081 139.246 206.68 136.375 213.56 136.375V81.875C206.68 81.875 200.081 79.004 195.216 73.8937C190.351 68.7833 187.618 61.8521 187.618 54.625H57.9119Z'
						fill='#070606'
					/>
					<path
						d='M1208.23 95.375C1215.11 95.375 1221.71 92.504 1226.58 87.3937C1231.44 82.2833 1234.18 75.3521 1234.18 68.125C1234.18 60.8979 1231.44 53.9667 1226.58 48.8563C1221.71 43.746 1215.11 40.875 1208.23 40.875C1201.35 40.875 1194.76 43.746 1189.89 48.8563C1185.03 53.9667 1182.29 60.8979 1182.29 68.125C1182.29 75.3521 1185.03 82.2833 1189.89 87.3937C1194.76 92.504 1201.35 95.375 1208.23 95.375Z'
						fill='#070606'
					/>
					<path
						d='M1104.47 13.625C1104.47 10.0114 1105.84 6.54585 1108.27 3.99067C1110.7 1.43549 1114 0 1117.44 0H1299.03C1302.47 0 1305.77 1.43549 1308.2 3.99067C1310.63 6.54585 1312 10.0114 1312 13.625V122.625C1312 126.239 1310.63 129.704 1308.2 132.259C1305.77 134.815 1302.47 136.25 1299.03 136.25H1117.44C1114 136.25 1110.7 134.815 1108.27 132.259C1105.84 129.704 1104.47 126.239 1104.47 122.625V13.625ZM1143.38 13.625C1143.38 20.8521 1140.65 27.7833 1135.78 32.8937C1130.92 38.004 1124.32 40.875 1117.44 40.875V95.375C1124.32 95.375 1130.92 98.246 1135.78 103.356C1140.65 108.467 1143.38 115.398 1143.38 122.625H1273.09C1273.09 115.398 1275.82 108.467 1280.69 103.356C1285.55 98.246 1292.15 95.375 1299.03 95.375V40.875C1292.15 40.875 1285.55 38.004 1280.69 32.8937C1275.82 27.7833 1273.09 20.8521 1273.09 13.625H1143.38Z'
						fill='#070606'
					/>
					<path
						d='M103.765 587.375C110.645 587.375 117.244 584.504 122.109 579.394C126.973 574.283 129.707 567.352 129.707 560.125C129.707 552.898 126.973 545.967 122.109 540.856C117.244 535.746 110.645 532.875 103.765 532.875C96.8852 532.875 90.2869 535.746 85.422 540.856C80.5571 545.967 77.824 552.898 77.824 560.125C77.824 567.352 80.5571 574.283 85.422 579.394C90.2869 584.504 96.8852 587.375 103.765 587.375Z'
						fill='#070606'
					/>
					<path
						d='M0 505.625C0 502.011 1.36655 498.546 3.79901 495.991C6.23148 493.435 9.53062 492 12.9706 492H194.56C198 492 201.299 493.435 203.731 495.991C206.164 498.546 207.53 502.011 207.53 505.625V614.625C207.53 618.239 206.164 621.704 203.731 624.259C201.299 626.815 198 628.25 194.56 628.25H12.9706C9.53062 628.25 6.23148 626.815 3.79901 624.259C1.36655 621.704 0 618.239 0 614.625V505.625ZM38.9119 505.625C38.9119 512.852 36.1788 519.783 31.3139 524.894C26.449 530.004 19.8507 532.875 12.9706 532.875V587.375C19.8507 587.375 26.449 590.246 31.3139 595.356C36.1788 600.467 38.9119 607.398 38.9119 614.625H168.618C168.618 607.398 171.351 600.467 176.216 595.356C181.081 590.246 187.68 587.375 194.56 587.375V532.875C187.68 532.875 181.081 530.004 176.216 524.894C171.351 519.783 168.618 512.852 168.618 505.625H38.9119Z'
						fill='#070606'
					/>
					<path
						d='M1198.77 587.375C1205.65 587.375 1212.24 584.504 1217.11 579.394C1221.97 574.283 1224.71 567.352 1224.71 560.125C1224.71 552.898 1221.97 545.967 1217.11 540.856C1212.24 535.746 1205.65 532.875 1198.77 532.875C1191.89 532.875 1185.29 535.746 1180.42 540.856C1175.56 545.967 1172.82 552.898 1172.82 560.125C1172.82 567.352 1175.56 574.283 1180.42 579.394C1185.29 584.504 1191.89 587.375 1198.77 587.375V587.375Z'
						fill='#070606'
					/>
					<path
						d='M1095 505.625C1095 502.011 1096.37 498.546 1098.8 495.991C1101.23 493.435 1104.53 492 1107.97 492H1289.56C1293 492 1296.3 493.435 1298.73 495.991C1301.16 498.546 1302.53 502.011 1302.53 505.625V614.625C1302.53 618.239 1301.16 621.704 1298.73 624.259C1296.3 626.815 1293 628.25 1289.56 628.25H1107.97C1104.53 628.25 1101.23 626.815 1098.8 624.259C1096.37 621.704 1095 618.239 1095 614.625V505.625ZM1133.91 505.625C1133.91 512.852 1131.18 519.783 1126.31 524.894C1121.45 530.004 1114.85 532.875 1107.97 532.875V587.375C1114.85 587.375 1121.45 590.246 1126.31 595.356C1131.18 600.467 1133.91 607.398 1133.91 614.625H1263.62C1263.62 607.398 1266.35 600.467 1271.22 595.356C1276.08 590.246 1282.68 587.375 1289.56 587.375V532.875C1282.68 532.875 1276.08 530.004 1271.22 524.894C1266.35 519.783 1263.62 512.852 1263.62 505.625H1133.91Z'
						fill='#070606'
					/>
				</svg>
			</div>
			<div className={classes.bill}>
				<div className={classes.header}>
					<h1>#{data._id}</h1>
					<hr />
				</div>
				<span>
					Keep the order number safe. Or click on the download button below to
					download your voucher
				</span>
				<div className={classes.body}>
					<div className={classes.bodyItems}>
						Seats: {data.seats ? data.seats.length : null}
					</div>
					<div className={classes.bodyItems}>
						Price/Seat:Rs {data.pricePerSeat}
					</div>
					<div className={classes.bodyItems}>
						Seat Numbers: {data.seats ? data.seats.toString() : null}
					</div>
					<div className={classes.bodyItems}>Total Price: Rs {data.price}</div>
					<div className={classes.bodyItems}>Van Number: {data.vanNumber}</div>
					<div className={classes.bodyItems}>
						Name: {data.firstName} {data.lastName}
					</div>
					<div className={classes.bodyItems}>
						Phone Number: {data.phoneNumber}
					</div>
					<div className={classes.bodyItems}>E-mail: {data.email}</div>
				</div>

				<motion.svg
					onClick={() =>
						console.log(
							`need to go to the endpoint which will return us a pdf ${data._id}`
						)
					}
					className={classes.footer}
					whileHover={{
						scale: [1.1, 0.9],
						transition: {
							duration: 0.5,
							repeat: Infinity,
							repeatType: 'reverse'
						}
					}}
					width='64'
					height='64'
					viewBox='0 0 64 64'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M31.9999 40L42.6666 29.3333M31.9999 40V8V40ZM31.9999 40L21.3333 29.3333L31.9999 40Z'
						stroke='#006723'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M5.33325 45.3333L6.98925 51.96C7.27766 53.1138 7.94345 54.1381 8.8808 54.8701C9.81815 55.6021 10.9733 55.9998 12.1626 56H51.8373C53.0266 55.9998 54.1817 55.6021 55.119 54.8701C56.0564 54.1381 56.7222 53.1138 57.0106 51.96L58.6666 45.3333'
						stroke='#006723'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</motion.svg>
			</div>
		</motion.div>
	)
}

export default ViewOrder
