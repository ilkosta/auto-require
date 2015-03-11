export default function(pkgName, dev=true) {
  var spawnSync = require('child_process').spawnSync;

  try {
    return require(pkgName);
  }
  catch(e) {
    if(dev)
      spawnSync('npm', ['install','--save-dev',pkgName], {stdout: 'inherit'});
    else
      spawnSync('npm', ['install','--save',pkgName],{stdout: 'inherit'});
    
    return require(pkgName);
  }
};
