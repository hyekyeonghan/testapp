module.exports = {
  name: 'testapp1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/testapp1/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
