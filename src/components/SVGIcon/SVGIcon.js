import React from "react";

const getViewBox = name => {
	switch (name) {
		case "card":
			return "0 0 50 50"
		default:
			return "0 0 32 32";
	}
};

const getPath = (name, props) => {
	switch (name) {
		
		case "card":
			return(
				<g transform="translate(-64 -55)">
					<g fill="none" stroke="#fff" stroke-width="3px" transform="translate(64 55)">
						<circle stroke="none"  cx="25" cy="25" r="25" />
						<circle fill="none" cx="25" cy="25" r="23.5" />
					</g>
					<g transform="translate(74.833 65.834)">
						<g transform="translate(0 0)">
							<path fill="#fff"
								d="M28.392,10.02,19.157.784a2.654,2.654,0,0,0-3.744,0L.773,15.423a2.653,2.653,0,0,0,0,3.744l1.139,1.139h0l7.654,7.654H8.507a.608.608,0,0,0,0,1.215H20.659a.608.608,0,0,0,0-1.215H14.2l14.2-14.2A2.651,2.651,0,0,0,28.392,10.02ZM27.533,12.9,12.894,27.544a1.422,1.422,0,0,1-1.011.417h0a1.421,1.421,0,0,1-1.01-.417L3.2,19.877,17.26,5.818a.608.608,0,1,0-.859-.859L2.342,19.018l-.71-.71a1.438,1.438,0,0,1,0-2.026L16.272,1.643a1.439,1.439,0,0,1,2.026,0L21.585,4.93,7.525,18.99a.608.608,0,0,0,.859.859L22.444,5.79l5.089,5.089A1.434,1.434,0,0,1,27.533,12.9Z"
								transform="translate(0 -0.011)" />
							<path fill="#fff"
								d="M166.477,305.119a.608.608,0,0,0-.859,0l-4.781,4.781a.608.608,0,0,0,.859.859l4.781-4.781A.608.608,0,0,0,166.477,305.119Z"
								transform="translate(-151.506 -287.57)" />
							<path fill="#fff"
								d="M192.965,384.795,191,386.756a.608.608,0,0,0,.859.859l1.961-1.961a.608.608,0,0,0-.859-.859Z"
								transform="translate(-179.956 -362.707)" />
							<path fill="#fff" d="M252.84,353.12l-.258.258a.608.608,0,1,0,.859.859l.258-.258a.608.608,0,1,0-.859-.859Z"
								transform="translate(-238.026 -332.837)" />
							<path fill="#fff"
								d="M347.225,160.847a.608.608,0,0,0-.859,0l-2.578,2.578a.608.608,0,0,0,0,.859L345.507,166a.608.608,0,0,0,.859,0l2.578-2.578a.608.608,0,0,0,0-.859Zm-1.289,3.867-.859-.859,1.719-1.719.859.859Z"
								transform="translate(-324.036 -151.517)" />
							<path fill="#fff"
								d="M310.28,55.8a.605.605,0,0,0,.43-.178l.258-.258a.608.608,0,0,0-.859-.859l-.258.258a.608.608,0,0,0,.43,1.037Z"
								transform="translate(-292.032 -51.233)" />
							<path fill="#fff" d="M100,355.11l-.258.258a.608.608,0,0,0,.859.859l.258-.258a.608.608,0,0,0-.859-.859Z"
								transform="translate(-93.894 -334.714)" />
						</g>
					</g>
				</g>
			)
		default:
		return <path />;
	}
};

const SVGIcon = ({
	name = "",
	style = {},
	fill = "",
	viewBox = "",
	width = "100%",
	className = "",
	height = "100%"
}) => (
	<svg
		width={width}
		style={style}
		height={height}
		fill={fill}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox={viewBox || getViewBox(name)}
		xmlnsXlink="http://www.w3.org/1999/xlink">
		{getPath(name, { fill })}
	</svg>
);
export default SVGIcon;
