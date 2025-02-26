import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'clarity': 'http://localhost:4201/remoteEntry.json',
  'ngBootstrap': 'http://localhost:4202/remoteEntry.json',
  'agGrid': 'http://localhost:4203/remoteEntry.json',
  'kendoUI': 'http://localhost:4204/remoteEntry.json',
  'primeNG': 'http://localhost:4205/remoteEntry.json',
  'ngZorro': 'http://localhost:4206/remoteEntry.json',
  'ngMaterial': 'http://localhost:4207/remoteEntry.json',
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
