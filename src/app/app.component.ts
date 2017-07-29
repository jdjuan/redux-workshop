import { ADD, Add } from './queue.reducer';
import { AppState } from './reducers';
import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { INCREMENT, DECREMENT, RESET, INCREMENT10, DECREMENT10 } from './counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: Observable<number>;
  queue: Observable<number[]>;
  name: string;

  constructor(private store: Store<AppState>) {
    this.counter = store.select<number>((state: AppState) => {
      return state.counter;
    });
    this.queue = store.select<number[]>((state: AppState) => {
      return state.queue;
    });
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  increment10() {
    this.store.dispatch({ type: INCREMENT10 });
  }

  decrement10() {
    this.store.dispatch({ type: DECREMENT10 });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  add() {
    this.store.dispatch(new Add(this.name));
  }
}
