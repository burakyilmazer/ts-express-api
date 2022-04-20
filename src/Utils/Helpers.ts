export default class Helpers {

	static getFileRoute(filename: String) {

		const string = filename.split('.')[0].split('Route')[0].toLowerCase();
		return string;

	}

}