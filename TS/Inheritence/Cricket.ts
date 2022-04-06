import { Coach } from "./Coach";

export class Cricket implements Coach{
    getDailyWorkout(): String {
        return "Spin bowl!";
    }
}