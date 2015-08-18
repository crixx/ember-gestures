module.exports = {

  name: 'ember-gestures',

  normalizeEntityName: function() {},

  afterInstall: function() {
    var bowerPackages = [
      { name: 'runspired/hammer.js', target: 'develop' },
      { name: 'hammer-time', target: '0.2.2'}
    ];
    return this.addBowerPackagesToProject(bowerPackages);
  }

};
