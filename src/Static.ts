// Static properties or methods are shared across all instances of a class.

class TeamMember {
	private static headcount: number = 0;

	constructor(
		private firstName: string,
		private lastName: string,
		private position: string
	) {
		TeamMember.headcount++;
	}

	public static getHeadcount() {
		return TeamMember.headcount;
	}
}

let alex = new TeamMember('Alex', 'Rodriguez', '3rd Base');
let david = new TeamMember('David', 'Ortiz', 'Designated Hitter');

console.log(TeamMember.getHeadcount());
