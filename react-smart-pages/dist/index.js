function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactRouterDom = require('react-router-dom');
var fs = _interopDefault(require('fs'));

function importAllFiles(directoryPath, options) {
  var fileType = options.fileType,
      fileCategory = options.fileCategory;
  if (!fileCategory) throw Error('fileCategory is required for importAllFiles.');
  if (!fileType) throw Error('fileType is required for importAllFiles.');
  if (!directoryPath) throw Error('directoryPath is required for importAllFiles.');
  var regexp = new RegExp('.' + (fileCategory + "." + fileType) + '$');
  var files = fs.readdirSync(directoryPath);
  var filesObject = {};
  files.forEach(function (file) {
    if (regexp.test(file)) {
      filesObject[file.replace('./', '')] = require(directoryPath + "/" + file);
    }
  });
  return filesObject;
}

function SmartRoute(_ref) {
  var directoryPath = _ref.directoryPath,
      options = _ref.options;
  if (!directoryPath) throw new Error('directoryPath is required for SmartRoute.');
  var parentPages = importAllFiles(directoryPath, {
    fileType: (options === null || options === void 0 ? void 0 : options.fileType) || 'js',
    fileCategory: (options === null || options === void 0 ? void 0 : options.fileCategory) || 'parentPage',
    checkTree: true
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, Object.keys(parentPages).map(function (key, i) {
    var page = parentPages[key]["default"];
    var Element = page[1];
    return /*#__PURE__*/React.createElement(reactRouterDom.Route, {
      key: i
    }, /*#__PURE__*/React.createElement(reactRouterDom.Route, {
      path: "/" + page[0].pathName,
      element: /*#__PURE__*/React.createElement(Element, null)
    }), page[2]().map(function (e) {
      return e;
    }));
  }));
}

exports.SmartRoute = SmartRoute;
//# sourceMappingURL=index.js.map
