
export default function Index(title, content){
	return(
		`<html>
			<head>
				<title>${title}</title>
				<link rel='stylesheet' href='style.css'/>
			</head>
			<body>
				<div>${content}</div>
			</body>
		</html>`
	);
}