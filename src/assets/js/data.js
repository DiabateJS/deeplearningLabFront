export const data = {
  globalparams: {titre: 'Deeplearning Lab', version: '2.0', user:'DJS TECHONOLOGIES'},
  learningconfig:{baseItem:150, learningRate: 30, learningAverage: 1, ecartMoy: 65},
  networks: [
    {id:1, label:'Animaux', nbreNeuronsEntree: 300, nbreNeuronsSortie: 4, neuronsParCouches: '90',
      tauxApprentissage: 0.3, fonctionTransfert:'Sigmoid', typeReseau:'Perceptron'},
    {id:2, label:'Documents', nbreNeuronsEntree: 100, nbreNeuronsSortie: 3, neuronsParCouches: '90,60,30',
      tauxApprentissage: 0.3, fonctionTransfert:'Sigmoid', typeReseau:'Perceptron'}
  ]
};
