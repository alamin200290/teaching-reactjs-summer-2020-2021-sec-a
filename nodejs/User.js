
export default function({name, id, dept}){
	return (
		`<tr>
			<td>${id}</td>
			<td>${name}</td>
			<td>${dept}</td>
			<td>
				<a href='/edit'>Edit </a> |
				<a href='/delete'>Delete </a>
			</td>
		</tr>`
	);
}