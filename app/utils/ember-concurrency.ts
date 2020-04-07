// https://github.com/NullVoxPopuli/emberclear/blob/5cb232c3030b9111f3999a9465ebc9127c0811f2/packages/frontend/app/utils/ember-concurrency.ts

import Task from 'ember-concurrency/task';

type ECTask<Args extends Array<any>, Return> = (
  ...args: Args
) => Generator<any /* potentially yielded types */, Return, unknown>;

export function taskFor<Args extends any[], Return = void>(generatorFn: ECTask<Args, Return>) {
  return (generatorFn as any) as Task<Args, Return>;
}
