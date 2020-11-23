const distance = (a, b) => {
	//TODO: implementați funcția

	//TEST 3 - verificam daca parametrii functiei sunt primitive string sau obiecte String prin functia isString
	const isString = (string) => {
		if (typeof string === 'string' || string instanceof String) {
			return true;
		}
		else return false;
	}

	if (isString(a) && isString(b)) {

		//TEST 4
		if (a.length == 0) return b.length;
		if (b.length == 0) return a.length;

		//TEST 1, 2, 5 - ADAUGARI, INLOCUIRI, STERGERI DE LITERE
		var distanceMat = [];
		var i;
		for (i = 0; i <= b.length; i++) {
			distanceMat[i] = [i];
		}
		var j;
		for (j = 0; j <= a.length; j++) {
			distanceMat[0][j] = j;
		}
		for (i = 1; i <= b.length; i++) {
			for (j = 1; j <= a.length; j++) {
				if (b.charAt(i - 1) == a.charAt(j - 1)) {
					distanceMat[i][j] = distanceMat[i - 1][j - 1];
				} else {
					distanceMat[i][j] = Math.min(distanceMat[i - 1][j - 1] + 1, // adaugare
						Math.min(distanceMat[i][j - 1] + 1, // inlocuire
							distanceMat[i - 1][j] + 1)); // stergere
				}
			}
		}
		return distanceMat[b.length][a.length];
	}
	else throw new Error("InvalidType"); //TEST 3 - exceptie InvalidType
}

export { distance };