
export default function Button(msg, callback){
	return `<input class='btn' type='button' onclick='${callback()}' name='submit' value='${msg}'>`;
}