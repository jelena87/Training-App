import { Subject } from 'rxjs/Subject';

import { Exercise } from './exercise.model';

export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  private availbleExercise: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15},
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18},
    { id: 'burpies', name: 'Burpees', duration: 60, calories: 8},
  ];

  private runningExercise: Exercise;

  getAvailableExercises() {
    return this.availbleExercise.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availbleExercise.find(ex => ex.id === selectedId);
    this.exerciseChanged.next({ ...this.runningExercise });
  }

}
