export async function GetValue(url: string) {
	const objResponse = await fetch(url);
	const jsonResponse = await objResponse.json();
	return jsonResponse;
}

export async function PostValue(
	url: string,
	data: string,
	secureToken?: string,
) {
	const objResponse = await fetch(url, {
		method: 'POST',
		body: data,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${secureToken}`,
		},
	});

	const jsonResponse = await objResponse.json();
	return jsonResponse;
}

//! DELETE + PATCH
