import { Coach } from "./Coach";

export class Football implements Coach{
    getDailyWorkout(): String {
        return "Goal!";
    }
}