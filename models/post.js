import {createEvent, createStore, sample} from 'effector'

export const changed = createEvent()

export const $title = createStore('')

sample({
  clock: changed,
  target: $title,
});