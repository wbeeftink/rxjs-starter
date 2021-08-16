import { from } from "rxjs";
import { map } from "rxjs/operators";

const people: string[] = ["Micheal", "Jim", "Dwight"];

from(people)
	.pipe(map((name) => `${name} says hi!`))
	.subscribe((message) => console.log(message));
